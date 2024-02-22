'use client'

import { NotificationCard } from '@/components/notifications/notification-card'
import { CornerUpLeft } from 'lucide-react'
import data from '../../../data.json'
import { useRouter } from 'next/navigation'

export interface Notification {
  id: number
  title: string
  description: string
  date: string
}

export default function Notifications() {
  const notifications = data.notifications
  const router = useRouter()

  function handleBackNavigation() {
    router.back()
  }

  return (
    <main className="container mx-auto my-20 px-2">
      <div className="mx-auto flex items-center justify-between">
        <button
          type="button"
          onClick={handleBackNavigation}
          className="focus-ring"
        >
          <CornerUpLeft className="size-8 stroke-blue-600" />
        </button>
        <h2 className="mx-auto text-2xl font-medium md:text-3xl">
          Notifications
        </h2>
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-medium md:text-2xl">Previously</h3>
        <div className="mt-4 space-y-4">
          {notifications.map((notification: Notification) => (
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
