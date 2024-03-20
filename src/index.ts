// all validation
import { allType } from "./type"
import { allValue } from "./value"
import { allValidate } from "./validate"

// all utils
import { allUtils } from "./utils"



export const validator = {
    ...allType,
    ...allValue,
    ...allValidate
}
export const utils = {
    ...allUtils
}