import { assertString } from "../assertString"

export function isContainsUppercase (str: string) {
    assertString(str)
    return /[A-Z]/.test(str)
}