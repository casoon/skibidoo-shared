/**
 * Money value object - represents monetary amounts
 * All amounts are stored in smallest currency unit (cents)
 */
export interface Money {
  /** Amount in smallest currency unit (e.g., cents) */
  amount: number;
  /** ISO 4217 currency code (e.g., EUR, USD) */
  currency: string;
}

/**
 * Create a Money object
 */
export function money(amount: number, currency: string = "EUR"): Money {
  return { amount, currency };
}

/**
 * Zero money constant
 */
export const ZERO_EUR: Money = { amount: 0, currency: "EUR" };
