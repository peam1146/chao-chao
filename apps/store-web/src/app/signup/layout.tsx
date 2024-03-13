import { Toaster } from '@/components/ui/toaster'

export default async function SignupLayout({
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
