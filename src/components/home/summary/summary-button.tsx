import Link from 'next/link'

interface SummaryButtonProps {
  icon: JSX.Element
  title: string
  to: string
}

export function SummaryButton({ icon, title, to }: SummaryButtonProps) {
  return (
    <Link
      href={to}
      className="flex items-center gap-1 rounded-md bg-primary p-1 text-xs font-medium text-white outline-none transition duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring md:text-base"
    >
      {icon} <span>{title}</span>
    </Link>
  )
}
