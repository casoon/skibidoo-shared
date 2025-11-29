/**
 * Order types
 */
import type { Money } from "./money.js";
import type { Address } from "./customer.js";
import type { ShippingMethod } from "./shipping.js";

export interface Order {
  id: string;
  orderNumber: string;
  customerId?: string;
  customerEmail: string;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  shippingMethod: ShippingMethod;
  subtotal: Money;
  shippingCost: Money;
  tax: Money;
  total: Money;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  notes: OrderNote[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  unitPrice: Money;
  totalPrice: Money;
  image?: string;
}

export interface OrderNote {
  id: string;
  content: string;
  isInternal: boolean;
  createdAt: Date;
  createdBy?: string;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type PaymentStatus =
  | "pending"
  | "paid"
  | "failed"
  | "refunded"
  | "partially_refunded";
