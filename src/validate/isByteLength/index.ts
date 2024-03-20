import { assertString } from "../../utils/assertString";

/**
 * Checks if the byte length of a string falls within a specified range.
 * @param str The string to check the byte length of.
 * @param options The options object containing the minimum and maximum byte length, or just the minimum byte length.
 * @param max The maximum byte length (optional, for backwards compatibility).
 * @returns True if the byte length of the string falls within the specified range, false otherwise.
 * @example
 * // Example 1: Using options object
 * const str1 = 'Hello, world!';
 * const options1 = { min: 5, max: 15 };
 * const result1 = isByteLength(str1, options1);
 * console.log(result1); // Output: true (length is between 5 and 15 bytes)
 * 
 * // Example 2: Using minimum length only
 * const str2 = 'Short';
 * const min2 = 10;
 * const result2 = isByteLength(str2, min2);
 * console.log(result2); // Output: false (length is less than 10 bytes)
 * 
 * // Example 3: Using minimum and maximum lengths directly
 * const str3 = 'A string with a byte length';
 * const min3 = 5;
 * const max3 = 20;
 * const result3 = isByteLength(str3, min3, max3);
 * console.log(result3); // Output: true (length is between 5 and 20 bytes)
 */
export function isByteLength(str: string, options?: { min?: number; max?: number } | number, max?: number): boolean {
    assertString(str);
    let min: number;
    if (typeof options === 'object') {
        min = options.min || 0;
        max = options.max;
    } else { // backwards compatibility: isByteLength(str, min [, max])
        min = arguments[1];
        max = arguments[2];
    }
    const len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === 'undefined' || len <= max);
}
