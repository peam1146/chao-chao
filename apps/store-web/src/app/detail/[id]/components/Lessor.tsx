'use client'

import mockPic2 from '@/assets/images/mockPic2.png'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { Rating } from '@mui/material'
import { Chats, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Lessor({ name, rating }: { name: string; rating: number }) {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:justify-between px-6 py-5 bg-card rounded-2xl">
      <div className="flex flex-row gap-4 items-center">
        <Image
          src={mockPic2}
          alt="Lessor Picture"
          width={80}
          height={80}
          className="rounded-full"
        />

        <div className="flex flex-col gap-2">
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>
          <div className="flex flex-row justify-center">
            <Rating
              name="read-only"
              value={rating}
              max={5}
              readOnly
              sx={{
                '& .MuiRating-iconEmpty': {
                  color: '#999999',
                },
              }}
            />
            <Typography variant="h5" className="text-light pt-0.5">
              {rating.toFixed(1)}
            </Typography>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:flex lg:flew-row lg:flex-col gap-3 lg:justify-center">
        <Button type="button" size="sm" className="gap-2 max-lg:hidden">
          <Chats size={16} className="text-primary-foreground " />
          Chat
        </Button>
        <Button type="button" variant="secondary" size="sm" className="gap-2 max-lg:hidden">
          <UserCircle size={16} className="text-secondary-foreground" />
          See Profile
        </Button>

        <Button type="button" className="gap-2 lg:hidden">
          <Chats size={16} className="text-primary-foreground " />
          Chat
        </Button>
        <Button type="button" variant="secondary" className="gap-2 lg:hidden">
          <UserCircle size={16} className="text-secondary-foreground" />
          See Profile
        </Button>
      </div>
    </div>
  )
}
