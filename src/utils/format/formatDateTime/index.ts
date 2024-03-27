import moment from 'moment'

/**
 * Formats a given date into separate date and time strings using Moment.js.
 * @param date The date to be formatted.
 * @param formatDate The format string for the date part. Defaults to 'DD/MM/YYYY'.
 * @param formatTime The format string for the time part. Defaults to 'HH:mm:ss A'.
 * @returns An object containing formatted date and time strings.
 */
export function formatDateTime(date: Date, formatDate: string = 'DD/MM/YYYY', formatTime: string = 'HH:mm:ss A'): { 
    getDate: string, 
    getTime: string, 
    getDateTime: string,
    getFullYear: number,
    getMonth: number,
    getDay: number
} {
    const momentDate = moment(date);
    const dateTimeObject = {
        getDate: momentDate.format(formatDate),
        getTime: momentDate.format(formatTime),
        getDateTime: momentDate.format(`${formatDate} ${formatTime}`),
        getFullYear: momentDate.year(),
        getMonth: momentDate.month(), // it return index. Ex: index 0 is Jan
        getDay: momentDate.date()
    };
    return dateTimeObject;
}
