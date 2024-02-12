'use client'

import { numberToDollar } from '@/lib/utils'
import { useState } from 'react'
import { SideMenu } from './side-menu'
import {
  BellIcon,
  CreditCardIcon,
  ArrowUpDownIcon,
  HandHeartIcon,
  GlobeIcon,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AppLogo } from '@/assets/app-logo'

export function TopMenu() {
  const [hasPassed, setHasPassed] = useState<boolean>(false)

  const pathName = usePathname()

  const isNotificationsTab = pathName === '/notifications'

  function handleTopMenuPosition() {
    if (window.scrollY >= 20) {
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
      className={`fixed top-0 w-full px-2 py-4 md:border-b ${hasPassed && 'border-b backdrop-blur-sm'}`}
    >
      <div className="container mx-auto flex justify-between">
        <button className="outline-none md:hidden">
          <SideMenu />
        </button>
        <Link className="hidden md:block" href={'/'} title="Home">
          <AppLogo className="size-8" />
        </Link>
        {hasPassed && pathName === '/' && (
          <p className="font-medium md:hidden">
            {numberToDollar(Math.floor(Math.random() * 100))}
          </p>
        )}
        <nav className="hidden w-full items-center justify-center md:flex md:space-x-4">
          <Link
            className={`flex items-center gap-2 ${pathName === '/card' && 'text-blue-800'}`}
            href={'/card'}
            title="Card"
          >
            <CreditCardIcon />
            Card
          </Link>
          <Link
            className={`flex items-center gap-2 ${pathName === '/payment' && 'text-blue-800'}`}
            href={'/payment'}
            title="Pay"
          >
            <ArrowUpDownIcon className="rotate-45" />
            Pay
          </Link>
          <Link
            className={`flex items-center gap-2 ${pathName === '/referral' && 'text-blue-800'}`}
            href={'/referral'}
            title="Invite"
          >
            <HandHeartIcon />
            Invite
          </Link>
          <Link
            className={`flex items-center gap-2 ${pathName === '/explore' && 'text-blue-800'}`}
            href={'/explore'}
            title="Explore"
          >
            <GlobeIcon />
            Explore
          </Link>
        </nav>
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
