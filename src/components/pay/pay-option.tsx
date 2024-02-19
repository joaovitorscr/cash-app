import { cn } from '@/lib/utils'
import * as React from 'react'

const PayOptionCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center space-x-2', className)}
    {...props}
  />
))
PayOptionCard.displayName = 'PayOptionCard'

const PayOptionCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props} />
))
PayOptionCardContent.displayName = 'PayOptionCardContent'

export { PayOptionCard, PayOptionCardContent }
