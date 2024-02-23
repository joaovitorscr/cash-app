'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { SideMenu } from './side-menu'
import {
  CreditCardIcon,
  ArrowUpDownIcon,
  GlobeIcon,
  HomeIcon,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AppLogo } from '@/assets/app-logo'
import { NotificationButton } from '../notification-button'

export function TopMenu() {
  const [hasPassed, setHasPassed] = useState<boolean>(false)
  const pathName = usePathname()

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

  const navItems = [
    {
      title: 'Home',
      path: '/',
      icon: <HomeIcon className="size-6" />,
    },
    {
      title: 'Card',
      path: '/card',
      icon: <CreditCardIcon className="size-6" />,
    },
    {
      title: 'Pay',
      path: '/payment',
      icon: <ArrowUpDownIcon className="size-6" />,
    },
    {
      title: 'Explore',
      path: '/explore',
      icon: <GlobeIcon className="size-6" />,
    },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 z-10 w-screen select-none py-4',
        hasPassed && 'border-b text-white backdrop-blur-md',
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <button type="button" className="outline-none md:hidden">
          <SideMenu />
        </button>
        <Link className="hidden md:block" href={'/'} title="Home">
          <AppLogo className="size-10" />
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-4">
          {navItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={cn(
                'flex w-auto items-center gap-2 text-lg text-zinc-600 transition duration-500 hover:scale-110',
                hasPassed && 'text-zinc-200 hover:text-blue-400',
                pathName === item.path && 'text-blue-800',
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
        <NotificationButton />
      </div>
    </header>
  )
}
