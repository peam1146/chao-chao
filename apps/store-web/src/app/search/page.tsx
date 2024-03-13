'use client'

import { ChangeEvent, Suspense, useState } from 'react'

import { useDebounce } from '@/components/layout/hooks/use-debounce'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DatePicker } from '@/components/ui/datepicker'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp, CaretUpDown, Funnel } from '@phosphor-icons/react'
import { useSearchParams } from 'next/navigation'

import { useQuery } from '../../../gqty'
import SmallCard from '../components/SmallCard'

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

  const { Items, Tags } = useQuery({ fetchPolicy: 'cache-first' })

  const [showFilterModal, setShowFilterModal] = useState(false)

  const items = Items({
    draft: false,
    limit: 5,
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
        greater_than_equal: startDate?.toISOString(),
      },
      end: {
        less_than_equal: endDate?.toISOString(),
      },
    },
  })

  const maxPriceValue = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value))
  }, 250)

  const minPriceValue = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value))
  }, 250)

  const tags = Tags({
    draft: false,
  })?.docs?.map((item) => {
    return {
      id: item?.id,
      name: item?.name,
    }
  })

  const FilterInput = () => (
    <>
      <h6 className="font-bold text-sm">Category</h6>
      <hr />
      <div className="max-h-40 overflow-y-scroll overflow-x-hidden space-y-1">
        {tags?.map((tag) => (
          <div className="flex justify-between items-center" key={tag.id}>
            <p className="text-sm">{tag.name}</p>
            <Checkbox
              onClick={() => {
                if (!tag.id) {
                  return
                }
                if (category.includes(tag.id)) {
                  setCategory(category.filter((item) => item !== tag.id))
                } else {
                  setCategory([...category, tag.id])
                }
              }}
              checked={!!tag.id && category?.includes(tag.id)}
            />
          </div>
        ))}
      </div>
      <h6 className="flex mt-4 font-bold text-sm">Date</h6>
      <hr />
      <div className="flex justify-between space-x-1 items-center">
        <DatePicker value={startDate} onChange={setStartDate} />
        <p>-</p>
        <DatePicker value={endDate} onChange={setEndDate} />
      </div>
      <h6 className="font-bold text-sm">Price</h6>
      <hr />
      <div className="flex justify-between space-x-1 items-center">
        <Input
          type="text"
          onChange={minPriceValue}
          className="text-sm p-1 h-8"
          placeholder="0.00"
        />
        <p>-</p>
        <Input
          type="text"
          onChange={maxPriceValue}
          className="text-sm p-1 h-8"
          placeholder="0.00"
        />
      </div>
    </>
  )

  return (
    <div className="lg:container px-4">
      <div className="flex gap-x-4 h-[calc(100vh-32px)] py-4 lg:py-12 font-sans overflow-y-scroll">
        <div className={cn('space-y-2 lg:sticky lg:top-0 lg:block md:block hidden')}>
          <FilterInput />
        </div>
        {showFilterModal && (
          <div className="w-screen h-screen z-40 flex items-center justify-center fixed">
            <div className="space-y-2 bg-background p-6 rounded-lg border border-border">
              <FilterInput />
              <div className="flex gap-4 mt-4">
                <Button
                  onClick={() => setShowFilterModal(false)}
                  className="bg-secondary text-secondary-foreground w-full"
                >
                  Cancel
                </Button>
                <Button className="bg-primary w-full">Apply</Button>
              </div>
            </div>
          </div>
        )}
        <div className="w-full">
          {search && (
            <div className="flex items-center gap-2 flex-1">
              <Typography variant="h6">Result of </Typography>
              <Typography variant="h4" fontWeight="bold">
                "{`${search}`}"
              </Typography>
            </div>
          )}
          <div className="border-b flex items-center gap-2 justify-end">
            <Button
              variant="ghost"
              onClick={() => setFilter('RELEVANCE')}
              className={cn(
                'px-0 hover:bg-transparent text-light',
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
                'px-0 hover:bg-transparent text-light flex items-center',
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
              className={cn(
                'px-0 hover:bg-transparent text-light',
                filter === 'LATEST' && 'text-white'
              )}
            >
              Latest
            </Button>
            <Button
              variant="ghost"
              onClick={() => setFilter('SCORE')}
              className={cn(
                'px-0 hover:bg-transparent text-light',
                filter === 'SCORE' && 'text-white'
              )}
            >
              Score
            </Button>
            <Button
              variant="ghost"
              onClick={() => setShowFilterModal(true)}
              className={cn('px-0 hover:bg-transparent text-light lg:hidden md:hidden')}
            >
              <Funnel className="text-xl" />
            </Button>
          </div>
          <Suspense fallback={<>Loading...</>}>
            <div className="py-4">
              {items?.docs?.filter((item) => item?.id !== undefined)?.length === 0 && (
                <div className="text-center">No item found</div>
              )}
              <div className="grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-3">
                {items?.docs
                  ?.filter((item) => item?.id !== undefined)
                  .map((item) => {
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
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  )
}
