import { assertString } from "./assertString";
import { countDigits } from "./countDigits";
import { countLowercase } from "./countLowercase";
import { countSpecialChars } from "./countSpecialChars";
import { countUppercase } from "./countUppercase";
import { allFormat } from "./format";
import { isContainsDigit } from "./isContainsDigit";
import { isContainsLowercase } from "./isContainsLowercase";
import { isContainsSpecialCharacter } from "./isContainsSpecialCharacter";
import { isContainsUppercase } from "./isContainsUppercase";
import { merge } from "./merge";
import { passwordValidator } from "./passwordValidator";

export const allUtils = {
    merge,
    assertString,
    isContainsDigit,
    isContainsLowercase,
    isContainsSpecialCharacter,
    isContainsUppercase,
    countDigits,
    countLowercase,
    countSpecialChars,
    countUppercase,
    passwordValidator,
    ...allFormat
}