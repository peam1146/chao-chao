'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DatePicker } from '@/components/ui/datepicker'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp, CaretDown, CaretUp, CaretUpDown, Funnel } from '@phosphor-icons/react'

import SmallCard from '../components/small-card'

enum Filter {
  RELEVANCE = 'RELEVANCE',
  PRICE_LESS = 'PRICE_LESS',
  PRICE_MORE = 'PRICE_MORE',
  LATEST = 'LATEST',
  SCORE = 'SCORE',
}

export default function SearchPage() {
  const [filter, setFilter] = useState<Filter>(Filter.RELEVANCE)
  const mockData = [
    { name: 'Samsung Galaxy S21 Ultra 5G', rating: 4.0, price: 100 },
    { name: 'Jujutsu kaisen Vol.4', rating: 4.0, price: 500 },
    { name: 'Iphone 13 Pro Max', rating: 3.0, price: 20 },
    { name: 'Macbook Pro 2021', rating: 2.0, price: 10 },
    { name: 'Samsung Galaxy S21 Ultra 5G', rating: 4.0, price: 100 },
    { name: 'Jujutsu kaisen Vol.4', rating: 4.0, price: 500 },
    { name: 'Iphone 13 Pro Max', rating: 3.0, price: 20 },
    { name: 'Macbook Pro 2021', rating: 2.0, price: 10 },
    { name: 'Samsung Galaxy S21 Ultra 5G', rating: 4.0, price: 100 },
    { name: 'Jujutsu kaisen Vol.4', rating: 4.0, price: 500 },
    { name: 'Iphone 13 Pro Max', rating: 3.0, price: 20 },
    { name: 'Macbook Pro 2021', rating: 2.0, price: 10 },
    { name: 'Samsung Galaxy S21 Ultra 5G', rating: 4.0, price: 100 },
    { name: 'Jujutsu kaisen Vol.4', rating: 4.0, price: 500 },
    { name: 'Iphone 13 Pro Max', rating: 3.0, price: 20 },
    { name: 'Macbook Pro 2021', rating: 2.0, price: 10 },
  ]

  const FilterInput = () => (
    <>
      <h6 className="font-bold text-sm">Category</h6>
      <hr />
      <div className="h-40 overflow-scroll space-y-1">
        {Array.from({ length: 35 }).map((_, index) => (
          <div className="flex justify-between items-center">
            <p className="text-sm">หนังสือนิยาย/มังงะ</p>
            <Checkbox />
          </div>
        ))}
      </div>
      <h6 className="font-bold text-sm">Date</h6>
      <hr />
      <div className="flex justify-between space-x-1 items-center">
        <DatePicker />
        <p>-</p>
        <DatePicker />
      </div>
      <h6 className="font-bold text-sm">Price</h6>
      <hr />
      <div className="flex justify-between space-x-1 items-center">
        <Input type="number" className="text-sm p-1 h-8" placeholder="0.00" />
        <p>-</p>
        <Input type="number" className="text-sm p-1 h-8" placeholder="0.00" />
      </div>
    </>
  )
  const [showFilterModal, setShowFilterModal] = useState(false)

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
        <div>
          <div className="flex items-center gap-2 flex-1">
            <Typography variant="h6">Result of </Typography>
            <Typography variant="h4" fontWeight="bold">
              "โกะโจ"
            </Typography>
          </div>
          <div className="border-b flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              onClick={() => setFilter(Filter.RELEVANCE)}
              className={cn(
                'px-0 text-light font-thin',
                filter === Filter.RELEVANCE && 'text-white'
              )}
            >
              Relevance
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setFilter(filter === Filter.PRICE_LESS ? Filter.PRICE_MORE : Filter.PRICE_LESS)
              }}
              className={cn(
                'px-0 font-thin text-light flex items-center',
                (filter === Filter.PRICE_LESS || filter === Filter.PRICE_MORE) && 'text-white'
              )}
            >
              {filter === Filter.PRICE_LESS || filter === Filter.PRICE_MORE ? (
                {
                  [Filter.PRICE_LESS]: <ArrowUp className="h-4" />,
                  [Filter.PRICE_MORE]: <ArrowDown className="h-4" />,
                }[filter]
              ) : (
                <CaretUpDown className="h-4" />
              )}
              Price
            </Button>
            <Button
              variant="ghost"
              onClick={() => setFilter(Filter.LATEST)}
              className={cn('px-0 text-light font-thin', filter === Filter.LATEST && 'text-white')}
            >
              Latest
            </Button>
            <Button
              variant="ghost"
              onClick={() => setFilter(Filter.SCORE)}
              className={cn('px-0 text-light font-thin', filter === Filter.SCORE && 'text-white')}
            >
              Score
            </Button>
            <Button
              variant="ghost"
              onClick={() => setShowFilterModal(true)}
              className={cn('px-0 text-light font-thin lg:hidden md:hidden')}
            >
              <Funnel className="text-xl" />
            </Button>
          </div>
          <div className="py-4">
            <div className="grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-3">
              {mockData.map((item, index) => (
                <SmallCard key={index} name={item.name} rating={item.rating} price={item.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
