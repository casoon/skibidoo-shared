/**
 * Cart types
 */
import type { Money } from "./money.js";

export interface Cart {
  id: string;
  sessionId?: string;
  customerId?: string;
  items: CartItem[];
  itemCount: number;
  subtotal: Money;
  shipping?: Money;
  tax: Money;
  total: Money;
  expiresAt: Date;
}

export interface CartItem {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  unitPrice: Money;
  totalPrice: Money;
  image?: string;
}

/**
 * LocalCart - stored in browser localStorage for guests
 */
export interface LocalCart {
  items: LocalCartItem[];
  updatedAt: string;
}

export interface LocalCartItem {
  sku: string;
  quantity: number;
}
