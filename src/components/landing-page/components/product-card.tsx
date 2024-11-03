import { cn } from '@/lib/cn'
import * as React from 'react'

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      'border rounded-lg w-72 bg-card flex flex-col items-center p-4 gap-2',
      className,
    )}
    {...props}
    ref={ref}
  />
))
Root.displayName = 'ProductCard.Root'

const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    className={cn('text-xl font-medium text-center', className)}
    {...props}
    ref={ref}
  />
))
Title.displayName = 'ProductCard.Title'

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={cn('text-md text-center', className)} {...props} ref={ref} />
))
Description.displayName = 'ProductCard.Description'

const ProductCard = { Root, Title, Description }

export default ProductCard
