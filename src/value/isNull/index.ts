/**
 * Checks if a value is null.
 * @param value The value to check.
 * @returns True if the value is null, false otherwise.
 * @example
 * const result = isNull(null);
 * console.log(result); // Output: true
 */
export const isNull = (value: any): boolean => {
    return value === undefined || value === null;
};
