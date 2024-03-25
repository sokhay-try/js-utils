import { assertString } from "../assertString";

/**
 * Counts the total number of digits in a string.
 * @param str The string to count digits in.
 * @returns The total number of digits in the string.
 */
export function countDigits(str: string): number {
    assertString(str)
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[0-9]/.test(str[i])) {
            count++;
        }
    }
    return count;
}
