// all validation
import { allType } from "./type"
import { allValue } from "./value"
import { allValidate } from "./validate"
import { allCompares } from "./compare"

// all utils
import { allUtils } from "./utils"

export const validator = {
    ...allType,
    ...allValue,
    ...allValidate,
    ...allCompares
}
export const utils = {
    ...allUtils
}