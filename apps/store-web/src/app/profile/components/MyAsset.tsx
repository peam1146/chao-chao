'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp, CaretUpDown } from '@phosphor-icons/react'

import { Items, Maybe, useQuery } from '../../../../gqty'
import { AssetCard } from './AssetCard'

type Filter = 'RELEVANCE' | 'PRICE_LESS' | 'PRICE_MORE' | 'LATEST' | 'SCORE'

export function MyAsset() {
  const [filter, setFilter] = useState<Filter>('RELEVANCE')

  const query = useQuery({
    fetchPolicy: 'cache-first',
  })

  const userId = query.meUser?.user?.id

  const itemsArray = query.Items({
    draft: false,
    where: {
      createdBy: {
        equals: userId,
      },
    },
  })
  const SortingSection = () => (
    <div className="flex  justify-between w-full border-b items-center max-md:flex-col max-md:items-start">
      <Typography variant="h4" fontWeight="bold">
        Assets
      </Typography>
      <div className="flex gap-2 h-fit max-md:space-x-5 max-md:self-center">
        <Button
          variant="ghost"
          onClick={() => setFilter('RELEVANCE')}
          className={cn(
            'p-0 hover:bg-transparent text-light',
            filter === 'RELEVANCE' && 'text-white'
          )}
        >
          Relevance
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            setFilter(filter === 'PRICE_LESS' ? 'PRICE_MORE' : 'PRICE_LESS')
          }}
          className={cn(
            'p-0 hover:bg-transparent text-light flex items-center',
            (filter === 'PRICE_LESS' || filter === 'PRICE_MORE') && 'text-white'
          )}
        >
          {filter === 'PRICE_LESS' || filter === 'PRICE_MORE' ? (
            {
              ['PRICE_LESS']: <ArrowUp className="h-4" />,
              ['PRICE_MORE']: <ArrowDown className="h-4" />,
            }[filter]
          ) : (
            <CaretUpDown className="h-4" />
          )}
          Price
        </Button>
        <Button
          variant="ghost"
          onClick={() => setFilter('LATEST')}
          className={cn('p-0 hover:bg-transparent text-light', filter === 'LATEST' && 'text-white')}
        >
          Latest
        </Button>
        <Button
          variant="ghost"
          onClick={() => setFilter('SCORE')}
          className={cn('p-0 hover:bg-transparent text-light', filter === 'SCORE' && 'text-white')}
        >
          Score
        </Button>
      </div>
    </div>
  )

  const itemsSorted = (items: Maybe<Items>) => {
    if (filter === 'RELEVANCE') {
      return items?.docs?.filter((item) => item?.id !== undefined)
    }
    if (filter === 'PRICE_LESS') {
      return items?.docs
        ?.filter((item) => item?.id !== undefined)
        .sort((a, b) => (a?.price ?? 0) - (b?.price ?? 0))
    }
    if (filter === 'PRICE_MORE') {
      return items?.docs
        ?.filter((item) => item?.id !== undefined)
        .sort((a, b) => (b?.price ?? 0) - (a?.price ?? 0))
    }
    if (filter === 'LATEST') {
      return items?.docs
        ?.filter((item) => item?.id !== undefined)
        .sort((a, b) => ((a?.createdAt ?? 0) as number) - ((b?.createdAt ?? 0) as number))
    }
    if (filter === 'SCORE') {
      return items?.docs
        ?.filter((item) => item?.id !== undefined)
        .sort((a, b) => ((a?.rating ?? 0) as number) - ((b?.rating ?? 0) as number))
    }

    return items?.docs?.filter((item) => item?.id !== undefined)
  }

  return (
    <>
      <SortingSection />
      <div className="py-4 w-full">
        <div className="mx-auto w-full grid grid-cols-2 2xl:grid-cols-6 lg:grid-cols-4 gap-4">
          {!itemsArray?.docs?.length && (
            <Typography variant="h6" fontWeight="bold" className="self-center w-full">
              No assets found
            </Typography>
          )}
          {itemsSorted(itemsArray) &&
            itemsSorted(itemsArray)?.map((item, index) => (
              <AssetCard
                key={index}
                id={item?.id}
                name={item?.name ?? ''}
                image={item?.image}
                rating={item?.rating ?? 0}
                price={item?.price ?? 0}
              />
            ))}
        </div>
      </div>
    </>
  )
}
