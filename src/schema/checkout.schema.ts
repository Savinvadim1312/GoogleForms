import { z } from 'zod';

const cardNumberRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;

export const PersonalInfoSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }).min(1),
    email: z.string().email({ message: 'Please provide a valid email!' }),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
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
  number: z.string().regex(cardNumberRegex),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{4}$/)
    .refine(
      (val) => {
        var [month, year] = val.split('/');

        var date = new Date(parseInt(year), parseInt(month) - 1);
        return date > new Date();
      },
      { message: 'Card is expired' }
    ),
  securityCode: z.coerce.number().gte(100).lte(999),
  saveInfo: z.boolean(),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

export const CheckoutInfoSchema =
  DeliveryInfoSchema.merge(PersonalInfoSchema).merge(PaymentInfoSchema);

export type CheckoutData = z.infer<typeof CheckoutInfoSchema>;
