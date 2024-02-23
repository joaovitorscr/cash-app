import { cn } from '@/lib/utils'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'mt-4 rounded-lg outline-none text-white font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary  focus-visible:ring-2 focus-visible:ring-ring',
        sideMenu: 'bg-primary focus-visible:ring-2 focus-visible:ring-ring',
        link: 'focus-ring h-full mt-0 text-sm hover:text-primary hover:underline',
      },
      size: {
        default: 'px-4 py-1 text-sm',
        medium: 'px-16 py-2 text-lg',
      },
      animations: {
        default: 'transition duration-300 hover:scale-105',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animations: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, animations, size, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, className, size, animations }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
