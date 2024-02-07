interface SummaryButtonProps {
  icon: JSX.Element
  title: string
}

export function SummaryButton({ icon, title }: SummaryButtonProps) {
  return (
    <button className="flex items-center gap-1 rounded-md bg-blue-100 p-1 text-xs font-medium text-blue-600  outline-none hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-800 ">
      {icon} <span>{title}</span>
    </button>
  )
}
