import { type } from '../type';

/**
 * Returns true if the value is a string
 * 
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isString = (value: unknown) : boolean => type(value) === 'string';