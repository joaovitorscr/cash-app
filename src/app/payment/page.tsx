import { ContactCard } from '@/components/pay/contact-card'

import { PayOption } from '@/components/pay/pay-option'
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'
import data from '../../../data.json'

export default function Pay() {
  const contacts = data.contacts
  return (
    <main className="container mx-auto my-20 space-y-4 px-2">
      <h2 className="text-center text-2xl font-medium">Money transfer</h2>
      <div className="mt-10 space-y-4 rounded-md border p-2">
        <PayOption
          icon={<ArrowDownCircle className="size-8 stroke-blue-500" />}
          title="Deposit"
          description="To your account without extra taxes."
        />
        <PayOption
          icon={<ArrowUpCircle className="size-8 stroke-blue-500" />}
          title="Withdraw"
          description="Transfer money in just two clicks"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium">Recent contacts</h3>
        <div className="mt-6 grid grid-cols-3 gap-2 rounded-md border p-2">
          {contacts.map(({ id, image, name }) => (
            <ContactCard key={id} name={name} image={image} />
          ))}
        </div>
      </div>
    </main>
  )
}
