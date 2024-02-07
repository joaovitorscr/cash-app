import { SectionLayout } from '../section-layout'

export function RecentlyPaidSection() {
  return (
    <SectionLayout title="Recently paid">
      <div className="my-4 flex flex-col items-center">
        <p className="text-center text-xs text-zinc-500">
          Quickly pay your most recent contacts again
        </p>
        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-1 text-sm font-medium text-white outline-none hover:bg-blue-500 hover:text-zinc-100 focus-visible:bg-blue-500 focus-visible:ring-2 focus-visible:ring-blue-600 ">
          Make a payment
        </button>
      </div>
    </SectionLayout>
  )
}
