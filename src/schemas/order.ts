import { z } from "zod";

/**
 * Order status enum
 */
export const OrderStatusSchema = z.enum([
  "pending",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
  "refunded",
]);

/**
 * Payment status enum
 */
export const PaymentStatusSchema = z.enum([
  "pending",
  "paid",
  "failed",
  "refunded",
  "partially_refunded",
]);

/**
 * Order status update schema
 */
export const OrderStatusUpdateSchema = z.object({
  status: OrderStatusSchema,
  note: z.string().max(1000).optional(),
});

export type OrderStatusUpdateInput = z.infer<typeof OrderStatusUpdateSchema>;
