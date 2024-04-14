'use client'

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Rating } from '@mui/material'
import Image from 'next/image'

import { Maybe, Media } from '../../../../../gqty'

export default function AssetsCard({
  selectedAsset,
  id,
  name,
  image,
  rating,
  price,
  periodType,
}: {
  selectedAsset: number | null
  id: number
  name: string
  image?: Maybe<Media[]>
  rating: number
  price: number
  periodType: string
}) {
  return (
    <Button
      className={cn(
        'flex flex-col items-start h-fit w-full bg-card rounded-2xl p-4 gap-2 border lg:border-2 border-transparent hover:border-primary hover:border-opacity-100',
        selectedAsset === id ? 'border-primary border-opacity-100' : ''
      )}
    >
      <div className="flex h-[142px] justify-center">
        {image && (
          <Image
            src={image?.[0]?.url ?? ''}
            width={image?.[0]?.width ?? 0}
            height={image?.[0]?.height ?? 0}
            alt="picture"
            className="object-contain rounded-lg"
          />
        )}
      </div>
      <div className="flex flex-col gap-1 w-fit items-start">
        <div className="lg:gap-2 gap-1">
          <Typography variant="tiny" fontWeight="bold" className="lg:h4 line-clamp-1 text-start">
            {name}
          </Typography>
          <div className="flex max-md:flex-col gap-0.5 ">
            <Rating
              name="read-only"
              value={rating}
              size="small"
              max={5}
              readOnly
              sx={{
                '& .MuiRating-iconEmpty': {
                  color: '#999999',
                },
              }}
            />
            <Typography variant="h5" className="text-light pt-0.5 ">
              {rating.toFixed(1)}
            </Typography>
          </div>
        </div>
        <Typography variant="h6">
          {price}฿/{periodType}
        </Typography>
      </div>
    </Button>
  )
}
