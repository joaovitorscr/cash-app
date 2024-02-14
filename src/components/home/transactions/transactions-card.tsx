import { ShoppingBag } from '@/assets/shopping-bag-transactions'
import { Separator } from '@/components/separator'
import { numberToDollar } from '@/lib/utils'

interface TransactionCardProps {
  title: string
  description: string
  price: number
  bottomSeparator: boolean
}

export function TransactionCard({
  description,
  price,
  title,
  bottomSeparator,
}: TransactionCardProps) {
  return (
    <>
      <div className="flex items-center justify-around space-x-4 focus-visible:ring-2 focus-visible:ring-blue-400 md:justify-center md:gap-8">
        <ShoppingBag className="size-12 md:size-14" />
        <div className="w-56 text-left">
          <h3 className="font-medium md:text-lg">{title}</h3>
          <p className="text-xs md:text-sm">{description}</p>
        </div>
        <p className="flex items-center text-xs text-red-400 md:text-sm">
          <span>-</span>
          {numberToDollar(price)}
        </p>
      </div>
      {bottomSeparator && <Separator className="last:h-0" />}
    </>
  )
}
