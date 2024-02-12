import { SectionLayout } from '../section-layout'
import { WalletImage } from '@/assets/wallet-getstarted'
import { MoneyImage } from '@/assets/money-getstarted'
import { Card } from '../card'

export function GetStartedSection() {
  return (
    <SectionLayout title="Get started">
      <div className="space-y-4 py-2">
        <Card
          title="Receive Salary"
          description="Paid directely into your account"
          icon={<WalletImage className="size-8" />}
        />
        <Card
          title="Add money"
          description="Get more from your account"
          icon={<MoneyImage className="size-8" />}
        />
      </div>
    </SectionLayout>
  )
}
