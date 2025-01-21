import * as z from "zod";

export const emailSchema = z.object({
  newEmail: z.string().email("Please enter a valid email address"),
  currentPassword: z.string().min(1, "Password is required"),
});
