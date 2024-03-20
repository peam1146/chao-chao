'use client'

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
import { ListDashes } from '@phosphor-icons/react'

import ContractsCard from './ContractsCard'

// import { useQuery } from '../../../../../gqty'

export default function MyContracts() {
  // const { Items } = useQuery({ fetchPolicy: 'cache-first' })

  // const items = Items({
  //   draft: false,
  //   limit: 30,
  //   where: {
  //     name: {
  //       contains: search,
  //     },
  //     createdBy: {
  //       equals: 1,
  //     },
  //   },
  // })

  return (
    <div className="flex flex-col w-full gap-y-4">
      <div className="flex justify-between">
        <div className="flex my-auto gap-x-1">
          <ListDashes size={24} />
          <Typography variant="h4" fontWeight="bold">
            My contracts
          </Typography>
        </div>
      </div>
      <div>
        <Tabs defaultValue="negotiating" className="w-full">
          <TabsList className="w-full max-lg:no-scrollbar max-lg:overflow-x-scroll justify-start">
            <TabsTrigger value="negotiating" className="lg:w-1/3 w-[153px]">
              Negotiating
            </TabsTrigger>
            <TabsTrigger value="renting" className="lg:w-1/3 w-[153px]">
              Renting
            </TabsTrigger>
            <TabsTrigger value="beingRented" className="lg:w-1/3 w-[153px]">
              Being Rented
            </TabsTrigger>
          </TabsList>
          <TabsContent value="negotiating">
            <div className="flex flex-col gap-4">
              <ContractsCard name="จักรยานแพะภูเขา1" price={20} periodType="day" status="renting" />
              <ContractsCard name="จักรยานแพะภูเขา2" price={20} periodType="day" status="renting" />
              <ContractsCard
                name="จักรยานแพะภูเขา3"
                price={20}
                periodType="day"
                status="beingRented"
              />
              {/* {items?.docs
                ?.filter((item) => item?.id !== undefined)
                .map((item) => {
                  return (
                    // <AssetsCard
                    //   key={item?.id}
                    //   name={item?.name ?? ''}
                    //   image={item?.image}
                    //   rating={item?.rating ?? 0}
                    //   price={item?.price ?? 0}
                    //   periodType={item?.periodType ?? 'days'}
                    // />
                    <div>card จ้า</div>
                  )
                })} */}
            </div>
          </TabsContent>
          <TabsContent value="renting">
            <div className="flex flex-col gap-4">
              {/* {items?.docs
                ?.filter((item) => item?.id !== undefined && item.rentingStatus === 'unavailable')
                .map((item) => {
                  return (
                    // <AssetsCard
                    //   key={item?.id}
                    //   name={item?.name ?? ''}
                    //   image={item?.image}
                    //   rating={item?.rating ?? 0}
                    //   price={item?.price ?? 0}
                    //   periodType={item?.periodType ?? 'Days'}
                    // />
                    <div>card จ้า</div>
                  )
                })} */}
            </div>
          </TabsContent>
          <TabsContent value="beingRented">
            <div className="flex flex-col gap-4">
              {/* {items?.docs
                ?.filter((item) => item?.id !== undefined && item.rentingStatus === 'available')
                .map((item) => {
                  return (
                    // <AssetsCard
                    //   key={item?.id}
                    //   name={item?.name ?? ''}
                    //   image={item?.image}
                    //   rating={item?.rating ?? 0}
                    //   price={item?.price ?? 0}
                    //   periodType={item?.periodType ?? 'Days'}
                    // />
                    <div>card จ้า</div>
                  )
                })} */}
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
