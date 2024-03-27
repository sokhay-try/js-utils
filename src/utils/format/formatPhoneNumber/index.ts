/**
 * Formats a phone number according to a specified format.
 * @param phoneNumber The phone number to be formatted.
 * @param format The format string specifying the desired format.
 * @returns The formatted phone number string.
 */
export function formatPhoneNumber(phoneNumber: string, format: string = '(+xxx) xx xxx xxxx'): string {
    // Remove any non-digit characters and zero number from the phone number
    const digitsOnly = phoneNumber.replace(/(^0+)|(\D)/g, '');
    let formattedPhoneNumber = '';
    let digitIndex = 0;

    // Iterate over the format string and replace placeholders with digits from the phone number
    for (let i = 0; i < format.length; i++) {
        if (format[i] === 'X' || format[i] === 'x') {
            // Replace 'X' placeholder with the next digit from the phone number
            formattedPhoneNumber += digitsOnly[digitIndex] || '';
            digitIndex++;
        } else {
            // Copy non-placeholder characters from the format string
            formattedPhoneNumber += format[i];
        }
    }

    return formattedPhoneNumber;
}