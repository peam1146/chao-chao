'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { Envelope } from '@phosphor-icons/react'
import dynamic from 'next/dynamic'

import RequestMadeContainer from './RequestMadeContainer'

const RequestReceivedContainer = dynamic(
  () => import('./RequestReceivedContainer').then((module) => module.default) as any,
  { ssr: false }
) as any

export function RentalRequestContainer() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex gap-1">
        <Envelope size={24} />
        <Typography variant="h4" fontWeight="bold">
          Rental Requests
        </Typography>
      </div>
      <div>
        <Tabs defaultValue="requestReceived" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="requestReceived" className="w-1/2">
              Request Received
            </TabsTrigger>
            <TabsTrigger value="requestMade" className="w-1/2">
              Request Made
            </TabsTrigger>
          </TabsList>
          <TabsContent value="requestReceived">
            <RequestReceivedContainer />
          </TabsContent>
          <TabsContent value="requestMade">
            <RequestMadeContainer />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
