'use client'

import { Badge } from '@/components/ui/badge'
import Typography from '@/components/ui/typography'
import { Lightning } from '@phosphor-icons/react'
import Image from 'next/image'

// import RecommendBadge from './recommend-badge'
export default function SmallCard() {
  return (
    <div className="flex flex-col w-[332px] p-4">
      <div className="relative">
        <Badge className="absolute py-1 px-3 flex flex-row gap-1">
          <Lightning size={16} weight="fill" className="text-white" />
          <Typography fontWeight="regular">Recommend</Typography>
        </Badge>
        <div>
          <Image src="/samsung.svg" alt="product picture" width={300} height={300}></Image>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start">
        <div className="gap-2">
          <Typography variant="h4" fontWeight="bold">
            Samsung s30 ultra
          </Typography>
          <div className="text-h6 ">rating</div>
        </div>
        <Typography variant="h4" fontWeight="regular">
          500฿/วัน
        </Typography>
      </div>
    </div>
  )
}
