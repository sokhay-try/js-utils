import { assertString } from "../assertString";

/**
 * Counts the total number of lowercase letters in a string.
 * @param str The string to count lowercase letters in.
 * @returns The total number of lowercase letters in the string.
 */
export function countLowercase(str: string): number {
    assertString(str)
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            count++;
        }
    }
    return count;
}
