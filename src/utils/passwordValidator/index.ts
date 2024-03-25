import { assertString } from "../assertString";
import { countDigits } from "../countDigits";
import { countLowercase } from "../countLowercase";
import { countSpecialChars } from "../countSpecialChars";
import { countUppercase } from "../countUppercase";

export interface IPasswordRule {
    minNumLowerLetter: number;
    minNumUpperLetter: number;
    minNumNumeric: number;
    minNumSpecialChar: number;
    minLength: number;
}

type PasswordValidationResult = true | { [key: string]: any };

/**
 * Validates a password against a set of rules.
 * @param value The password to validate.
 * @param rule An object containing the password validation rules.
 * @returns `true` if the password is valid, otherwise an object with validation errors.
 */
export function passwordValidator(value: string, rule: IPasswordRule): PasswordValidationResult {
    assertString(value)

    if (countLowercase(value) < rule.minNumLowerLetter) {
        return { minNumLowerLetter: `At least ${rule.minNumLowerLetter} lowercase letter is required.` };
    }
    if (countUppercase(value) < rule.minNumUpperLetter) {
        return { minNumUpperLetter: `At least ${rule.minNumUpperLetter} uppercase letter is required.` };
    }
    if (countDigits(value) < rule.minNumNumeric) {
        return { minNumNumeric: `At least ${rule.minNumNumeric} number is required.` };
    }
    if (countSpecialChars(value) < rule.minNumSpecialChar) {
        return { minNumSpecialChar: `At least ${rule.minNumSpecialChar} special character is required.` };
    }
    if (value.length < rule.minLength) {
        return { minLength: `At least ${rule.minLength} characters is required.` };
    }

    return true;
}