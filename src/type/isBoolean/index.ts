import { type } from "../type";

/**
 * Returns true if the value is a boolean
 * 
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isBoolean = (value: unknown) : boolean => type(value) === 'boolean';