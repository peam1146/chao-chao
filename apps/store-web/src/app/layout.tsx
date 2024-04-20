import Navbar from '@/components/layout/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/providers/Theme'
import { UserTokenProvider } from '@/providers/User'
import type { Metadata } from 'next'
import { IBM_Plex_Sans_Thai_Looped } from 'next/font/google'

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
  return (
    <html lang="en">
      <body className={sans.className}>
        <UserTokenProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <div className="min-h-screen max-w-screen flex flex-col bg-background">
              <Navbar />
              <div className="flex-1 flex-col flex relative w-full">{children}</div>
            </div>
          </ThemeProvider>
        </UserTokenProvider>
      </body>
    </html>
  )
}
