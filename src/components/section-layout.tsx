import { ReactNode } from 'react'

interface SectionLayoutProps {
  title: string
  children: ReactNode
}

export function SectionLayout({ children, title }: SectionLayoutProps) {
  return (
    <section className="container mx-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="mt-2 rounded-lg border px-2">{children}</div>
    </section>
  )
}
