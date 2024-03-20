import { assertString } from '../../utils/assertString';

/**
 * Checks if a string represents an IPv4 or IPv6 address.
 * @param str The string to check if it's an IP address.
 * @param version The IP version to check for ('4' for IPv4, '6' for IPv6). If not specified, checks both IPv4 and IPv6.
 * @returns True if the string is a valid IPv4 or IPv6 address according to the specified version, false otherwise.
 * @example
 * const ipv4Address = '192.0.2.1';
 * const isIPv4 = isIP(ipv4Address, '4');
 * console.log(isIPv4); // Output: true
 * 
 * const ipv6Address = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
 * const isIPv6 = isIP(ipv6Address, '6');
 * console.log(isIPv6); // Output: true
 */
export const isIP = (str: string, version: string = ''): boolean => {
    assertString(str);
    version = String(version);
    if (!version) {
        return isIP(str, '4') || isIP(str, '6');
    }
    if (version === '4') {
        return IPv4AddressRegExp.test(str);
    }
    if (version === '6') {
        return IPv6AddressRegExp.test(str);
    }
    return false;
}

/** Regular expression for matching an IPv4 address */
const IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);

/** Regular expression for matching an IPv6 address */
const IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
const IPv6AddressRegExp = new RegExp('^(' +
  `(?:${IPv6SegmentFormat}:){7}(?:${IPv6SegmentFormat}|:)|` +
  `(?:${IPv6SegmentFormat}:){6}(?:${IPv4AddressFormat}|:${IPv6SegmentFormat}|:)|` +
  `(?:${IPv6SegmentFormat}:){5}(?::${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,2}|:)|` +
  `(?:${IPv6SegmentFormat}:){4}(?:(:${IPv6SegmentFormat}){0,1}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,3}|:)|` +
  `(?:${IPv6SegmentFormat}:){3}(?:(:${IPv6SegmentFormat}){0,2}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,4}|:)|` +
  `(?:${IPv6SegmentFormat}:){2}(?:(:${IPv6SegmentFormat}){0,3}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,5}|:)|` +
  `(?:${IPv6SegmentFormat}:){1}(?:(:${IPv6SegmentFormat}){0,4}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,6}|:)|` +
  `(?::((?::${IPv6SegmentFormat}){0,5}:${IPv4AddressFormat}|(?::${IPv6SegmentFormat}){1,7}|:))` +
  ')(%[0-9a-zA-Z-.:]{1,})?$');

