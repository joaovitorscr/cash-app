import { HandshakeIcon, ReceiptTextIcon, Wallet } from 'lucide-react'
import { SummaryButton } from './summary-button'
import { numberToDolar } from '@/lib/utils'

export function AccountSummarySection() {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <p className="text-4xl">
          {numberToDolar(Math.floor(Math.random() * 100))}
        </p>
        <div>
          <p className="font-medium text-blue-400">Savings</p>
          <span className="text-lg">
            {numberToDolar(Math.floor(Math.random() * 100))}
          </span>
        </div>
      </div>
      <nav className="my-4 flex items-center justify-center gap-2">
        <SummaryButton
          icon={<Wallet className="h-4 w-4" />}
          title="Add money"
        />
        <SummaryButton
          icon={<ReceiptTextIcon className="h-4 w-4" />}
          title="Details"
        />
        <SummaryButton
          icon={<HandshakeIcon className="h-4 w-4" />}
          title="Make a payment"
        />
      </nav>
    </div>
  )
}
