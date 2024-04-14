'use client'

import { Item_advertise__status_Input, useQuery } from '../../gqty'
import CategoryBlock from './components/CategoryBlock'
import { PromoteCard } from './components/PromoteCard'
import SmallCard from './components/SmallCard'

export default function Home() {
  const query = useQuery({ fetchPolicy: 'no-cache' })

  const items = query.Items({
    draft: false,
    where: {
      advertise__status: {
        equals: Item_advertise__status_Input.active,
      },
    },
  })

  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] flex-col items-center justify-between pb-10">
      <CategoryBlock />
      <div className="flex flex-col w-full gap-20 pt-10">
        <PromoteCard />
        <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-2 lg:gap-3 md:gap-2 gap-3 pt-10">
          {items?.docs
            ?.filter((item) => item?.id !== undefined)
            .map((item, index) => (
              <SmallCard
                key={item?.id}
                id={item?.id ?? index}
                image={item?.image}
                name={item?.name ?? ''}
                rating={item?.rating ?? 0}
                price={item?.price ?? 0}
              />
            ))}
        </div>
      </div>
    </main>
  )
}
