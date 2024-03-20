'use client'

import mockPic from '@/assets/images/mockPic.png'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { Clock, Paperclip } from '@phosphor-icons/react'
import Image from 'next/image'

import { Maybe, Media } from '../../../../../gqty'

export default function RentingContractsCard({
  name,
  image,
  price,
  periodType,
  status,
}: {
  name: string
  image?: Maybe<Media>
  price: number
  periodType: string
  status: string
}) {
  return (
    <div className="flex max-lg:flex-col items-center h-fit bg-card rounded-2xl px-4 py-2 gap-4 border lg:border-2 border-transparent">
      <div className="flex flex-1 gap-3">
        <div className="flex h-[130px] w-[130px] my-auto">
          {/* {image && <Image src={mockPic} alt="picture" className="object-contain rounded-lg" />} */}
          <Image src={mockPic} alt="picture" className="object-contain rounded-lg" />
        </div>

        <div className="flex flex-col flex-1 gap-1 max-xl:hidden">
          <div className="flex">
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h5">{name}</Typography>
            </Button>
            <div className="flex-1" />
            <div className="flex gap-1.5">
              <Clock size={16} />
              <Typography variant="h6">2d left</Typography>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              {status === 'beingRented' ? 'Request from:' : 'Asset from:'}
            </Typography>
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h6">มาย มุมุ</Typography>
            </Button>
          </div>
          <div className="flex 2xl:gap-8 ">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" className="text-light">
                Date:
              </Typography>
              <Typography variant="h6">18/03/67 - 20/03/67</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Rental fee:
              </Typography>
              <Typography variant="h6">
                ฿60 (฿{price}/{periodType})
              </Typography>
            </div>
          </div>
          <div className="flex 2xl:gap-8">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" className="text-light">
                Insurance fee:
              </Typography>
              <Typography variant="h6">฿1000</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Delivery fee:
              </Typography>
              <Typography variant="h6">-</Typography>
            </div>
          </div>
          <div className="flex 2xl:gap-8">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" className="text-light">
                Total fee:
              </Typography>
              <Typography variant="h6">฿1060</Typography>
            </div>
            <div className="flex gap-1">
              <Badge
                variant="outline"
                size="md"
                className="px-3 py-1 gap-1 border-muted-foreground"
              >
                <Paperclip size={16} />
                <Typography variant="h6" className="text-secondary">
                  สัญญาเช่า.pdf
                </Typography>
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-1 xl:hidden ">
          <Button variant="link" className="p-0 w-fit h-fit">
            <Typography variant="h5">{name}</Typography>
          </Button>
          <hr className="w-full" />
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              {status === 'beingRented' ? 'Request from:' : 'Asset from:'}
            </Typography>
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h6" className="text-primary">
                มาย มุมุ
              </Typography>
            </Button>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Date:
            </Typography>
            <Typography variant="h6">18/03/67 - 20/03/67</Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Rental fee:
            </Typography>
            <Typography variant="h6">
              ฿60 (฿{price}/{periodType})
            </Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Insurance fee:
            </Typography>
            <Typography variant="h6">฿1000</Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Delivery fee:
            </Typography>
            <Typography variant="h6">-</Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Total fee:
            </Typography>
            <Typography variant="h6">฿1060</Typography>
          </div>
          <div className="flex gap-1">
            <Badge variant="outline" size="md" className="px-3 py-1 gap-1 border-muted-foreground">
              <Paperclip size={16} />
              <Typography variant="h6" fontWeight="regular" className="text-secondary">
                สัญญาเช่า.pdf
              </Typography>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
