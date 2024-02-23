import Link from 'next/link'
import { buttonVariants } from '../button'
import { Section, SectionHeader, SectionTitle, SectionBody } from '../section'
import { cn } from '@/lib/utils'

export function RecentlyPaidSection() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Recently paid</SectionTitle>
      </SectionHeader>
      <SectionBody className="lg:py-16 xl:py-9">
        <div className="flex flex-col items-center">
          <p className="text-center text-xs text-zinc-500 md:text-base">
            Quickly pay your most recent contacts again
          </p>
          <Link
            href={'/payment'}
            className={cn(
              'transition duration-500 hover:scale-105',
              buttonVariants({ variant: 'default' }),
            )}
          >
            Make a payment
          </Link>
        </div>
      </SectionBody>
    </Section>
  )
}
