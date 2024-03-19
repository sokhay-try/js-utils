/**
 * Asserts whether the input is a string. Throws a TypeError if it's not.
 * 
 * @category Utils
 * @param {*} input - The value to check
 * @returns void
 * @throws TypeError if input is not a string
 */
export const assertString = (input: unknown): void => {
    const isString = typeof input === 'string' || input instanceof String;

    if (!isString) {
        let invalidType: string;
        if (input === null) {
            invalidType = 'null';
        } else if (typeof input === 'object') {
            invalidType = input.constructor?.name ?? 'object';
        } else {
            invalidType = typeof input;
        }

        throw new TypeError(`Expected a string but received a ${invalidType}`);
    }
}
