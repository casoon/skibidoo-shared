/**
 * Customer types
 */

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  addresses: Address[];
  defaultAddressId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  company?: string;
  street: string;
  street2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string; // ISO 3166-1 alpha-2
  phone?: string;
  isDefault?: boolean;
}
