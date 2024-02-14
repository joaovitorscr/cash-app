import { SectionLayout } from '../../section-layout'
import data from '../../../../data.json'
import { TransactionCard } from './transactions-card'

export function TransactionsSection() {
  const transactions = data.transactions
  return (
    <SectionLayout
      title="Transactions"
      rightButton={{ title: 'View all', to: '/transactions' }}
    >
      <div className="my-4 space-y-4">
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
    </SectionLayout>
  )
}
