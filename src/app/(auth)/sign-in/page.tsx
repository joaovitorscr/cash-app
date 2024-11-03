import Link from 'next/link'
import { SignInForm } from './_components/sign-in-form'

export default function SignInPage() {
  return (
    <div className="container flex h-full flex-col items-center justify-center space-y-4">
      <h2 className="text-4xl font-medium uppercase">Sign In</h2>
      <div className="w-96 rounded-lg border bg-card p-4 shadow-xl">
        <SignInForm />
      </div>
      <Link className="group" href="/sign-up">
        <small className="flex flex-col items-center">
          <span>Don&apos;t have a account?</span>
          <span className="decoration-primary underline-offset-4 group-hover:underline">
            Sign Up
          </span>
        </small>
      </Link>
    </div>
  )
}
