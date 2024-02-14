import { Button } from '../button'
import { SectionLayout } from '../section-layout'

export function RecentlyPaidSection() {
  return (
    <SectionLayout title="Recently paid">
      <div className="flex flex-col items-center py-4">
        <p className="text-center text-xs text-zinc-500 md:text-base">
          Quickly pay your most recent contacts again
        </p>
        <Button>Make a payment</Button>
      </div>
    </SectionLayout>
  )
}
