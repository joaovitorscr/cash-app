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
import Link from 'next/link'
import { AppLogo } from '@/assets/app-logo'
import { NotificationButton } from '../notification-button'
import { NavbarItem } from './navbar-item'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function TopMenu() {
  const [hasPassed, setHasPassed] = useState<boolean>(false)

  const pathname = usePathname()

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
      icon: <ArrowUpDownIcon className="size-6 rotate-45" />,
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
        'fixed top-0 z-10 w-screen select-none overflow-hidden py-4 md:relative',
        hasPassed && 'border-b backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex items-center justify-between md:container">
        <button type="button" className="outline-none md:hidden lg:hidden">
          <SideMenu />
        </button>
        <Link
          className="hidden rounded-md outline-none focus-visible:ring focus-visible:ring-ring md:block"
          href={'/'}
          title="Home"
        >
          <AppLogo className="size-10" />
        </Link>
        <nav>
          <ul className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map(({ title, icon, path }, index) => (
              <li key={index}>
                <NavbarItem title={title} icon={icon} to={path}>
                  {pathname === path && (
                    <motion.span
                      layoutId="topbar-active-item"
                      className="absolute bottom-0 h-px w-full bg-primary"
                    />
                  )}
                </NavbarItem>
              </li>
            ))}
          </ul>
        </nav>
        <NotificationButton />
      </div>
    </header>
  )
}
