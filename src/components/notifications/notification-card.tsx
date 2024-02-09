import { Notification } from '@/app/notifications/page'

export function NotificationCard({ date, description, title }: Notification) {
  return (
    <div className="flex items-center rounded-md border p-2">
      <div>
        <div className="flex">
          <h3 className="font-medium">{title}</h3>
        </div>
        <p className="mt-2 text-xs">{description}</p>
        <p className="mt-4 text-right text-xs font-semibold">{date}</p>
      </div>
    </div>
  )
}
