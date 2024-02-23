'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { BellIcon } from 'lucide-react'
import { Separator } from './separator'
import data from '../../data.json'
import { NotificationCard } from './notifications/notification-card'

export function NotificationButton() {
  const notifications = data.notifications

  return (
    <DropdownMenu.Root data-state="open">
      <DropdownMenu.Trigger>
        <div className="relative transition duration-500 group-hover:scale-110">
          <BellIcon className="stroke-blue-600" />
          <div className="absolute right-0 top-0">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
            </span>
          </div>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="rounded-md border bg-white p-4 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
          <DropdownMenu.Label className="text-xl">
            Notifications
          </DropdownMenu.Label>
          <Separator />
          <DropdownMenu.Item className="z-10 mt-4 space-y-4 bg-white md:grid md:grid-cols-1 md:gap-4 md:space-y-0">
            {notifications.slice(0, 4).map((notification) => (
              <NotificationCard
                key={notification.id}
                date={notification.date}
                title={notification.title}
                description={notification.description}
              />
            ))}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
