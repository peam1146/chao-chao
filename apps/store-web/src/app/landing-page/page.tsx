'use client'

import CategoryBlock from './components/category-block'

export default function LandingPage() {
  return (
    <main className="flex w-full bg-background min-h-screen lg:flex-row flex-col items-center justify-between p-24">
      <CategoryBlock />
    </main>
  )
}
