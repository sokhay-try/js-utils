import { assertString } from "../../utils/assertString";
import { merge } from "../../utils/merge";

export interface IsEmptyOptions {
    ignore_whitespace?: boolean;
}

const default_is_empty_options: IsEmptyOptions = {
    ignore_whitespace: false,
};

/**
 * Checks if a string is empty.
 * @param str The string to check.
 * @param options Options to customize the behavior.
 * @returns True if the string is empty, false otherwise.
 * @example
 * const str = "   ";
 * const result = isEmpty(str, { ignore_whitespace: true });
 * console.log(result); // Output: true
 */
export const isEmpty = (str: string, options?: IsEmptyOptions): boolean => {
    assertString(str)
    options = merge(options, default_is_empty_options);
    return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
};
