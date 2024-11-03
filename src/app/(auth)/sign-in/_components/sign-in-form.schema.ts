import { passwordSchema } from '@/utils/password.schema'
import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email({
    message: 'Must be a valid e-mail.',
  }),
  password: passwordSchema,
})
