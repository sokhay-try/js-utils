import { isByteLength } from "./isByteLength";
import { isEmail } from "./isEmail";
import { isFQDN } from "./isFQDN";
import { isIP } from "./isIP";
import { isNumeric } from "./isNumeric";
import { isRequired } from "./isRequired";
import { isStringExceedMaxLength } from "./isStringExceedMaxLength";
import { isStringLengthBetween } from "./isStringLengthBetween";
import { isStrongPassword } from "./isStrongPassword";

export const allValidate = {
    isNumeric,
    isEmail,
    isFQDN,
    isIP,
    isByteLength,
    isRequired,
    isStringExceedMaxLength,
    isStringLengthBetween,
    isStrongPassword
}