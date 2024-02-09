import { Card } from '@/components/card'
import { SectionLayout } from '../../section-layout'
import data from '../../../../transactions-data.json'

export function TransactionsSection() {
  return (
    <SectionLayout
      title="Transactions"
      rightButton={{ title: 'View all', to: '/transactions' }}
    >
      <div className="my-4 space-y-4">
        {data.map((item) => (
          <Card
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
