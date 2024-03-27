/**
 * Formats a given amount as currency using Intl.NumberFormat.
 * Locale is determined based on the currency code.
 * @param amount The amount to be formatted.
 * @param currency The currency code.
 * @returns The formatted currency string.
 */
export function formatCurrency(amount: number, currency: string): string {
    // Map currency codes to corresponding locales
    const localeMap: { [key: string]: string } = {
        'USD': 'en-US',
        'EUR': 'de-DE',
        'GBP': 'en-GB',
        'KHR': 'km-KH',
        // Add more mappings as needed
    };

    // Get locale based on currency code
    const locale = localeMap[currency] || 'en-US'; // Default to en-US if no mapping found

    // Create an Intl.NumberFormat object with options for currency formatting
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    });

    // Format the amount using the formatter
    return formatter.format(amount);
}