import { cn } from '@/lib/utils'
import * as React from 'react'

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex cursor-pointer items-center justify-center gap-4 rounded-md hover:bg-blue-100 hover:ring-1 hover:ring-blue-800 focus-visible:bg-blue-100 focus-visible:ring-2 focus-visible:ring-blue-400',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('w-56 text-left md:w-auto lg:w-auto', className)}
    {...props}
  />
))
CardBody.displayName = 'CardBody'

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-medium lg:text-lg', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-zinc-500 lg:text-base', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

export { Card, CardBody, CardTitle, CardDescription }
