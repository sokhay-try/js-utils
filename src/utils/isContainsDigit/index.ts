import { assertString } from "../assertString"

export function isContainsDigit (str: string) {
    assertString(str)
    return /[0-9]/.test(str)
}