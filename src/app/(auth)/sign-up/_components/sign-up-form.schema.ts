import { passwordSchema } from '@/utils/password.schema'
import { z } from 'zod'

export const signUpFormSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: 'Username must be at least 2 characters.',
      })
      .max(16, {
        message: 'Username must be at max 16 characters.',
      }),
    email: z.string().email({
      message: 'Must be a valid e-mail.',
    }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ['confirmPassword'],
    message: "Password didn't match.",
  })
