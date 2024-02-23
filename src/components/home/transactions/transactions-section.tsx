import { buttonVariants } from '@/components/button'
import data from '../../../../data.json'
import { TransactionCard } from './transactions-card'
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionBody,
} from '@/components/section'
import Link from 'next/link'

export function TransactionsSection() {
  const transactions = data.transactions
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Transactions</SectionTitle>
        <Link
          className={buttonVariants({ variant: 'link' })}
          href={'/transactions'}
          title="View All"
        >
          View All
        </Link>
      </SectionHeader>
      <SectionBody>
        <div className="my-4 space-y-4 lg:grid lg:auto-rows-fr lg:grid-cols-2 lg:gap-4 lg:space-y-0 xl:grid-cols-3">
          {transactions.slice(0, 5).map((item) => (
            <TransactionCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              bottomSeparator
            />
          ))}
        </div>
      </SectionBody>
    </Section>
  )
}
