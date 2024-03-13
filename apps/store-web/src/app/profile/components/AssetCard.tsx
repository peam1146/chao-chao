'use client'

import sumsung from '@/assets/images/sumsung.svg'
import { Badge } from '@/components/ui/badge'
import Typography from '@/components/ui/typography'
import { Rating } from '@mui/material'
import { Lightning } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

interface AssetCardProps {
  name: string
  rating: number
  price: number
  isPromoted?: boolean
}

export function AssetCard(props: AssetCardProps) {
  const { name, rating, price, isPromoted = true } = props
  return (
    <Link href="/detail/1" className="w-full">
      <div className="flex flex-col w-full bg-card rounded-lg p-4 lg:gap-4 gap-2 hover:border-primary border ">
        <div className="relative mx-auto">
          {isPromoted && (
            <Badge className="absolute font-normal -left-2" size="sm">
              <Lightning size={16} weight="fill" className="text-white font-" />
              Recommend
            </Badge>
          )}
          <div className="flex aspect-auto w-[132px] h-[132px] justify-center">
            <Image src={sumsung} alt=" picture" width={0} height={0} />
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:gap-4 w-fit items-start">
          <div className="lg:gap-2 gap-1">
            <Typography variant="tiny" fontWeight="bold" className="line-clamp-1">
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
              <Typography variant="tiny" className="text-light">
                {rating.toFixed(1)}
              </Typography>
            </div>
          </div>
          <Typography variant="h6">{price}฿/วัน</Typography>
        </div>
      </div>
    </Link>
  )
}
