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
    <main className="container flex w-full bg-background h-full flex-col items-center justify-between">
      <CategoryBlock />
      <div className="flex flex-col w-full gap-20 pt-10">
        {items?.docs?.filter((item) => item?.id !== undefined).at(0) && (
          <PromoteCard
            key={items?.docs?.at(0)?.id}
            name={items?.docs?.at(0)?.name ?? ''}
            price={items?.docs?.at(0)?.price ?? 0}
            rating={items?.docs?.at(0)?.rating ?? 0}
            image={items?.docs?.at(0)?.image}
            description={items?.docs?.at(0)?.description ?? ''}
          />
        )}
        <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-2 lg:gap-3 md:gap-2 gap-3 pt-10">
          {items?.docs
            ?.filter((item) => item?.id !== undefined)
            .map(
              (item, index) =>
                index > 0 && (
                  <SmallCard
                    key={item?.id ?? index}
                    id={item?.id ?? index}
                    image={item?.image}
                    name={item?.name ?? ''}
                    rating={item?.rating ?? 0}
                    price={item?.price ?? 0}
                  />
                )
            )}
        </div>
      </div>
    </main>
  )
}
