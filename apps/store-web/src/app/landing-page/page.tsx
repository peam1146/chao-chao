'use client'

import Card from './components/card'
import CategoryBlock from './components/category-block'
import SmallCard from './components/small-card'

export default function LandingPage() {
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] flex-col items-center justify-between">
      <CategoryBlock />
      <div className="flex flex-col w-full gap-20">
        <Card />
        <div className="flex flex-row flex-wrap gap-3">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </main>
  )
}
