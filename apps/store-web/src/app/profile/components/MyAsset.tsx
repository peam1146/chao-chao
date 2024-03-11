'use client'

import { useState } from 'react'

import SmallCard from '@/app/components/small-card'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp, CaretUpDown } from '@phosphor-icons/react'

enum Filter {
  RELEVANCE = 'RELEVANCE',
  PRICE_LESS = 'PRICE_LESS',
  PRICE_MORE = 'PRICE_MORE',
  LATEST = 'LATEST',
  SCORE = 'SCORE',
}

const mockData = [
  { name: 'Samsung Galaxy S21 Ultra 5G', rating: 4.0, price: 100 },
  { name: 'Jujutsu kaisen Vol.4', rating: 4.0, price: 500 },
  { name: 'Iphone 13 Pro Max', rating: 3.0, price: 20 },
  { name: 'Macbook Pro 2021', rating: 2.0, price: 10 },
  { name: 'Samsung Galaxy S21 Ultra 5G', rating: 4.0, price: 100 },
  { name: 'Jujutsu kaisen Vol.4', rating: 4.0, price: 500 },
]

export function MyAsset() {
  const [filter, setFilter] = useState<Filter>(Filter.RELEVANCE)
  return (
    <div>
      <div className="flex items-center justify-between border-b">
        <Typography variant="h4" fontWeight="bold">
          Assets
        </Typography>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => setFilter(Filter.RELEVANCE)}
            className={cn(
              'px-0 hover:bg-transparent text-light',
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
              'px-0 text-light flex items-center hover:bg-transparent',
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
            className={cn(
              'px-0 text-light hover:bg-transparent',
              filter === Filter.LATEST && 'text-white'
            )}
          >
            Latest
          </Button>
          <Button
            variant="ghost"
            onClick={() => setFilter(Filter.SCORE)}
            className={cn(
              'px-0 text-light hover:bg-transparent',
              filter === Filter.SCORE && 'text-white'
            )}
          >
            Score
          </Button>
        </div>
      </div>
      <div className="py-4">
        <div className="grid grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-3">
          {mockData.map((item, index) => (
            <SmallCard key={index} name={item.name} rating={item.rating} price={item.price} />
          ))}
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink isActive>1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
