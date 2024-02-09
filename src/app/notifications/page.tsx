import { NotificationCard } from '@/components/notifications/notification-card'
import { CornerUpLeft } from 'lucide-react'
import notificationsData from '../../../notifications-data.json'
import Link from 'next/link'

export interface Notification {
  id: number
  title: string
  description: string
  date: string
}

export default function Notifications() {
  return (
    <main className="container mx-auto my-20 px-2">
      <div className="mx-auto flex items-center justify-between">
        <Link href={'/'} className="focus-ring">
          <CornerUpLeft className="stroke-blue-600" />
        </Link>
        <h2 className="mx-auto text-2xl font-medium">Notifications</h2>
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-medium">Previously</h3>
        <div className="mt-4 space-y-3">
          {notificationsData.map((notification: Notification) => (
            <NotificationCard
              id={notification.id}
              key={notification.id}
              date={notification.date}
              title={notification.title}
              description={notification.description}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
