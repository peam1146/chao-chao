import Navbar from '@/components/layout/Navbar'
import { ThemeProvider } from '@/providers/Theme'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { resolve } from '../../gqty'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChaoChao',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { id } = await resolve(({ query }) => {
    return {
      id: query.meUser?.user?.id!,
    }
  })

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar id={id} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
