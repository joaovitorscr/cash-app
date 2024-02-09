import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BottomMenu } from '@/components/menus/bottom-menu'
import { TopMenu } from '@/components/menus/top-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cash App',
  description: 'Your definitive Banking App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <TopMenu />
        {children}
        <BottomMenu />
      </body>
    </html>
  )
}
