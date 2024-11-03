import Image from 'next/image'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'

export function AuthNavbar() {
  return (
    <header className="border py-3 shadow-2xl">
      <div className="container">
        <Link
          href="/"
          className={buttonVariants({
            className: 'flex items-center gap-2',
            variant: 'ghost',
          })}
        >
          <Image
            className="stroke-primary"
            width={32}
            height={32}
            src="assets/logo.svg"
            alt="logo"
          />
          <span className="text-xl font-medium">Cash App</span>
        </Link>
      </div>
    </header>
  )
}
