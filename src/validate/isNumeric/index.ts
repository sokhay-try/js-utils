/**
 * Checks if a value is numeric.
 * @param value The value to check.
 * @returns True if the value is numeric, false otherwise.
 */
export function isNumeric(value: any): boolean {
    if (typeof value === 'number') {
        return !isNaN(value);
    }
    if (typeof value === 'string' && value.trim() !== '') {
        return !isNaN(Number(value));
    }
    return false;
}
