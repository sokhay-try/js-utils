import { type } from "./type";

export const isBoolean = (value: unknown) : boolean => type(value) === 'boolean';