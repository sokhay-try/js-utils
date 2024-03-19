// all validation
import { allType } from "./type"
import { allValue } from "./value"

// all utils
import { allUtils } from "./utils"


export const validator = {
    ...allType,
    ...allValue
}
export const utils = {
    ...allUtils
}