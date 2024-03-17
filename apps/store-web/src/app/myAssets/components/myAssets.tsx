'use client'

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { Plus, Tray } from '@phosphor-icons/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { useQuery } from '../../../../gqty'
import AssetsCard from './AssetsCard'
import SearchMyAssets from './SearchMyAssets'

export default function MyAssets() {
  const { Items } = useQuery({ fetchPolicy: 'cache-first' })

  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  const items = Items({
    draft: false,
    limit: 30,
    where: {
      name: {
        contains: search,
      },
      createdBy: {
        equals: 1,
      },
    },
  })

  return (
    <div className="flex flex-col w-full gap-y-4">
      <div className="flex justify-between">
        <div className="flex my-auto gap-x-1">
          <Tray size={24} />
          <Typography variant="h4" fontWeight="bold">
            My Assets
          </Typography>
        </div>
        <Link href="/asset/register">
          <Button className="gap-2">
            <Plus size={15} className="text-primary-foreground" />
            Add new asset
          </Button>
        </Link>
      </div>
      <SearchMyAssets />
      <div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="all" className="w-1/3">
              All
            </TabsTrigger>
            <TabsTrigger value="beingRented" className="w-1/3">
              Being Rented
            </TabsTrigger>
            <TabsTrigger value="available" className="w-1/3">
              Available
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-2 2xl:grid-cols-5 lg:grid-cols-3 grid-s-3 gap-3">
              {items?.docs
                ?.filter((item) => item?.id !== undefined)
                .map((item) => {
                  return (
                    <AssetsCard
                      key={item?.id}
                      name={item?.name ?? ''}
                      image={item?.image}
                      rating={item?.rating ?? 0}
                      price={item?.price ?? 0}
                      periodType={item?.periodType ?? 'days'}
                    />
                  )
                })}
            </div>
          </TabsContent>
          <TabsContent value="beingRented">
            <div className="grid grid-cols-2 2xl:grid-cols-5 lg:grid-cols-3 grid-s-3 gap-3">
              {items?.docs
                ?.filter((item) => item?.id !== undefined && item.rentingStatus === 'unavailable')
                .map((item) => {
                  return (
                    <AssetsCard
                      key={item?.id}
                      name={item?.name ?? ''}
                      image={item?.image}
                      rating={item?.rating ?? 0}
                      price={item?.price ?? 0}
                      periodType={item?.periodType ?? 'Days'}
                    />
                  )
                })}
            </div>
          </TabsContent>
          <TabsContent value="available">
            <div className="grid grid-cols-2 2xl:grid-cols-5 lg:grid-cols-3 grid-s-3 gap-3">
              {items?.docs
                ?.filter((item) => item?.id !== undefined && item.rentingStatus === 'available')
                .map((item) => {
                  return (
                    <AssetsCard
                      key={item?.id}
                      name={item?.name ?? ''}
                      image={item?.image}
                      rating={item?.rating ?? 0}
                      price={item?.price ?? 0}
                      periodType={item?.periodType ?? 'Days'}
                    />
                  )
                })}
            </div>
          </TabsContent>
        </Tabs>
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
