import type { Money } from "../types/money.js";

/**
 * Format money for display
 */
export function formatMoney(money: Money, locale: string = "de-DE"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: money.currency,
  }).format(money.amount / 100);
}

/**
 * Add two money values (must be same currency)
 */
export function addMoney(a: Money, b: Money): Money {
  if (a.currency !== b.currency) {
    throw new Error("Cannot add money with different currencies");
  }
  return { amount: a.amount + b.amount, currency: a.currency };
}

/**
 * Subtract money (a - b)
 */
export function subtractMoney(a: Money, b: Money): Money {
  if (a.currency !== b.currency) {
    throw new Error("Cannot subtract money with different currencies");
  }
  return { amount: a.amount - b.amount, currency: a.currency };
}

/**
 * Multiply money by quantity
 */
export function multiplyMoney(money: Money, quantity: number): Money {
  return { amount: Math.round(money.amount * quantity), currency: money.currency };
}

/**
 * Check if money is zero
 */
export function isZero(money: Money): boolean {
  return money.amount === 0;
}

/**
 * Compare two money values
 * Returns: -1 if a < b, 0 if equal, 1 if a > b
 */
export function compareMoney(a: Money, b: Money): -1 | 0 | 1 {
  if (a.currency !== b.currency) {
    throw new Error("Cannot compare money with different currencies");
  }
  if (a.amount < b.amount) return -1;
  if (a.amount > b.amount) return 1;
  return 0;
}
