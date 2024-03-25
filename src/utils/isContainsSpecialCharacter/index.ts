import { assertString } from "../assertString"

export function isContainsSpecialCharacter (str: string) {
    assertString(str)
    // eslint-disable-next-line no-useless-escape
    return /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#\\"\\]/.test(str)
}