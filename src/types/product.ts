/**
 * Product types
 */
import type { Money } from "./money.js";

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProductVariant {
  id: string;
  sku: string;
  name: string;
  price: Money;
  compareAtPrice?: Money;
  attributes: Record<string, string>;
  inStock: boolean;
  stockQuantity: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  description: string;
  descriptionHtml: string;
  price: Money;
  compareAtPrice?: Money;
  images: ProductImage[];
  category?: Category;
  variants: ProductVariant[];
  attributes: Record<string, string>;
  status: ProductStatus;
  seo: SEO;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductStatus = "draft" | "active" | "archived";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  children?: Category[];
  productCount?: number;
}

export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
}
