import { ShoppingBag } from '@/assets/shopping-bag-transactions'
import { Separator } from '@/components/separator'
import { numberToDollar } from '@/lib/utils'
import { format, parseISO } from 'date-fns'

interface TransactionCardProps {
  title: string
  description: string
  price: number
  bottomSeparator: boolean
  date?: string
}

export function TransactionCard({
  description,
  price,
  title,
  bottomSeparator,
  date,
}: TransactionCardProps) {
  let formattedDate = date

  function handleDateFormatting(date: string) {
    const parsedDate = parseISO(date!)
    formattedDate = format(parsedDate, 'MMMM d, yyyy')

    return formattedDate
  }

  if (date) {
    handleDateFormatting(date)
  }

  return (
    <>
      <div className="flex flex-col focus-visible:ring-2 focus-visible:ring-blue-400 lg:rounded-md lg:border">
        <div className="flex h-full items-center justify-around space-x-4 md:justify-center md:gap-8">
          <ShoppingBag className="size-12 md:size-14" />
          <div className="w-56 text-left">
            <h3 className="font-medium md:text-lg">{title}</h3>
            <p className="text-xs md:text-sm">{description}</p>
          </div>
          <p className="flex items-center text-xs font-medium text-red-600 md:text-lg">
            <span>-</span>
            {numberToDollar(price)}
          </p>
        </div>
        <div className="text-right text-xs font-medium lg:m-2 lg:text-sm">
          {formattedDate}
        </div>
      </div>
      {bottomSeparator && <Separator className="last:hidden lg:hidden" />}
    </>
  )
}
