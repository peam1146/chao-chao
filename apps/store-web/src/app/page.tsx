import Card from './components/card'
import CategoryBlock from './components/category-block'
import SmallCard from './components/small-card'

export default async function Home() {
  const data = await resolve(({ query }) => {
    return query.meUser?.user?.email
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-row w-full items-center space-x-4">
        <Typography variant="h1" fontWeight="bold" className="flex flex-row gap-4">
          Welcome to
          <Image src={logo} width={100} height={100} alt="logo" />
          {data && <span>{data}</span>}
        </Typography>
      </div>
    </main>
  )
}
