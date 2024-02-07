'use client'

import { numberToDolar } from '@/lib/utils'
import { BellIcon } from 'lucide-react'
import { useState } from 'react'
import { SideMenu } from './side-menu'

export function TopMenu() {
  const [hasPassed, setHasPassed] = useState<boolean>(false)

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
        <button>
          <SideMenu />
        </button>
        {hasPassed && (
          <p className="font-medium">
            {numberToDolar(Math.floor(Math.random() * 100))}
          </p>
        )}
        <button>
          <BellIcon className="stroke-blue-600" />
        </button>
      </div>
    </header>
  )
}
