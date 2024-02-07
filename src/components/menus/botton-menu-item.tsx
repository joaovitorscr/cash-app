'use client'

import Link from 'next/link'
// import { usePathname } from 'next/navigation'

interface MenuItemProps {
  title: string
  icon: JSX.Element
  to: string
}

export function MenuItem({ title, icon, to }: MenuItemProps) {
  // const pathname = usePathname()
  return (
    <Link
      href={to}
      className={`flex w-screen flex-col items-center ${title === 'Home' ? 'text-blue-800' : ''}`}
    >
      {icon}
      <span className="text-xs font-medium">{title}</span>
    </Link>
  )
}
