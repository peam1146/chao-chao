import Navbar from '@/components/layout/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/providers/Theme'
import type { Metadata } from 'next'
import { IBM_Plex_Sans_Thai_Looped } from 'next/font/google'

import { resolve } from '../../gqty'
import './globals.css'

const sans = IBM_Plex_Sans_Thai_Looped({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

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
      id: query.meUser?.user?.id,
    }
  })

  return (
    <html lang="en">
      <body className={sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Navbar id={id} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
