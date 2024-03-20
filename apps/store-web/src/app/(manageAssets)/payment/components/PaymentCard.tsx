'use client'

import React, { PropsWithChildren } from 'react'

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { Clock, Warning } from '@phosphor-icons/react'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'

export type PaymentCardContainerProps = {
  title: string
  assetFrom: string
  thumbnail: string
  startDate: Date
  endDate: Date
  insuranceFee: number
  rentalFee: number
  deliveryFee: number
  totalFee: number
  variant?: 'expenses' | 'receivable'
}

export type ExpensesCardButtonProps = {
  dueDate: Date
}

export type ReceivableCardProps = {
  dueDate: Date
}

export function PaymentCardContainer(props: PaymentCardContainerProps) {
  const {
    title,
    assetFrom,
    thumbnail,
    startDate,
    endDate,
    insuranceFee,
    deliveryFee,
    rentalFee,
    totalFee,
    variant = 'expenses',
  } = props

  const startDateText = `${startDate.getDate()}/${startDate.toLocaleString('default', {
    month: '2-digit',
    year: '2-digit',
  })}`

  const endDateText = `${endDate.getDate()}/${endDate.toLocaleString('default', {
    month: '2-digit',
    year: '2-digit',
  })}`

  const daysDiff = Math.round((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))
  const assetFromLabel = variant === 'receivable' ? 'Request from:' : 'Asset from:'
  return (
    <div className="flex gap-3 w-full pt-2 pb-2 ">
      <Image src={thumbnail} alt="thumbnail" className="w-[100px] h-[100px]" />
      <div className="flex flex-col gap-1 w-full">
        <Button variant="link" className="p-0 w-fit h-fit">
          <Typography variant="h5">{title}</Typography>
        </Button>
        <Separator orientation="horizontal" className="border-b border-border" />
        <div className="flex flex-col gap-1">
          <div className="flex xl:flex-row flex-col xl:gap-8 gap-1">
            <div className="flex w-[180px] gap-1">
              <Typography variant="h6" className="text-light">
                {assetFromLabel}
              </Typography>
              <Button variant="link" className="p-0 w-fit h-fit">
                <Typography variant="h6">{assetFrom}</Typography>
              </Button>
            </div>
            <div className="flex max-xl:flex-col xl:flex-row max-xl:gap-1 xl:gap-8">
              <div className="flex gap-1">
                <Typography variant="h6" className="text-light">
                  Date:
                </Typography>
                <Typography variant="h6">{`${startDateText} - ${endDateText}`}</Typography>
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col xl:gap-8 gap-1">
            <div className="flex w-[180px] gap-1">
              <Typography variant="h6" className="text-light">
                Insurance fee:
              </Typography>
              <Typography variant="h6">{`฿${insuranceFee}`}</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Delivery fee:
              </Typography>
              <Typography variant="h6">{`฿${deliveryFee}`}</Typography>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col xl:gap-8 gap-1">
            <div className="flex w-[180px] gap-1">
              <Typography variant="h6" className="text-light">
                Rental fee:
              </Typography>
              <Typography variant="h6">
                {`฿${rentalFee} (฿${
                  Math.round((rentalFee / daysDiff + Number.EPSILON) * 100) / 100
                }/day)`}
              </Typography>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1">
                <Typography variant="h6" className="text-light">
                  Total fee:
                </Typography>
                <Typography variant="h6">{`฿${totalFee}`}</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ExpensesCardButton(props: ExpensesCardButtonProps) {
  const { dueDate } = props
  const dueDateText = `${dueDate.getDate()}/${dueDate.toLocaleString('default', {
    month: '2-digit',
    year: '2-digit',
  })}`
  const daysLeft = Math.round((dueDate.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000))
  return (
    <div className="max-xl:w-full xl:w-[180px]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-3">
        <div className="flex flex-col gap-1 items-center">
          <div className="flex gap-2">
            <Clock size={16} className="self-center" />
            <Typography variant="h6">{`${daysLeft}d left`}</Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="tiny">Due date:</Typography>
            <Typography variant="tiny">{dueDateText}</Typography>
          </div>
        </div>
        <Button variant="default" className="flex gap-2 w-full">
          <Typography>Pay Now</Typography>
        </Button>
      </div>
    </div>
  )
}

export function ExpensesCardOverDueButton() {
  return (
    <div className="max-xl:w-full xl:w-[180px]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-1">
        <div className="flex xl:flex-col flex-row items-center">
          <div className="flex gap-2">
            <Warning size={16} className="text-unavailable self-center" />
            <Typography variant="h6" className="text-unavailable">
              Payment Late
            </Typography>
          </div>
        </div>
        <div className="flex xl:flex-col flex-row xl:gap-2 gap-3 w-full">
          <Button variant="default" className="flex gap-2 w-full">
            <Typography>Rent again</Typography>
          </Button>
          <Button variant="outline" className="flex gap-2 w-full">
            <Typography>Close</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function PaymentCard(props: PropsWithChildren) {
  return (
    <div className="flex max-xl:flex-col xl:flex-row px-3 py-2 max-xl:gap-2 xl:gap-4 rounded-xl bg-card">
      {props.children}
    </div>
  )
}

export function ReceivablesCardButton(props: ReceivableCardProps) {
  const { dueDate } = props
  const dueDateText = `${dueDate.getDate()}/${dueDate.toLocaleString('default', {
    month: '2-digit',
    year: '2-digit',
  })}`
  const daysLeft = Math.round((dueDate.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000))
  return (
    <div className="max-xl:w-full xl:w-[180px]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-3">
        <div className="flex flex-col gap-1 items-center">
          <div className="flex gap-2">
            <Clock size={16} className="self-center" />
            <Typography variant="h6">{`${daysLeft}d left`}</Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="tiny">Due date:</Typography>
            <Typography variant="tiny">{dueDateText}</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ReceivableCardOverDueButton() {
  return (
    <div className="max-xl:w-full xl:w-[180px]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-1">
        <div className="flex xl:flex-col flex-row items-center">
          <div className="flex gap-2">
            <Warning size={16} className="text-unavailable self-center" />
            <Typography variant="h6" className="text-unavailable">
              Payment Late
            </Typography>
          </div>
        </div>
        <div className="flex xl:flex-col flex-row xl:gap-2 gap-3 w-full">
          <Button variant="outline" className="flex gap-2 w-full">
            <Typography>Close</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}
