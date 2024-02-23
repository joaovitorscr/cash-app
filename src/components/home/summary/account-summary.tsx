import { HandshakeIcon, ReceiptTextIcon, Wallet } from 'lucide-react'
import { SummaryButton } from './summary-button'
import { numberToDollar } from '@/lib/utils'

export function AccountSummarySection() {
  return (
    <div className="md:py-10">
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
        <SummaryButton
          to="/payment"
          icon={<Wallet className="h-4 w-4" />}
          title="Add money"
        />
        <SummaryButton
          to="/transactions"
          icon={<ReceiptTextIcon className="h-4 w-4" />}
          title="Details"
        />
        <SummaryButton
          to="/payment"
          icon={<HandshakeIcon className="h-4 w-4" />}
          title="Make a payment"
        />
      </nav>
    </div>
  )
}
