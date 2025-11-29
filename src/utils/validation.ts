/**
 * Validation utilities
 */

/**
 * Check if string is a valid email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Check if string is a valid ISO 3166-1 alpha-2 country code
 */
export function isValidCountryCode(code: string): boolean {
  return /^[A-Z]{2}$/.test(code);
}

/**
 * Check if string is a valid ISO 4217 currency code
 */
export function isValidCurrencyCode(code: string): boolean {
  return /^[A-Z]{3}$/.test(code);
}

/**
 * Check if SKU format is valid
 */
export function isValidSku(sku: string): boolean {
  return /^[A-Z0-9-]{1,100}$/i.test(sku);
}
