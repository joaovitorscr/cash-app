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
        <Card className="group">
          <WalletImage className="size-8 transition duration-500 group-hover:scale-110 lg:size-12 xl:size-8" />
          <CardBody>
            <CardTitle>Receive Salary</CardTitle>
            <CardDescription>Paid directly into your account</CardDescription>
          </CardBody>
          <ArrowRight className="stroke-secondary outline-none transition  duration-500 group-hover:stroke-primary lg:size-8" />
        </Card>
        <Card className="group">
          <MoneyImage className="size-8 transition duration-500 group-hover:scale-110 lg:size-12 xl:size-8" />
          <CardBody>
            <CardTitle>Add money</CardTitle>
            <CardDescription>Get more from your account</CardDescription>
          </CardBody>
          <ArrowRight className="stroke-secondary outline-none transition  duration-500 group-hover:stroke-primary lg:size-8" />
        </Card>
      </SectionBody>
    </Section>
  )
}
