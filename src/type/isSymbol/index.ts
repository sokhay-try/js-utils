import { type } from '../type';

/**
 * Returns true if the value is a symbol
 * 
 * @category Type
 * @param {*} value - The value to check
 * @returns {boolean}
 */
export const isSymbol = (value: unknown) : boolean => type(value) === 'symbol';