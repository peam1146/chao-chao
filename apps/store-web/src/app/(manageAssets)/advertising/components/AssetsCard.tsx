'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Typography from '@/components/ui/typography'
import { Rating } from '@mui/material'
import { DotsThreeVertical, PencilSimple, Trash } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { Maybe, Media, resolve } from '../../../../../gqty'

export default function AssetsCard({
  id,
  name,
  image,
  rating,
  price,
  periodType,
}: {
  id: number
  name: string
  image?: Maybe<Media[]>
  rating: number
  price: number
  periodType: string
}) {
  async function handleDelete() {
    try {
      await resolve(async ({ mutation }) => {
        const asset = mutation.deleteItem({
          id: id,
        })
        return asset
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Button className="flex flex-col items-start h-fit w-full bg-card rounded-2xl p-4 gap-2 border lg:border-2 border-transparent hover:border-primary hover:border-opacity-100">
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
