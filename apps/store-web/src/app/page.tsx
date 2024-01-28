import logo from '@/assets/images/logo.svg'
import Typography from '@/components/ui/typography'
import Image from 'next/image'

import { resolve } from '../../gqty'
import { ModeToggle } from './components/theme-toggle'

export default async function Home() {
  const data = await resolve(({ query }) => {
    return query.meUser?.user!
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row w-full items-center space-x-4">
        <Typography variant="h1" fontWeight="bold" className="flex flex-row gap-4">
          Welcome to
          <Image src={logo} width={100} height={100} alt="logo" />
          {data.email && <span>{data.email}</span>}
        </Typography>
        <ModeToggle />
      </div>
    </main>
  )
}
