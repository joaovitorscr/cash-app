import { CreditCardImage } from '@/assets/credit-card'
import { Button } from '@/components/button'

export default function CardPage() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center">
      <CreditCardImage />
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl font-medium text-primary md:text-4xl">
          You have a new credit card!
        </h2>
        <p className="mt-4 text-sm md:w-2/3 md:text-lg">
          Please fill your personal information so we can send you a new credit
          card with even more benefits than before.
        </p>
        <Button className="mt-8" size={'medium'}>
          Request
        </Button>
      </div>
    </main>
  )
}
