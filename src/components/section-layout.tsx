import Link from 'next/link'
import { ReactNode } from 'react'

interface SectionLayoutProps {
  title?: string
  rightButton?: {
    title: string
    to: string
  }
  children: ReactNode
}

export function SectionLayout({
  children,
  title,
  rightButton,
}: SectionLayoutProps) {
  return (
    <section className="container mx-auto my-4 lg:col-span-1">
      <div className="flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        {rightButton && (
          <Link
            href={rightButton.to}
            className="focus-ring text-sm text-blue-600 hover:underline"
          >
            {rightButton.title}
          </Link>
        )}
      </div>
      <div className="mt-2 rounded-lg border p-2">{children}</div>
    </section>
  )
}
