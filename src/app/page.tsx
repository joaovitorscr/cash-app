import { AccountSummarySection } from '@/components/home/summary/account-summary'
import { GetStartedSection } from '@/components/home/get-started-section'
import { RecentlyPaidSection } from '@/components/home/recently-paid-section'
import { TransactionsSection } from '@/components/home/transactions/transactions-section'

export default function Home() {
  return (
    <main className="container mx-auto my-10 px-2">
      <AccountSummarySection />
      <div className="lg:flex lg:items-center lg:gap-4">
        <GetStartedSection />
        <RecentlyPaidSection />
      </div>
      <TransactionsSection />
    </main>
  )
}
