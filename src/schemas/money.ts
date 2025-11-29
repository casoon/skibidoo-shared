import { z } from "zod";

/**
 * Money schema
 */
export const MoneySchema = z.object({
  amount: z.number().int(),
  currency: z.string().length(3),
});

export type MoneyInput = z.infer<typeof MoneySchema>;
