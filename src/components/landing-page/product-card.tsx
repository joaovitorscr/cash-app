import { cn } from '@/lib/cn'
import * as React from 'react'

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn('flex flex-col items-center gap-4 text-center', className)}
    {...props}
    ref={ref}
  />
))
Root.displayName = 'Root'

const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 className={cn('text-xl font-medium', className)} {...props} ref={ref} />
))
Title.displayName = 'Title'

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p className={cn('text-md', className)} {...props} ref={ref} />
))
Description.displayName = 'Description'

export { Root, Title, Description }
