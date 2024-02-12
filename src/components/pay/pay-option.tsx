interface PayOptionProps {
  title: string
  description: string
  icon: JSX.Element
}

export function PayOption({ description, icon, title }: PayOptionProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <div>
        <h3 className="font-medium text-blue-600">{title}</h3>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
    </div>
  )
}
