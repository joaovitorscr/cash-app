import { AuthNavbar } from '@/components/wrappers/auth-navbar'
import * as React from 'react'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr]">
      <AuthNavbar />
      <main>{children}</main>
    </div>
  )
}
