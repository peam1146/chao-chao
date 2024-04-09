'use client'

import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { useUserToken } from '@/providers/User'
import { Plus, Tray } from '@phosphor-icons/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { useQuery } from '../../../../../gqty'
import AssetsCard from './AssetsCard'
import SearchMyAssets from './SearchMyAssets'

export default function MyAssets() {
  const query = useQuery({ fetchPolicy: 'cache-and-network' })

  const searchParams = useSearchParams()
  const search = searchParams.get('search') ? searchParams.get('search') : undefined

  const { userId } = useUserToken()

  const items = query.Items({
    draft: false,
    where: {
      name: {
        contains: search,
      },
      createdBy: {
        equals: userId === '' ? undefined : userId,
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
            {query.$state.isLoading && (
              <div className="flex justify-center">
                <Spinner className="self-center" />
              </div>
            )}
            {items?.docs?.length === 0 && <div className="flex justify-center">No item found</div>}
            <div className="grid grid-cols-2 2xl:grid-cols-5 lg:grid-cols-3 grid-s-3 gap-3">
              {items?.docs
                ?.filter((item) => item?.id !== undefined)
                .map((item) => {
                  return (
                    <AssetsCard
                      key={item?.id}
                      id={Number(item?.id)}
                      name={item?.name ?? ''}
                      image={item?.image}
                      rating={item?.rating ?? 0}
                      price={item?.price ?? 0}
                      periodType={item?.periodType ?? 'days'}
                      refetch={query.$refetch}
                    />
                  )
                })}
            </div>
          </TabsContent>
          <TabsContent value="beingRented">
            {query.$state.isLoading && (
              <div className="flex justify-center">
                <Spinner className="self-center" />
              </div>
            )}
            {items?.docs?.filter(
              (item) => item?.id !== undefined && item.rentingStatus === 'unavailable'
            ).length === 0 && <div className="flex justify-center">No item found</div>}
            <div className="grid grid-cols-2 2xl:grid-cols-5 lg:grid-cols-3 grid-s-3 gap-3">
              {items?.docs
                ?.filter((item) => item?.id !== undefined && item.rentingStatus === 'unavailable')
                .map((item) => {
                  return (
                    <AssetsCard
                      key={item?.id}
                      id={Number(item?.id)}
                      name={item?.name ?? ''}
                      image={item?.image}
                      rating={item?.rating ?? 0}
                      price={item?.price ?? 0}
                      periodType={item?.periodType ?? 'Days'}
                      refetch={query.$refetch}
                    />
                  )
                })}
            </div>
          </TabsContent>
          <TabsContent value="available">
            {query.$state.isLoading && (
              <div className="flex justify-center">
                <Spinner className="self-center" />
              </div>
            )}
            {items?.docs?.filter(
              (item) =>
                item?.id !== undefined &&
                (item.rentingStatus === 'available' || item.rentingStatus === 'negotiating')
            ).length === 0 && <div className="flex justify-center">No item found</div>}
            <div className="grid grid-cols-2 2xl:grid-cols-5 lg:grid-cols-3 grid-s-3 gap-3">
              {items?.docs
                ?.filter(
                  (item) =>
                    item?.id !== undefined &&
                    (item.rentingStatus === 'available' || item.rentingStatus === 'negotiating')
                )
                .map((item) => {
                  return (
                    <AssetsCard
                      key={item?.id}
                      id={Number(item?.id)}
                      name={item?.name ?? ''}
                      image={item?.image}
                      rating={item?.rating ?? 0}
                      price={item?.price ?? 0}
                      periodType={item?.periodType ?? 'Days'}
                      refetch={query.$refetch}
                    />
                  )
                })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
