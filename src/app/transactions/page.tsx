import { Section, SectionBody } from '@/components/section'
import data from '../../../data.json'
import { TransactionCard } from '@/components/home/transactions/transactions-card'

export default function Transactions() {
  const transactions = data.transactions

  return (
    <main className="container mx-auto my-36 px-2">
      <h2 className="text-center text-3xl font-medium">Transactions</h2>
      <Section className="mt-16">
        <SectionBody className="space-y-2 p-8 lg:grid lg:auto-rows-fr lg:grid-cols-3 lg:gap-4 lg:space-y-0">
          {transactions.map((item) => (
            <TransactionCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              date={item.date}
              bottomSeparator
            />
          ))}
        </SectionBody>
      </Section>
    </main>
  )
}
