import { assertString } from "../assertString";

/**
 * Counts the total number of uppercase letters in a string.
 * @param str The string to count uppercase letters in.
 * @returns The total number of uppercase letters in the string.
 */
export function countUppercase(str: string): number {
    assertString(str)
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            count++;
        }
    }
    return count;
}