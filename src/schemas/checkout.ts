import { z } from "zod";
import { AddressSchema } from "./customer.js";

/**
 * Checkout intent create schema
 */
export const CheckoutIntentSchema = z.object({
  shippingAddress: AddressSchema,
  billingAddress: AddressSchema.optional(),
  shippingMethodId: z.string().min(1),
});

export type CheckoutIntentInput = z.infer<typeof CheckoutIntentSchema>;

/**
 * Checkout status enum
 */
export const CheckoutStatusSchema = z.enum([
  "pending_payment",
  "processing",
  "completed",
  "failed",
  "expired",
]);
