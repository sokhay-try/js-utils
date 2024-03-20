/**
 * Checks if a string's length exceeds the maximum length.
 * @param value The string value to check.
 * @param options Options object containing the maximum length.
 * @returns True if the string's length exceeds the maximum length, false otherwise.
 * @example
 * const result = isStringExceedMaxLength('example string', { maxLength: 15 });
 * console.log(result); // Output: false
 */
export const isStringExceedMaxLength = (value: string, options: { maxLength: number }): boolean => {
    return value.length > options.maxLength;
};
