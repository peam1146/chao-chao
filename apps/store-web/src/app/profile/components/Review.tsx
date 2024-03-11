'use client'

import { useState } from 'react'

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
import { Rating } from '@mui/material'

export function Review() {
  const [value, setValue] = useState<number | null>(2)

  return (
    <div className="flex flex-col gap-y-4 p-6 bg-card rounded-2xl w-full">
      <Typography variant="h4" fontWeight="bold">
        Reviews
      </Typography>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Typography variant="h3" fontWeight="bold">
              {(4).toFixed(1)}
            </Typography>
            <Typography variant="h5" className="text-light my-auto">
              /5
            </Typography>
          </div>
          <Rating
            name="read-only"
            value={4}
            readOnly
            className="mx-auto"
            sx={{
              '& .MuiRating-iconEmpty': {
                color: '#999999',
              },
            }}
          />
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-lg:no-scrollbar max-lg:overflow-x-scroll justify-start">
            <TabsTrigger value="all" className="lg:w-1/6">
              All
            </TabsTrigger>
            <TabsTrigger value="star5" className="lg:w-1/6">
              5 stars
            </TabsTrigger>
            <TabsTrigger value="star4" className="lg:w-1/6">
              4 stars
            </TabsTrigger>
            <TabsTrigger value="star3" className="lg:w-1/6">
              3 stars
            </TabsTrigger>
            <TabsTrigger value="star2" className="lg:w-1/6">
              2 stars
            </TabsTrigger>
            <TabsTrigger value="star1" className="lg:w-1/6">
              1 star
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all"></TabsContent>
          <TabsContent value="star5"></TabsContent>
          <TabsContent value="star4"></TabsContent>
          <TabsContent value="star3"></TabsContent>
          <TabsContent value="star2"></TabsContent>
          <TabsContent value="star1"></TabsContent>
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
