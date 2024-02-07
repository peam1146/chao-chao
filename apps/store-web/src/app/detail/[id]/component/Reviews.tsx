'use client'

import { useState } from 'react'

import mockPic2 from '@/assets/images/mockPic2.png'
import { Tab, TabContent, TabList, TabTrigger } from '@/components/ui/tab'
import Typography from '@/components/ui/typography'
import { Rating } from '@mui/material'
import Image from 'next/image'

export default function Reviews() {
  const [value, setValue] = useState<number | null>(2)

  const mockReview = [
    {
      image: mockPic2,
      name: 'มายมุมุ หิวข้าว',
      date: '02/02/2024',
      rating: 4,
      detail: `สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                 สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ 
                สินค้าแพคดีไม่เสียหาย สินค้าจัดส่งรวดเร็วมากๆๆ สินค้าใช้งานได้ไม่เสียหาย  ขนาดพอดี แนะนำร้านนี้เลยค่ะรวดเร็วทันใช้ทันใจมากๆๆ`,
    },
    {
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
    <div className="flex flex-col gap-y-4">
      <Typography variant="h4" fontWeight="bold">
        Reviews
      </Typography>
      <div className="flex gap-x-4">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Typography variant="h3" fontWeight="bold">
              4.0
            </Typography>
            <Typography variant="h5" className="text-light my-auto">
              /5
            </Typography>
          </div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          />
        </div>
        <Tab defaultValue="all" className="w-full">
          <TabList className="w-full">
            <TabTrigger value="all" className="w-1/6">
              All
            </TabTrigger>
            <TabTrigger value="star5" className="w-1/6">
              5 stars
            </TabTrigger>
            <TabTrigger value="star4" className="w-1/6">
              4 stars
            </TabTrigger>
            <TabTrigger value="star3" className="w-1/6">
              3 stars
            </TabTrigger>
            <TabTrigger value="star2" className="w-1/6">
              2 stars
            </TabTrigger>
            <TabTrigger value="star1" className="w-1/6">
              1 star
            </TabTrigger>
          </TabList>
          <TabContent value="all"></TabContent>
          <TabContent value="star5"></TabContent>
          <TabContent value="star4"></TabContent>
          <TabContent value="star3"></TabContent>
          <TabContent value="star2"></TabContent>
          <TabContent value="star1"></TabContent>
        </Tab>
      </div>
      {mockReview.map((review) => (
        <div>
          <div className="flex flex-col">
            <Image
              src={mockPic2}
              alt="Lessor Picture"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      ))}
      <div></div>
    </div>
  )
}
