'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { Clock, Paperclip } from '@phosphor-icons/react'
import Image from 'next/image'

import { Renting } from '../../../../../gqty'

interface RentingContractsCardProps {
  request: Renting
  status: 'renting' | 'beingRented'
}

export default function RentingContractsCard({ request, status }: RentingContractsCardProps) {
  const dayjs = require('dayjs')

  return (
    <div className="flex max-lg:flex-col items-center h-fit bg-card rounded-2xl px-4 py-2 gap-4 border lg:border-2 border-transparent">
      <div className="flex flex-1 gap-3">
        <div className="flex lg:h-[130px] lg:w-[130px] h-[100px] w-[100px]  my-auto">
          <Image
            src={request?.rentedTo?.item?.image?.at(0)?.url ?? ''}
            alt="picture"
            className="object-contain rounded-lg"
            width={120}
            height={120}
          />
        </div>

        <div className="flex flex-col flex-1 gap-1 max-xl:hidden">
          <div className="flex">
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h5" className="line-clamp-1">
                {request?.rentedTo?.item?.name}
              </Typography>
            </Button>
            <div className="flex-1" />
            <div className="flex gap-1.5">
              <Clock size={16} />
              <Typography variant="h6">
                {Math.ceil(dayjs(request?.endDate).diff(dayjs()) / (1000 * 60 * 60 * 24))}d left
              </Typography>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              {status === 'beingRented' ? 'Request from:' : 'Asset from:'}
            </Typography>
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h6">
                {status === 'beingRented'
                  ? request?.rentedBy?.user?.firstName
                  : request?.rentedTo?.user?.firstName}
              </Typography>
            </Button>
          </div>
          <div className="flex 2xl:gap-8 ">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" className="text-light">
                Date:
              </Typography>
              <Typography variant="h6">
                {' '}
                {dayjs(request?.startDate).format('DD/MM/YY')} -{' '}
                {dayjs(request?.endDate).format('DD/MM/YY')}
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Rental fee:
              </Typography>
              <Typography variant="h6">฿{request?.rentalFee}</Typography>
            </div>
          </div>
          <div className="flex 2xl:gap-8">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" className="text-light">
                Insurance fee:
              </Typography>
              <Typography variant="h6">฿{request?.insuranceFee}</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Delivery fee:
              </Typography>
              <Typography variant="h6">฿{request?.deliveryFee}</Typography>
            </div>
          </div>
          <div className="flex 2xl:gap-8">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" className="text-light">
                Total fee:
              </Typography>
              <Typography variant="h6">
                ฿
                {(request?.rentalFee ?? 0) +
                  (request?.insuranceFee ?? 0) +
                  (request?.deliveryFee ?? 0)}
              </Typography>
            </div>
            <div className="flex gap-1">
              <Badge
                variant="outline"
                size="md"
                className="px-3 py-1 gap-1 border-muted-foreground"
              >
                <Paperclip size={16} />
                <a href={request?.file?.url ?? ''} target="_blank" rel="noopener noreferrer">
                  <Typography
                    variant="h6"
                    fontWeight="regular"
                    className="text-secondary hover:underline hover:underline-offset-1 cursor-pointer line-clamp-1"
                  >
                    {request?.file?.filename}
                  </Typography>
                </a>
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-1 xl:hidden ">
          <div className="flex">
            <Button variant="link" className="p-0 w-[100px] justify-start h-fit">
              <Typography variant="h5" className="truncate">
                {request?.rentedTo?.item?.name}
              </Typography>
            </Button>
            <div className="flex-1" />
            <div className="flex gap-1.5">
              <Clock size={16} />
              <Typography variant="h6">
                {Math.ceil(dayjs(request?.endDate).diff(dayjs()) / (1000 * 60 * 60 * 24))}d left
              </Typography>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              {status === 'beingRented' ? 'Request from:' : 'Asset from:'}
            </Typography>
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h6" className="text-primary">
                {status === 'beingRented'
                  ? request?.rentedBy?.user?.firstName
                  : request?.rentedTo?.user?.firstName}
              </Typography>
            </Button>
          </div>
          <div className="flex gap-0.5">
            <Typography variant="h6" className="text-light">
              Date:
            </Typography>
            <Typography variant="h6">
              {' '}
              {dayjs(request?.startDate).format('DD/MM/YY')} -{' '}
              {dayjs(request?.endDate).format('DD/MM/YY')}
            </Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Rental fee:
            </Typography>
            <Typography variant="h6">฿{request?.rentalFee}</Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Insurance fee:
            </Typography>
            <Typography variant="h6">฿{request?.insuranceFee}</Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Delivery fee:
            </Typography>
            <Typography variant="h6">฿{request?.deliveryFee}</Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" className="text-light">
              Total fee:
            </Typography>
            <Typography variant="h6">
              {' '}
              ฿
              {(request?.rentalFee ?? 0) +
                (request?.insuranceFee ?? 0) +
                (request?.deliveryFee ?? 0)}
            </Typography>
          </div>
          <div className="flex gap-1">
            <Badge variant="outline" size="md" className="px-3 py-1 gap-1 border-muted-foreground">
              <Paperclip size={16} />
              <a href={request?.file?.url ?? ''} target="_blank" rel="noopener noreferrer">
                <Typography
                  variant="h6"
                  fontWeight="regular"
                  className="text-secondary hover:underline hover:underline-offset-1 cursor-pointer line-clamp-1"
                >
                  {request?.file?.filename}
                </Typography>
              </a>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
