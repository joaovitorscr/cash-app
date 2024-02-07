import { CreditCardImage } from '@/assets/credit-card'
import { Button } from '@/components/button'

export default function CardPage() {
  return (
    <main className="container mx-auto mt-20 flex flex-col items-center justify-center px-2">
      <CreditCardImage />
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-medium text-blue-600">
          You have a new credit card!
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Please fill your personal information so we can send you a new credit
          card with even more benefits than before.
        </p>
        <Button>Request</Button>
      </div>
    </main>
  )
}
