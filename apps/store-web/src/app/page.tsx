import Link from 'next/link'

import Card from './components/card'
import CategoryBlock from './components/category-block'
import SmallCard from './components/small-card'

export default async function Home() {
  const mockData = [
    { id: 1, name: 'Samsung Galaxy S21 Ultra 5Ggiiiiiiiiiiiiii', rating: 4.0, price: 100 },
    { id: 2, name: 'Jujutsu kaisen Vol.4', rating: 4.0, price: 500 },
    { id: 3, name: 'Iphone 13 Pro Max', rating: 3.0, price: 20 },
    { id: 4, name: 'Macbook Pro 2021', rating: 2.0, price: 10 },
  ]
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] flex-col items-center justify-between pb-10">
      <CategoryBlock />
      <div className="flex flex-col w-full gap-10 pt-10">
        <Card />
        <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-2 lg:gap-3 md:gap-2 gap-3 pt-10">
          {mockData.map((item, index) => (
            <Link href={`/detail/${item.id}`} key={index}>
              <SmallCard
                key={index}
                id={item.id}
                name={item.name}
                rating={item.rating}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
