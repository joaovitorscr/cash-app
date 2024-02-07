import { AccountSummary } from '@/components/home/account-summary'
import { GetStarted } from '@/components/home/get-started-section'

export default function Home() {
  return (
    <main className="container mx-auto my-20 px-2">
      <AccountSummary />
      <GetStarted />
    </main>
  )
}
