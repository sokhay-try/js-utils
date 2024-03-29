import moment from "moment";

/**
 * Compare two dates using Moment.js.
 * @param date1 The first date string.
 * @param date2 The second date string.
 * @param format The format of the date strings. Defaults to 'DD/MM/YYYY'.
 * @returns A negative value if date1 is before date2, a positive value if date1 is after date2,
 * or zero if the dates are equal.
 */
export function compareDates(date1: string, date2: string, format: string = 'DD/MM/YYYY'): number {
    const moment1 = moment(date1, format);
    const moment2 = moment(date2, format);
    
    return moment1.diff(moment2);
}