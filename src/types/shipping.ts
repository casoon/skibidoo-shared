/**
 * Shipping types
 */
import type { Money } from "./money.js";

export interface ShippingZone {
  id: string;
  name: string;
  countries: string[]; // ISO 3166-1 alpha-2
  methods: ShippingMethod[];
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  carrier: string;
  price: Money;
  freeAbove?: Money;
  estimatedDays: {
    min: number;
    max: number;
  };
  enabled: boolean;
}

export interface ShippingRate {
  methodId: string;
  name: string;
  price: Money;
  estimatedDays: {
    min: number;
    max: number;
  };
}
