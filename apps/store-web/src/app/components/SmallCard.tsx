'use client'

import sumsung from '@/assets/images/sumsung.svg'
import { Badge } from '@/components/ui/badge'
import Typography from '@/components/ui/typography'
import { Rating } from '@mui/material'
import { Lightning } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { Maybe, Media } from '../../../gqty'

export default function SmallCard({
  name,
  rating,
  price,
  image,
}: {
  name: string
  rating: number
  price: number
  image?: Maybe<Media[]>
}) {
  return (
    <Link href="/detail/1">
      <div className="flex flex-col max-w-[350px] w-full bg-card rounded-lg p-4 lg:gap-4 gap-2 hover:border-primary border-background border-2">
        <div className="relative">
          <Badge className="absolute py-1 px-3 flex flex-row gap-1">
            <Lightning size={16} weight="fill" className="text-white" />
            <Typography fontWeight="regular" className="max-md:hidden">
              Recommend
            </Typography>
          </Badge>
          <div className="flex w-full h-[240px] justify-center">
            {image && (
              <Image
                src={image?.[0]?.url ?? ''}
                width={image?.[0]?.width ?? 0}
                height={image?.[0]?.height ?? 0}
                alt="picture"
                className="object-contain rounded-lg"
              />
            )}
            {!image && <Image src={sumsung} alt="picture" width={0} height={0} />}
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:gap-4 w-fit items-start">
          <div className="lg:gap-2 gap-1">
            <Typography variant="h6" fontWeight="bold" className="lg:h4 line-clamp-1">
              {name}
            </Typography>
            <div className="flex flex-row gap-0.5 items-center">
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
                size="small"
              />
              <Typography variant="h6" className="text-light">
                {rating.toFixed(1)}
              </Typography>
            </div>
          </div>
          <Typography variant="h6" className="lg:h4">
            {price}฿/วัน
          </Typography>
        </div>
      </div>
    </Link>
  )
}
