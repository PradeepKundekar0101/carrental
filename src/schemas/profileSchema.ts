import * as z from 'zod';

export const profileSchema = z.object({
  photo: z.any().optional(),
  lastName: z.string().min(1, 'Last name is required'),
  firstName: z.string().min(1, 'First name is required'),
  birthDate: z.object({
    year: z.string().min(1, 'Year is required'),
    month: z.string().min(1, 'Month is required'),
    day: z.string().min(1, 'Day is required'),
  }),
  birthPlace: z.string().min(1, 'Place of birth is required'),
  licenseNumber: z.string()
    .min(1, 'License number is required')
    .regex(/^[0-9A-Za-z]{6,}$/, 'License number must be at least 6 characters and contain only letters and numbers'),
  licenseDate: z.object({
    year: z.string().min(1, 'Year is required'),
    month: z.string().min(1, 'Month is required'),
    day: z.string().min(1, 'Day is required'),
  }),
  phoneCountry: z.string().min(1, 'Country code is required'),
  phoneNumber: z.string()
    .min(1, 'Phone number is required')
    .regex(/^\d{10,}$/, 'Please enter a valid phone number'),
  address1: z.string().min(1, 'Address is required'),
  address2: z.string().optional(),
  postalCode: z.string()
    .min(1, 'Postal code is required')
    .regex(/^[A-Za-z0-9\s-]{3,}$/, 'Please enter a valid postal code'),
  city: z.string().min(1, 'City is required'),
  aboutMe: z.string().max(2000, 'About me must not exceed 2000 characters'),
});