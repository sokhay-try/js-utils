import { assertString } from "../assertString"

export function isContainsLowercase (str: string) {
    assertString(str)
    return /[a-z]/.test(str)
}