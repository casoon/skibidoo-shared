import { z } from "zod";

/**
 * Address schema
 */
export const AddressSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  company: z.string().max(100).optional(),
  street: z.string().min(1).max(200),
  street2: z.string().max(200).optional(),
  city: z.string().min(1).max(100),
  state: z.string().max(100).optional(),
  postalCode: z.string().min(1).max(20),
  country: z.string().length(2),
  phone: z.string().max(30).optional(),
});

export type AddressInput = z.infer<typeof AddressSchema>;

/**
 * Customer registration schema
 */
export const CustomerRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
});

export type CustomerRegisterInput = z.infer<typeof CustomerRegisterSchema>;

/**
 * Customer login schema
 */
export const CustomerLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type CustomerLoginInput = z.infer<typeof CustomerLoginSchema>;
