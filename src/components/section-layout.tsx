import { ReactNode } from 'react'

interface SectionLayoutProps {
  title: string
  rightButton?: string
  children: ReactNode
}

export function SectionLayout({
  children,
  title,
  rightButton,
}: SectionLayoutProps) {
  return (
    <section className="container mx-auto my-4">
      <div className="flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <button className="text-sm text-blue-600 hover:underline">
          {rightButton}
        </button>
      </div>
      <div className="mt-2 rounded-lg border p-2">{children}</div>
    </section>
  )
}
