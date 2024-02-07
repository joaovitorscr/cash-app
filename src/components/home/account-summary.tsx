import { HandshakeIcon, ReceiptTextIcon, Wallet } from 'lucide-react'
import { SummaryButton } from './summary-button'

export function AccountSummary() {
  return (
    <div>
      <div className="flex items-center justify-center gap-6">
        <p className="text-4xl">$0.00</p>
        <div>
          <p className="font-medium text-blue-400">Savings</p>
          <span className="text-lg">$0.00</span>
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
