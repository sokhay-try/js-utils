import { assertString } from '../../utils/assertString';
import { merge } from '../../utils/merge';

/**
 * Options for FQDN validation.
 */
export interface FQDNOptions {
    require_tld?: boolean;
    allow_underscores?: boolean;
    allow_trailing_dot?: boolean;
    allow_numeric_tld?: boolean;
    allow_wildcard?: boolean;
    ignore_max_length?: boolean;
}

/**
 * Default options for FQDN validation.
 */
const default_fqdn_options: FQDNOptions = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false,
};

/**
 * Checks if a string represents a fully qualified domain name (FQDN) according to specified options.
 * @param str The string to check if it's a FQDN.
 * @param options The options object containing various settings for FQDN validation.
 * @returns True if the string is a valid FQDN based on the options, false otherwise.
 * @example
 * const fqdn = 'example.com';
 * const options = { require_tld: true, allow_underscores: false };
 * const isValid = isFQDN(fqdn, options);
 * console.log(isValid); // Output: true
 */
export const isFQDN = (str: string, options?: FQDNOptions): boolean => {
    assertString(str);
    options = merge(options, default_fqdn_options);

    /* Remove the optional trailing dot before checking validity */
    if (options.allow_trailing_dot && str[str.length - 1] === '.') {
        str = str.substring(0, str.length - 1);
    }

    /* Remove the optional wildcard before checking validity */
    if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
        str = str.substring(2);
    }

    const parts = str.split('.');
    const tld = parts[parts.length - 1];

    if (options.require_tld) {
        // disallow fqdns without tld
        if (parts.length < 2) {
            return false;
        }

        if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
            return false;
        }

        // disallow spaces
        if (/\s/.test(tld)) {
            return false;
        }
    }

    // reject numeric TLDs
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
        return false;
    }

    return parts.every((part) => {
        if (part.length > 63 && !options.ignore_max_length) {
            return false;
        }

        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
            return false;
        }

        // disallow full-width chars
        if (/[\uff01-\uff5e]/.test(part)) {
            return false;
        }

        // disallow parts starting or ending with hyphen
        if (/^-|-$/.test(part)) {
            return false;
        }

        if (!options.allow_underscores && /_/.test(part)) {
            return false;
        }

        return true;
    });
}
