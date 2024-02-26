'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavbarItem({
  title,
  icon,
  to,
  children,
}: {
  title: string
  icon: JSX.Element
  to: string
  children?: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <Link
      href={to}
      className={cn(
        'flex w-screen flex-col items-center rounded-md outline-none focus-visible:ring focus-visible:ring-ring md:relative md:w-auto md:text-lg',
        pathname === to && 'text-primary',
      )}
    >
      <div
        className={cn(
          'flex flex-col items-center md:flex-row md:gap-2 md:pb-1',
        )}
      >
        {icon}
        {title}
        {children}
      </div>
    </Link>
  )
}
