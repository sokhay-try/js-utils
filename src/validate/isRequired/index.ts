/**
 * Checks if a value is null, undefined, or an empty string.
 * @param value The value to check.
 * @returns True if the value is null, undefined, or an empty string, false otherwise.
 * @example
 * const result = isRequired('');
 * console.log(result); // Output: true
 */
export const isRequired = (value: any): boolean => {
    return value === null || value === undefined || (typeof value === 'string' && value.trim() === '');
};
