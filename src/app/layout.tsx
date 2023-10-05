import C24Header from '@/components/c24-header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CHECK24 Suprise',
  description: 'Get suprised by the best holiday deals on the internet!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.check24.de/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.check24.de/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.check24.de/favicon-16x16.png"/>
      </header>
      <body className={inter.className}>
        <C24Header />
        {children}
      </body>
    </html>
  )
}
