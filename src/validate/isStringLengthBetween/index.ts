import { assertString } from "../../utils/assertString";

/**
 * Checks if the length of a string falls within a specified range.
 * @param str The string to check the length of.
 * @param options The options object containing the minimum and maximum length constraints.
 * @returns True if the length of the string falls within the specified range, false otherwise.
 */
export const isStringLengthBetween = (str: string, options: LengthOptions): boolean => {
    if (!str) {
        return false; // Handle invalid input
    }
    assertString(str)

    const { min, max } = options;

    if (typeof min === 'number' && typeof max === 'number') {
        return str.length >= min && str.length <= max;
    } else {
        return false; // Handle invalid options
    }
}


export interface LengthOptions {
    /**
     * Minimum length allowed.
     */
    min?: number;
    /**
     * Maximum length allowed.
     */
    max?: number;
}