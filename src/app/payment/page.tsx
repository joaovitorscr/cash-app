import { ContactCard } from '@/components/pay/contact-card'

import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'
import data from '../../../data.json'
import { Card, CardBody, CardDescription, CardTitle } from '@/components/card'
import { numberToDollar } from '@/lib/utils'

export default function Pay() {
  const contacts = data.contacts
  const payments = data.payments

  return (
    <main className="container mx-auto space-y-8 px-2 md:space-y-0 lg:space-y-8">
      <div className="space-y-8 md:mx-auto md:flex md:justify-center md:gap-20 md:space-y-0 lg:block lg:space-y-8">
        <div>
          <h2 className="text-2xl font-medium">Transfer options</h2>
          <div className="mt-2 space-y-4 rounded-md border p-2 lg:mx-auto lg:flex lg:w-full lg:max-w-full lg:items-center lg:justify-center lg:gap-8 lg:space-y-0">
            <Card className="group justify-start">
              <ArrowDownCircle className="size-8 stroke-primary stroke-1 transition duration-300 group-hover:scale-110 lg:size-10" />
              <CardBody>
                <CardTitle className="font-medium text-primary lg:text-lg">
                  Deposit
                </CardTitle>
                <CardDescription>
                  To your account without extra taxes.
                </CardDescription>
              </CardBody>
            </Card>
            <Card className="group justify-start">
              <ArrowUpCircle className="size-8 stroke-primary stroke-1 transition duration-300 group-hover:scale-110 lg:size-10" />
              <CardBody>
                <CardTitle className="font-medium text-primary lg:text-lg">
                  Withdraw
                </CardTitle>
                <CardDescription>
                  Transfer money in just two clicks
                </CardDescription>
              </CardBody>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Recent contacts</h2>
          <div className="mt-2 grid grid-cols-2 gap-2 rounded-md border p-4 lg:grid-cols-10">
            {contacts.map(({ id, image, name }) => (
              <ContactCard key={id} name={name} image={image} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:mx-auto md:max-w-xl lg:w-full lg:max-w-full">
        <h2 className="text-2xl font-medium">Last Transfers</h2>
        <div className="mt-2 space-y-4 rounded-md border p-2 md:mx-auto md:max-w-xl lg:w-full lg:max-w-full">
          {payments.map(
            ({ title, transferType, description, transferValue, id }) => (
              <Card
                className="rounded-none border-b py-4 last:border-0"
                key={id}
              >
                {transferType === 'withdraw' ? (
                  <ArrowDownCircle className="size-8 stroke-destructive stroke-1" />
                ) : (
                  <ArrowUpCircle className="size-8 stroke-green-800 stroke-1" />
                )}
                <CardBody className=" flex items-center md:w-full md:justify-between lg:w-1/2">
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </div>
                  {transferType === 'withdraw' ? (
                    <p className="font-medium text-destructive md:text-lg">
                      -{numberToDollar(transferValue)}
                    </p>
                  ) : (
                    <p className="font-medium text-green-800 md:text-lg">
                      -{numberToDollar(transferValue)}
                    </p>
                  )}
                </CardBody>
              </Card>
            ),
          )}
        </div>
      </div>
    </main>
  )
}
