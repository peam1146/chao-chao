import Typography from '@/components/ui/typography'

import { resolve } from '../../gqty'

export default async function Home() {
  const data = await resolve(({ query }) => {
    return query.meUser?.user!
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Typography variant="h1" fontWeight="bold">
          Welcome to ChaoChao
          {data.email && <span>{data.email}</span>}
        </Typography>
      </div>
    </main>
  )
}
