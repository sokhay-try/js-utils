import { assertString } from "../assertString";

/**
 * Counts the total number of special characters in a string using a regular expression.
 * @param str The string to count special characters in.
 * @returns The total number of special characters in the string.
 */
export function countSpecialChars(str: string): number {
    assertString(str)
    const specialCharRegex = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#\\"\\]/;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (specialCharRegex.test(str[i])) {
            count++;
        }
    }
    return count;
}
