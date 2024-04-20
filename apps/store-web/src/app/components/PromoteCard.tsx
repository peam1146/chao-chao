'use client'

import Typography from '@/components/ui/typography'
import { Rating } from '@mui/material'
import Image from 'next/image'

import { Maybe, Media } from '../../../gqty'

export function PromoteCard({
  name,
  description,
  rating,
  price,
  image,
}: {
  name: string
  description: string
  rating: number
  price: number
  image?: Maybe<Media[]>
}) {
  return (
    <main className="flex flex-col lg:flex-row w-full bg-card rounded-md items-start lg:items-center justify-center lg:gap-x-8 p-4 gap-2 ">
      <div className="flex lg:w-1/2 lg:h-[306px] justify-center">
        <Image
          src={image?.at(0)?.url ?? '/assets/images/placeholder.png'}
          alt="Product picture"
          width={0}
          height={0}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 lg:gap-8 gap-2">
        <div className="flex flex-col gap-2">
          <Typography variant="h5" fontWeight="bold" className="lg:h3">
            {name}
          </Typography>
          <div className="flex flex-row gap-0.5 ">
            <Rating
              name="read-only"
              value={4}
              max={5}
              readOnly
              sx={{
                '& .MuiRating-iconEmpty': {
                  color: '#999999',
                },
              }}
            />
            <Typography variant="h5" className="text-light pt-0.5">
              {rating}.0
            </Typography>
          </div>
          <Typography variant="h6" className="text-light">
            {description}
          </Typography>
        </div>
        <Typography variant="h5" className="lg:h4">
          {price}฿/วัน
        </Typography>
      </div>
    </main>
  )
}
