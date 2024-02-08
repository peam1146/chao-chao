'use client'

import { useState } from 'react'

import mockPic2 from '@/assets/images/mockPic2.png'
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
import Image from 'next/image'

import TabContent from './TabContent'

export default function Reviews() {
  const [value, setValue] = useState<number | null>(2)

  const mockReview = [
    {
      id: 1,
      image: mockPic2,
      name: 'มายมุมุ หิวข้าว',
      date: '02/02/2024',
      rating: 4.0,
      detail: `สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                 สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ`,
    },
    {
      id: 2,
      image: mockPic2,
      name: 'มายมุมุ หิวข้าว',
      date: '02/02/2024',
      rating: 4,
      detail: `สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                 สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ`,
    },
    {
      id: 3,
      image: mockPic2,
      name: 'มายมุมุ หิวข้าว',
      date: '02/02/2024',
      rating: 4,
      detail: `สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                 สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ`,
    },
    ,
    {
      id: 4,
      image: mockPic2,
      name: 'มายมุมุ หิวข้าว',
      date: '02/02/2024',
      rating: 4,
      detail: `สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                 สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ`,
    },
    ,
    {
      id: 5,
      image: mockPic2,
      name: 'มายมุมุ หิวข้าว',
      date: '02/02/2024',
      rating: 4,
      detail: `สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                 สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ`,
    },
  ]

  return (
    <div className="flex flex-col gap-y-4 p-6 bg-card rounded-2xl">
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
          <Rating name="read-only" value={4} readOnly className="mx-auto" />
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="all" className="w-1/6">
              All
            </TabsTrigger>
            <TabsTrigger value="star5" className="w-1/6">
              5 stars
            </TabsTrigger>
            <TabsTrigger value="star4" className="w-1/6">
              4 stars
            </TabsTrigger>
            <TabsTrigger value="star3" className="w-1/6">
              3 stars
            </TabsTrigger>
            <TabsTrigger value="star2" className="w-1/6">
              2 stars
            </TabsTrigger>
            <TabsTrigger value="star1" className="w-1/6">
              1 star
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="flex flex-col gap-y-4">
              {mockReview.map((review) => (
                <div className="flex flex-col gap-y-4" key={review.id}>
                  <div className="flex flex-row gap-x-2">
                    <Image
                      src={mockPic2}
                      alt="Profile Picture"
                      width={50}
                      height={50}
                      className="rounded-full h-[50px]"
                    />
                    <div className="flex flex-col gap-y-2">
                      <div>
                        <div className="flex gap-x-2">
                          <Typography variant="h6">{review.name}</Typography>
                          <Typography variant="tiny" className="text-light">
                            {review.date}
                          </Typography>
                        </div>
                        <Typography variant="tiny" className="text-light flex">
                          <Rating name="read-only" size="small" value={review.rating} readOnly />
                          {review.rating.toFixed(1)}
                        </Typography>
                      </div>
                      <Typography variant="h6">{review.detail}</Typography>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="star5"></TabsContent>
          <TabsContent value="star4">{/* <TabContent reviews={mockReview} /> */}</TabsContent>
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
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
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
