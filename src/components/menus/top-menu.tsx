'use client'

import { MenuIcon, BellIcon } from 'lucide-react'
import { useState } from 'react'

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
      className={`fixed top-0 w-full py-4 ${hasPassed && 'border-b backdrop-blur-md'}`}
    >
      <div className="container mx-auto flex justify-between">
        <button>
          <MenuIcon className="stroke-blue-600" />
        </button>
        {hasPassed && <p className="font-medium">$0.00</p>}
        <button>
          <BellIcon className="stroke-blue-600" />
        </button>
      </div>
    </header>
  )
}
