'use client'

import Card from './components/card'
import CategoryBlock from './components/category-block'
import SmallCard from './components/small-card'

export default function LandingPage() {
  const mockData = [
    { name: 'Samsung Galaxy S21 Ultra 5G', rating: 4.0, price: 100 },
    { name: 'Jujutsu kaisen Vol.4', rating: 4.0, price: 500 },
    { name: 'Iphone 13 Pro Max', rating: 3.0, price: 20 },
    { name: 'Macbook Pro 2021', rating: 2.0, price: 10 },
  ]
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] flex-col items-center justify-between pb-10">
      <CategoryBlock />
      <div className="flex flex-col w-full gap-20 pt-10">
        <Card />
        <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-3">
          {mockData.map((item, index) => (
            <SmallCard key={index} name={item.name} rating={item.rating} price={item.price} />
          ))}
        </div>
      </div>
    </main>
  )
}
