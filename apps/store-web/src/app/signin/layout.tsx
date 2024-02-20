import { Toaster } from '@/components/ui/sonner'

export default async function SigninLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <main>{children}</main>
      <Toaster />
    </div>
  )
}
