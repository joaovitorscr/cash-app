import { Notification } from '@/app/notifications/page'

export function NotificationCard({ date, description, title }: Notification) {
  return (
    <div className="flex items-center rounded-md border p-4">
      <div className="w-48 md:w-full">
        <div className="flex">
          <h3 className="font-medium md:text-xl">{title}</h3>
        </div>
        <p className="mt-2 text-xs md:text-base">{description}</p>
        <p className="mt-4 text-right text-xs font-semibold md:text-sm">
          {date}
        </p>
      </div>
    </div>
  )
}
