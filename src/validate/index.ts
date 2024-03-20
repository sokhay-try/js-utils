import { isByteLength } from "./isByteLength";
import { isEmail } from "./isEmail";
import { isFQDN } from "./isFQDN";
import { isIP } from "./isIP";
import { isRequired } from "./isRequired";
import { isStringExceedMaxLength } from "./isStringExceedMaxLength";

export const allValidate = {
    isEmail,
    isFQDN,
    isIP,
    isByteLength,
    isRequired,
    isStringExceedMaxLength
}