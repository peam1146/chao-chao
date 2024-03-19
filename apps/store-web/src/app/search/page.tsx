'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp, CaretUpDown, Funnel } from '@phosphor-icons/react'
import { useSearchParams } from 'next/navigation'

import { Items, Maybe, useQuery } from '../../../gqty'
import SmallCard from '../components/SmallCard'
import { FilterInput } from './components/FilterInput'
import { FilterModal } from './components/FilterModal'

type Filter = 'RELEVANCE' | 'PRICE_LESS' | 'PRICE_MORE' | 'LATEST' | 'SCORE'

export default function SearchPage() {
  const [filter, setFilter] = useState<Filter>('RELEVANCE')

  const [category, setCategory] = useState<number[]>([])
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [minPrice, setMinPrice] = useState<number>()
  const [maxPrice, setMaxPrice] = useState<number>()

  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const query = useQuery({
    fetchPolicy: 'no-cache',
    refetchOnReconnect: true,
    refetchOnWindowVisible: true,
    suspense: true,
  })

  const itemsArray = query.Items({
    draft: false,
    where: {
      name: {
        contains: search,
      },
      tags: {
        in: category && category.length > 0 ? category : undefined,
      },
      price: {
        greater_than_equal: minPrice,
        less_than_equal: maxPrice,
      },
      start: {
        less_than: startDate?.toISOString(),
      },
      end: {
        greater_than: endDate?.toISOString(),
      },
    },
  })

  const [isOpen, setOpen] = useState(false)

  const SortingSection = () => (
    <div className="flex gap-2 justify-end border-b w-full h-fit max-md:justify-center max-md:space-x-5">
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
      <Button
        variant="ghost"
        onClick={() => setOpen(true)}
        className={cn('p-0 hover:bg-transparent text-light xl:hidden self-end')}
      >
        <Funnel className="text-xl" />
      </Button>
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

  const items = itemsSorted(itemsArray)

  return (
    <>
      <div className="container flex flex-row gap-4">
        <FilterInput
          startDate={startDate}
          endDate={endDate}
          category={category}
          setCategory={setCategory}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
        />
        <div className="flex flex-col w-[75%] max-xl:w-full gap-3">
          <div className="flex flex-col w-full bg-background rounded-md gap-6">
            <div className="flex -mt-[30px] sticky top-[60px] z-10">
              <div className="flex flex-col w-full h-fit items-center pt-6 bg-background rounded-t-md">
                <div className="flex flex-row w-full h-fit items-center justify-between">
                  <div className="flex flex-row gap-2 items-center ">
                    {search && (
                      <div className="flex items-center gap-2 flex-1">
                        <Typography variant="h6">Result of </Typography>
                        <Typography variant="h4" fontWeight="bold">
                          "{`${search}`}"
                        </Typography>
                      </div>
                    )}
                  </div>
                </div>
                <SortingSection />
              </div>
            </div>
            <div className="py-4">
              {query.$state.isLoading ? (
                <div className="text-center">Loading...</div>
              ) : (
                <>
                  {items?.length === 0 ? (
                    <div className="text-center">No item found</div>
                  ) : (
                    <div className="grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-3">
                      {items?.map((item) => {
                        return (
                          <SmallCard
                            key={item?.id}
                            name={item?.name ?? ''}
                            image={item?.image}
                            rating={item?.rating ?? 0}
                            price={item?.price ?? 0}
                          />
                        )
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal open={isOpen} onOpenChange={setOpen}>
        <FilterModal
          onClose={() => {
            setOpen(false)
          }}
          setCategory={setCategory}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
        />
      </Modal>
    </>
  )
}
