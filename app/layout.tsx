import type React from 'react'
import '@/app/globals.css'
import { Inter, Glory } from 'next/font/google'
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const glory = Glory({
  subsets: ['latin'],
  variable: '--font-glory',
  display: 'swap',
})

export const metadata = {
  title: 'Campus Marketplace',
  description: 'Buy and sell items within your college community',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  )
}
