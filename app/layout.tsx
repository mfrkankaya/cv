import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Furkan Kaya | CV',
  description: 'Furkan Kaya CV'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-white text-slate-900 antialiased font-sans',
          GeistSans.variable,
          GeistMono.variable
        )}>
        {children}
      </body>
    </html>
  )
}
