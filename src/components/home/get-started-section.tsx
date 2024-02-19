import { WalletImage } from '@/assets/wallet-getstarted'
import { MoneyImage } from '@/assets/money-getstarted'
import { Card, CardBody, CardTitle, CardDescription } from '../card'
import { Section, SectionHeader, SectionTitle, SectionBody } from '../section'
import { ArrowRight } from 'lucide-react'

export function GetStartedSection() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Get Started</SectionTitle>
      </SectionHeader>
      <SectionBody className="space-y-4 md:flex md:items-center md:justify-center md:gap-4 md:space-y-0 lg:py-8">
        <Card>
          <WalletImage className="size-8" />
          <CardBody>
            <CardTitle>Receive Salary</CardTitle>
            <CardDescription>Paid directly into your account</CardDescription>
          </CardBody>
          <ArrowRight className="text-blue-600  outline-none group-hover:text-blue-800 lg:size-8" />
        </Card>
        <Card>
          <MoneyImage className="size-8" />
          <CardBody>
            <CardTitle>Add money</CardTitle>
            <CardDescription>Get more from your account</CardDescription>
          </CardBody>
          <ArrowRight className="text-blue-600  outline-none group-hover:text-blue-800 lg:size-8" />
        </Card>
      </SectionBody>
    </Section>
  )
}
