import { type } from '../type';

/**
 * Returns true if the value is an instance of Date
 * 
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isDate = (value: unknown) : boolean => type(value) === 'date';