import { HandshakeIcon, ReceiptTextIcon, Wallet } from 'lucide-react'
import { numberToDollar } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/button'

export function AccountSummarySection() {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <p className="text-4xl md:text-6xl">
          {numberToDollar(Math.floor(Math.random() * 100))}
        </p>
        <div>
          <p className="font-medium text-primary md:text-xl">Savings</p>
          <span className="text-lg">
            {numberToDollar(Math.floor(Math.random() * 100))}
          </span>
        </div>
      </div>
      <nav className="my-4 flex items-center justify-center gap-2 md:my-6 md:gap-4">
        <Link
          href={'/payment'}
          className={buttonVariants({ size: 'small', variant: 'summary' })}
        >
          <Wallet className="h-4 w-4" />
          Add money
        </Link>
        <Link
          href={'/transactions'}
          className={buttonVariants({ size: 'small', variant: 'summary' })}
        >
          <ReceiptTextIcon className="h-4 w-4" />
          Details
        </Link>
        <Link
          href={'/payment'}
          className={buttonVariants({ size: 'small', variant: 'summary' })}
        >
          <HandshakeIcon className="h-4 w-4" />
          Make a payment
        </Link>
      </nav>
    </div>
  )
}
