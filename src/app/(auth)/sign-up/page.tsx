import { SignUpForm } from './_components/sign-up-form'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="container flex h-full flex-col items-center justify-center space-y-4">
      <h2 className="text-4xl font-medium uppercase">Sign Up</h2>
      <div className="w-96 rounded-lg border bg-card p-4 shadow-xl">
        <SignUpForm />
      </div>
      <Link className="group" href="/sign-in">
        <small className="flex flex-col items-center">
          <span>Already have a account?</span>
          <span className="decoration-primary underline-offset-4 group-hover:underline">
            Sign In
          </span>
        </small>
      </Link>
    </div>
  )
}
