'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { signInFormSchema } from './sign-in-form.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Button } from '@/components/ui/button'

export function SignInForm() {
  const signInForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  function onSubmit(values: z.infer<typeof signInFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...signInForm}>
      <form
        className="w-full space-y-4"
        onSubmit={signInForm.handleSubmit(onSubmit)}
      >
        <FormField
          control={signInForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="MyPrettyName123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signInForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="awesomePassword123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-center">
          <Button disabled={!signInForm.formState.isValid} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
