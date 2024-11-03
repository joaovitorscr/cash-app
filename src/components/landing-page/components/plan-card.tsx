import { buttonVariants } from '@/components/ui/button'
import { CheckIcon } from 'lucide-react'

export interface IPlanCard {
  title: string
  description: string
  actionText?: string
  price?: string
  perks: string[]
}

export function PlanCard({
  title,
  description,
  actionText,
  price,
  perks,
}: IPlanCard) {
  return (
    <div className="flex flex-col gap-8 rounded-lg border bg-card p-8">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p>{description}</p>
      {price && (
        <p className="relative my-2">
          <span className="absolute top-0">$</span>
          <span className="ms-4 text-6xl">{price}</span>
        </p>
      )}
      <a href="/sign-up" className={buttonVariants()}>
        {actionText ?? 'Sign Up'}{' '}
      </a>
      <div>
        <h4>Key Features:</h4>
        <div className="ms-4 mt-5 flex flex-col gap-4">
          {perks.map((perk, index) => (
            <div key={index} className="flex items-start gap-1">
              <CheckIcon className="size-4 shrink-0" />
              <span className="text-sm">{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
