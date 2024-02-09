'use client'

import { numberToDollar } from '@/lib/utils'
import { useState } from 'react'
import { SideMenu } from './side-menu'
import { BellIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function TopMenu() {
  const [hasPassed, setHasPassed] = useState<boolean>(false)

  const pathName = usePathname()

  const isNotificationsTab = pathName === '/notifications'

  function handleTopMenuPosition() {
    if (window.scrollY >= 120) {
      setHasPassed(true)
    } else {
      setHasPassed(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleTopMenuPosition)
  }

  return (
    <header
      className={`fixed top-0 w-full px-2 py-4 ${hasPassed && 'border-b backdrop-blur-sm'}`}
    >
      <div className="container mx-auto flex justify-between">
        <button className="outline-none">
          <SideMenu />
        </button>
        {hasPassed && (
          <p className="font-medium">
            {numberToDollar(Math.floor(Math.random() * 100))}
          </p>
        )}
        <Link
          className={`focus-ring group ${isNotificationsTab ? 'pointer-events-none' : ''}`}
          aria-disabled={isNotificationsTab}
          tabIndex={isNotificationsTab ? -1 : undefined}
          href="/notifications"
        >
          <BellIcon className="stroke-blue-600 group-aria-disabled:stroke-zinc-500" />
        </Link>
      </div>
    </header>
  )
}
