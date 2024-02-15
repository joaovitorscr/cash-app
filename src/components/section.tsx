import * as React from 'react'
import { cn } from '@/lib/utils'

const Section = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn('container mx-auto my-4', className)}
    {...props}
  />
))

Section.displayName = 'Section'

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex justify-between', className)} {...props} />
))
SectionHeader.displayName = 'SectionHeader'

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn('font-semibold', className)} {...props} />
))
SectionTitle.displayName = 'SectionTitle'

const SectionBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-2 rounded-lg border p-2', className)}
    {...props}
  />
))
SectionBody.displayName = 'SectionBody'

export { Section, SectionHeader, SectionTitle, SectionBody }
