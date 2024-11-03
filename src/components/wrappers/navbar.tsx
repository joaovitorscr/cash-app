import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState<boolean>(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()

    if (latest > previous! && latest > 160) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed inset-x-0 top-0 z-50 px-6 py-3 backdrop-blur-sm"
    >
      <div className="container flex items-center justify-between">
        <h1 className="flex items-center gap-2">
          <Image
            className="stroke-primary"
            width={32}
            height={32}
            src="assets/logo.svg"
            alt="logo"
          />
          <span className="text-xl font-medium">Cash App</span>
        </h1>
        <div className="hidden items-center gap-4 font-light md:flex">
          <button type="button">Sign up</button>
          <Button type="button">Login</Button>
        </div>
        <Button className="block md:hidden">
          <HamburgerMenuIcon />
        </Button>
      </div>
    </motion.header>
  )
}
