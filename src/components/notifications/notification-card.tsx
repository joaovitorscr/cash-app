interface NotificationCardProps {
  date: string
  description: string
  title: string
}

export function NotificationCard({
  date,
  description,
  title,
}: NotificationCardProps) {
  return (
    <div className="flex items-center rounded-md border bg-secondary-foreground p-4">
      <div className="w-48 lg:w-full">
        <div className="flex">
          <h3 className="font-medium text-primary md:text-xl">{title}</h3>
        </div>
        <p className="mt-2 text-xs text-primary-foreground md:text-base">
          {description}
        </p>
        <p className="mt-4 text-right text-xs  font-semibold text-primary-foreground md:text-sm">
          {date}
        </p>
      </div>
    </div>
  )
}
