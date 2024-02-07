import { ArrowRight } from 'lucide-react'
import { SectionLayout } from '../section-layout'
import { WalletImage } from '@/assets/wallet-getstarted'
import { MoneyImage } from '@/assets/money-getstarted'

export function GetStarted() {
  return (
    <SectionLayout title="Get started">
      <div className="my-4 space-y-4">
        <button className="group flex w-full items-center justify-between rounded-md outline-none hover:bg-blue-100 hover:ring-1 hover:ring-blue-800 focus-visible:bg-blue-100 focus-visible:ring-2 focus-visible:ring-blue-400">
          <WalletImage className="mr-2 h-8 w-8" />
          <div className="w-56 text-left">
            <h3 className="font-medium">Receive Salary</h3>
            <p className="text-sm text-zinc-500">
              Paid directely into your account
            </p>
          </div>
          <ArrowRight className="text-blue-600  outline-none group-hover:text-blue-800" />
        </button>

        <button className="group flex w-full items-center justify-between rounded-md outline-none hover:bg-blue-100 hover:ring-1 hover:ring-blue-800 focus-visible:bg-blue-100 focus-visible:ring-2 focus-visible:ring-blue-400">
          <MoneyImage className="mr-2 h-8 w-8" />
          <div className="w-56 text-left">
            <h3 className="font-medium">Add money</h3>
            <p className="text-sm text-zinc-500">Get more from your account</p>
          </div>
          <ArrowRight className="text-blue-600  outline-none group-hover:text-blue-800" />
        </button>
      </div>
    </SectionLayout>
  )
}
