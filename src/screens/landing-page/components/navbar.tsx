import { Button } from '@/shared/components/button'
import Image from 'next/image'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

export function Navbar() {
  return (
    <header className="container fixed left-1/2 top-4 flex -translate-x-1/2 items-center justify-between rounded-full border bg-card px-5 py-4">
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
          <li>Home</li>
          <li>Carrers</li>
          <li>About</li>
          <li>Security</li>
        </ul>
      </nav>
      <div className="hidden items-center gap-4 font-light md:flex">
        <button type="button">Sign up</button>
        <Button type="button">Login</Button>
      </div>
      <Button className="block md:hidden">
        <HamburgerMenuIcon />
      </Button>
    </header>
  )
}
