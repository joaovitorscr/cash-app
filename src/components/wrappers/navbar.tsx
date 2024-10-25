import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export function Navbar() {
  return (
    <header className="sticky top-0 h-16 border bg-card py-4 shadow-xl">
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
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 text-lg font-light">
            <li>
              <a href="#hero">Welcome</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
          </ul>
        </nav>
        <div className="hidden items-center gap-4 font-light md:flex">
          <button type="button">Sign up</button>
          <Button type="button">Login</Button>
        </div>
        <Button className="block md:hidden">
          <HamburgerMenuIcon />
        </Button>
      </div>
    </header>
  )
}
