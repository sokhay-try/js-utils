import { type } from '../type';

/**
 * Returns true if the value is a number
 * 
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isNumber = (value: unknown) : boolean => type(value) === 'number';