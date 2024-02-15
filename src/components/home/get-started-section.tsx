import { WalletImage } from '@/assets/wallet-getstarted'
import { MoneyImage } from '@/assets/money-getstarted'
import { Card } from '../card'
import { Section, SectionHeader, SectionTitle, SectionBody } from '../section'

export function GetStartedSection() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Get Started</SectionTitle>
      </SectionHeader>
      <SectionBody>
        <div className="space-y-4 md:my-4 md:flex md:items-center md:space-y-0">
          <Card
            title="Receive Salary"
            description="Paid directly into your account"
            icon={<WalletImage className="size-8" />}
          />
          <Card
            title="Add money"
            description="Get more from your account"
            icon={<MoneyImage className="size-8" />}
          />
        </div>
      </SectionBody>
    </Section>
  )
}
