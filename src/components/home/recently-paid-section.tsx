import { Button } from '../button'
import { SectionLayout } from '../section-layout'

export function RecentlyPaidSection() {
  return (
    <SectionLayout title="Recently paid">
      <div className="my-4 flex flex-col items-center">
        <p className="text-center text-xs text-zinc-500">
          Quickly pay your most recent contacts again
        </p>
        <Button>Make a payment</Button>
      </div>
    </SectionLayout>
  )
}
