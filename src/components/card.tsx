import { ArrowRight } from 'lucide-react'

interface CardProps {
  icon?: JSX.Element
  title: string
  description: string
}

export function Card({ description, icon, title }: CardProps) {
  return (
    <button className="flex w-full items-center justify-center gap-4 rounded-md hover:bg-blue-100 hover:ring-1 hover:ring-blue-800 focus-visible:bg-blue-100 focus-visible:ring-2 focus-visible:ring-blue-400">
      {icon}
      <div className="w-56 text-left lg:w-auto">
        <h3 className="font-medium lg:text-lg">{title}</h3>
        <p className="text-sm text-zinc-500 lg:text-base">{description}</p>
      </div>
      <ArrowRight className="text-blue-600  outline-none group-hover:text-blue-800 lg:size-8" />
    </button>
  )
}
