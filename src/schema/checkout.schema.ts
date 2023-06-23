import { z } from 'zod';

export const PersonalInfoSchema = z.object({
  name: z.string().min(1),
  email: z.string().email({ message: 'Please provide a valid email!' }),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

// Delivery Form
export const DeliveryInfoSchema = z.object({
  city: z.string().min(1),
  postalCode: z.string(),
  address: z.string(),
  shipping: z.enum(['free', 'fast', 'same_day']),
});

export type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>;

// Payment Form
export const PaymentInfoSchema = z.object({
  number: z.string(),
  expirationDate: z.string(),
  securityCode: z.string(),
  saveInfo: z.boolean(),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;
