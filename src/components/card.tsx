import { numberToDollar } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { ShoppingBag } from '@/assets/shopping-bag-transactions'

interface CardProps {
  icon?: JSX.Element
  title: string
  description: string
  price?: number
  bottomSeparator?: boolean
}

export function Card({
  description,
  icon,
  title,
  price,
  bottomSeparator,
}: CardProps) {
  return (
    <>
      <button className="group flex w-full items-center rounded-md outline-none hover:bg-blue-100 hover:ring-1 hover:ring-blue-800 focus-visible:bg-blue-100 focus-visible:ring-2 focus-visible:ring-blue-400">
        {icon ? <>{icon}</> : <ShoppingBag className="mr-2 h-10 w-10" />}
        <div className="w-56 text-left">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-zinc-500">{description}</p>
        </div>
        {price ? (
          <span className="text-sm text-red-400">-{numberToDollar(price)}</span>
        ) : (
          <ArrowRight className="text-blue-600  outline-none group-hover:text-blue-800" />
        )}
      </button>
      {bottomSeparator && <div className="h-px w-full bg-zinc-200 last:h-0" />}
    </>
  )
}
