import { z } from "zod";
import { MoneySchema } from "./money.js";

/**
 * Product status enum
 */
export const ProductStatusSchema = z.enum(["draft", "active", "archived"]);

/**
 * Product create schema
 */
export const ProductCreateSchema = z.object({
  sku: z.string().min(1).max(100),
  name: z.string().min(1).max(255),
  slug: z.string().min(1).max(255).regex(/^[a-z0-9-]+$/),
  description: z.string().max(10000).default(""),
  descriptionHtml: z.string().max(50000).default(""),
  price: MoneySchema,
  compareAtPrice: MoneySchema.optional(),
  categoryId: z.string().optional(),
  attributes: z.record(z.string()).default({}),
  status: ProductStatusSchema.default("draft"),
});

export type ProductCreateInput = z.infer<typeof ProductCreateSchema>;

/**
 * Product update schema
 */
export const ProductUpdateSchema = ProductCreateSchema.partial();

export type ProductUpdateInput = z.infer<typeof ProductUpdateSchema>;

/**
 * Product variant create schema
 */
export const VariantCreateSchema = z.object({
  sku: z.string().min(1).max(100),
  name: z.string().min(1).max(255),
  price: MoneySchema,
  compareAtPrice: MoneySchema.optional(),
  attributes: z.record(z.string()).default({}),
  stockQuantity: z.number().int().min(0).default(0),
});

export type VariantCreateInput = z.infer<typeof VariantCreateSchema>;
