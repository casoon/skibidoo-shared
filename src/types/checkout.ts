/**
 * Checkout types
 */
import type { Money } from "./money.js";
import type { Address } from "./customer.js";

export interface CheckoutIntent {
  id: string;
  cartId: string;
  shippingAddress: Address;
  billingAddress?: Address;
  shippingMethodId: string;
  summary: CheckoutSummary;
  paymentMethods: PaymentMethod[];
  clientSecret?: string;
  expiresAt: Date;
  status: CheckoutStatus;
}

export interface CheckoutSummary {
  subtotal: Money;
  shipping: Money;
  tax: Money;
  total: Money;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon?: string;
}

export type CheckoutStatus =
  | "pending_payment"
  | "processing"
  | "completed"
  | "failed"
  | "expired";
