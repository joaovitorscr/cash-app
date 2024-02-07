import { Card } from '@/components/card'
import { SectionLayout } from '@/components/section-layout'
import data from '../../../transactions-data.json'

export default function Transactions() {
  return (
    <main className="container mx-auto my-20 px-2">
      <h2 className="text-center text-3xl font-medium">Transactions</h2>
      <SectionLayout>
        <div className="space-y-2">
          {data.map((item) => (
            <div key={item.id}>
              <Card
                title={item.title}
                description={item.description}
                price={item.price}
              />
              <div className="h-px w-full bg-zinc-200 last:h-0" />
            </div>
          ))}
        </div>
      </SectionLayout>
    </main>
  )
}
