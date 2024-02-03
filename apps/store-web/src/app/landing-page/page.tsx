'use client'

import Card from './components/card'
import CategoryBlock from './components/category-block'
import SmallCard from './components/small-card'

export default function LandingPage() {
  return (
    <main className="flex w-full h-full bg-background flex-col items-center justify-between p-24 gap-22">
      <CategoryBlock />
      <div className="flex flex-col w-full gap-20">
        <Card />
        <SmallCard />
      </div>
    </main>
  )
}
