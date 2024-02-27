'use client'

import TabContent from '@/app/detail/[id]/components/TabContent'
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

import AssetsCard from './assetsCard'
import SearchMyAssets from './searchMyAssets'

export default function MyAssets() {
  return (
    <div className="flex flex-col w-full gap-y-4">
      <div className="flex justify-between">
        <div className="flex my-auto gap-x-1">
          <Tray size={24} />
          <Typography variant="h4" fontWeight="bold">
            My Assets
          </Typography>
        </div>
        <Button className="gap-2">
          <Plus size={15} className="text-primary-foreground" />
          Add new asset
        </Button>
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
            <div className="grid grid-cols-2 lg:grid-cols-5 grid-s-3 gap-3">
              <AssetsCard name="Assets" rating={5} price={20} />
              <AssetsCard name="Assets" rating={5} price={20} />
              <AssetsCard name="Assets" rating={5} price={20} />
              <AssetsCard name="Assets" rating={5} price={20} />
              <AssetsCard name="Assets" rating={5} price={20} />
              <AssetsCard name="Assets" rating={5} price={20} />
            </div>
          </TabsContent>
          <TabsContent value="beingRented">
            <div className="grid"></div>
          </TabsContent>
          <div className="grid"></div>
          <TabsContent value="available"></TabsContent>
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
