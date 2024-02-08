'use client'

import mockPic2 from '@/assets/images/mockPic2.png'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { Rating } from '@mui/material'
import { Chats, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Lessor({ name, rating }: { name: string; rating: number }) {
  return (
    <div className="flex justify-between px-6 py-5 bg-card rounded-2xl">
      <div className="flex flex-row gap-4 items-center">
        <div className="h-20 w-20 rounded-full relative">
          <Image
            src={mockPic2}
            alt="Lessor Picture"
            fill={true}
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>
          <div className="flex flex-row justify-center">
            <Rating name="read-only" value={rating} max={5} readOnly />
            <Typography variant="h6" className="text-light my-auto">
              {rating.toFixed(1)}
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button type="button" size="sm" className="gap-2">
          <Chats size={16} className="text-primary-foreground " />
          Chat
        </Button>

        <Button type="button" variant="secondary" size="sm" className="gap-2">
          <UserCircle size={16} className="text-secondary-foreground" />
          See Profile
        </Button>
      </div>
    </div>
  )
}
