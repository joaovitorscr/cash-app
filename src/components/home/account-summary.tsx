import { HandshakeIcon, ReceiptTextIcon, Wallet } from 'lucide-react'

export function AccountSummary() {
  return (
    <div>
      <div className="flex items-center justify-center space-x-6">
        <p className="text-4xl">$0.00</p>
        <div>
          <p className="font-medium text-blue-400">Savings</p>
          <span className="text-lg">$0.00</span>
        </div>
      </div>
      <nav className="my-4 flex items-center justify-center space-x-2">
        <button className="flex items-center gap-1 rounded-md bg-blue-100 p-1 text-xs font-medium text-blue-600  outline-none hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-800 ">
          <Wallet className="h-4 w-4" /> <span>Add money</span>
        </button>
        <button className="flex items-center gap-1 rounded-md bg-blue-100 p-1 text-xs font-medium text-blue-600  outline-none hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-800">
          <ReceiptTextIcon className="h-4 w-4" /> <span>Details</span>
        </button>
        <button className="flex items-center gap-1 rounded-md bg-blue-100 p-1 text-xs font-medium text-blue-600  outline-none hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-800">
          <HandshakeIcon className="h-4 w-4" /> <span>Make a payment</span>
        </button>
      </nav>
    </div>
  )
}
