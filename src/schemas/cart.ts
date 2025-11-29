import { z } from "zod";

/**
 * Add to cart schema
 */
export const AddToCartSchema = z.object({
  sku: z.string().min(1),
  quantity: z.number().int().min(1).max(99),
});

export type AddToCartInput = z.infer<typeof AddToCartSchema>;

/**
 * Update cart item schema
 */
export const UpdateCartItemSchema = z.object({
  quantity: z.number().int().min(0).max(99),
});

export type UpdateCartItemInput = z.infer<typeof UpdateCartItemSchema>;

/**
 * Local cart item schema
 */
export const LocalCartItemSchema = z.object({
  sku: z.string(),
  quantity: z.number().int().min(1),
});

/**
 * Local cart schema (for syncing)
 */
export const LocalCartSchema = z.object({
  items: z.array(LocalCartItemSchema),
});

export type LocalCartInput = z.infer<typeof LocalCartSchema>;

/**
 * Cart merge strategy
 */
export const MergeStrategySchema = z.enum([
  "local_wins",
  "server_wins",
  "merge_quantities",
]);

/**
 * Cart sync schema
 */
export const CartSyncSchema = z.object({
  localCart: LocalCartSchema,
  mergeStrategy: MergeStrategySchema.default("local_wins"),
});

export type CartSyncInput = z.infer<typeof CartSyncSchema>;
