import { ContactCard } from '@/components/pay/contact-card'

import {
  PayOptionCard,
  PayOptionCardContent,
} from '@/components/pay/pay-option'
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'
import data from '../../../data.json'
import { Card, CardBody, CardDescription, CardTitle } from '@/components/card'
import { numberToDollar } from '@/lib/utils'
import { Separator } from '@/components/separator'

export default function Pay() {
  const contacts = data.contacts
  const payments = data.payments
  return (
    <main className="container mx-auto my-20 space-y-8 px-2">
      <div>
        <h2 className="text-2xl font-medium">Transfer options</h2>
        <div className="mt-2 space-y-4 rounded-md border p-2">
          <PayOptionCard>
            <ArrowDownCircle className="size-8 stroke-blue-500 stroke-1" />
            <PayOptionCardContent>
              <h3 className="font-medium text-blue-600">Deposit</h3>
              <p className="text-xs text-zinc-500">
                To your account without extra taxes.
              </p>
            </PayOptionCardContent>
          </PayOptionCard>
          <PayOptionCard>
            <ArrowUpCircle className="size-8 stroke-blue-500 stroke-1" />
            <PayOptionCardContent>
              <h3 className="font-medium text-blue-600">Withdraw</h3>
              <p className="text-xs text-zinc-500">
                Transfer money in just two clicks
              </p>
            </PayOptionCardContent>
          </PayOptionCard>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-medium">Recent contacts</h2>
        <div className="mt-2 grid grid-cols-2 gap-4 rounded-md border p-4">
          {contacts.map(({ id, image, name }) => (
            <ContactCard key={id} name={name} image={image} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-medium">Last Transfers</h2>
        <div className="mt-2 space-y-4 rounded-md border p-2">
          {payments.map(
            ({ title, transferType, description, transferValue, id }) => (
              <>
                <Card key={id}>
                  {transferType === 'withdraw' ? (
                    <ArrowDownCircle className="size-8 stroke-red-600 stroke-1" />
                  ) : (
                    <ArrowUpCircle className="size-8 stroke-green-600 stroke-1" />
                  )}
                  <CardBody className="flex items-center justify-between">
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </div>
                    {transferType === 'withdraw' ? (
                      <p className="font-medium text-red-600 md:text-lg">
                        -{numberToDollar(transferValue)}
                      </p>
                    ) : (
                      <p className="font-medium text-green-600 md:text-lg">
                        -{numberToDollar(transferValue)}
                      </p>
                    )}
                  </CardBody>
                </Card>
                <Separator className="last:h-0" />
              </>
            ),
          )}
        </div>
      </div>
    </main>
  )
}
