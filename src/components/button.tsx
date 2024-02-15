import { cn } from '@/lib/utils'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva('mt-4 rounded-lg outline-none font-medium', {
  variants: {
    variant: {
      default:
        'bg-blue-600 text-white hover:bg-blue-500 hover:text-zinc-100 focus-visible:bg-blue-500 focus-visible:ring-2 focus-visible:ring-blue-600',
      sideMenu:
        'bg-white text-blue-500 hover:bg-zinc-200 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-zinc-400',
      link: 'focus-ring text-sm text-blue-600 hover:underline',
    },
    size: {
      default: 'px-4 py-1 text-sm ',
      medium: 'px-16 py-2 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, className, size }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
