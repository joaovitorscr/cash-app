interface MenuItemProps {
  title: string
  icon: JSX.Element
}

export function MenuItem({ title, icon }: MenuItemProps) {
  return (
    <button className="flex flex-col items-center focus:text-blue-800">
      {icon}
      <span className="text-xs font-medium">{title}</span>
    </button>
  )
}
