'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { ListDashes } from '@phosphor-icons/react'

import { BeingRentedContainer } from './BeingRentedContainer'
import { NegotiatingContainer } from './NegotiatingContainer'
import { RentingContainer } from './RentingContainer'

export default function ContractsContainer() {
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
            <TabsTrigger value="negotiating" className="lg:w-1/3 min-w-[153px]">
              Negotiating
            </TabsTrigger>
            <TabsTrigger value="renting" className="lg:w-1/3 min-w-[153px]">
              Renting
            </TabsTrigger>
            <TabsTrigger value="beingRented" className="lg:w-1/3 min-w-[153px]">
              Being Rented
            </TabsTrigger>
          </TabsList>
          <TabsContent value="negotiating">
            <div className="flex flex-col gap-4">
              <NegotiatingContainer />
            </div>
          </TabsContent>
          <TabsContent value="renting">
            <div className="flex flex-col gap-4">
              <RentingContainer />
            </div>
          </TabsContent>
          <TabsContent value="beingRented">
            <div className="flex flex-col gap-4">
              <BeingRentedContainer />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
