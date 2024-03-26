'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { UseQueryReturnValue } from '@gqty/react'
import { Check, Paperclip, PencilSimple, X } from '@phosphor-icons/react'
import Image from 'next/image'

import {
  GeneratedSchema,
  Maybe,
  Media,
  Renting,
  RentingUpdate_status_MutationInput,
  resolve,
} from '../../../../../gqty'
import { NegotiatingModal } from './NegotiatingModal'

type ContractCardprop = {
  title: String
  request: Maybe<Renting>
  userFrom: String
  startDate: String
  endDate: String
  image?: Maybe<Media>
  rentalFee: number
  insuranceFee?: number
  deliveryFee?: number
  status: string
  file?: Maybe<Media>
  query: UseQueryReturnValue<GeneratedSchema>
}
export default function NeigotiatingContractsCard(props: ContractCardprop) {
  const {
    title,
    image,
    userFrom,
    startDate,
    endDate,
    rentalFee,
    insuranceFee,
    deliveryFee,
    status,
    file,
    request,
    query,
  } = props

  const { toast } = useToast()

  const [isLoadingAccept, setIsLoadingAccept] = useState(false)

  async function onAccept() {
    setIsLoadingAccept(true)
    try {
      await resolve(
        async ({ mutation }) => {
          const update = mutation.updateRenting({
            id: Number(request?.id),
            data: {
              status: RentingUpdate_status_MutationInput.COMPLETED,
            },
          })
          return update
        },
        {
          cachePolicy: 'reload',
        }
      )
      toast({
        title: 'Success',
        description: 'You have accepted the contract.',
        success: true,
      })
      setIsLoadingAccept(false)
      query.$refetch()
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        error: true,
      })
      setIsLoadingAccept(false)
    }
  }

  const dayjs = require('dayjs')

  const [isOpen, setIsOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmitDecline(id: number) {
    setIsLoading(true)
    try {
      await resolve(
        async ({ mutation }) => {
          const request = mutation.deleteRenting({
            id: id,
          })
          return request
        },
        {
          cachePolicy: 'reload',
        }
      )
      toast({
        title: 'Success',
        description: 'Decline negotiating successfully',
        success: true,
      })
      setIsLoading(false)
      query.$refetch()
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        error: true,
      })
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="flex max-lg:flex-col items-center h-fit bg-card rounded-2xl px-4 py-2 gap-4 border lg:border-2 border-transparent">
        <div className="flex flex-1 gap-3">
          <div className="flex lg:h-[130px] lg:w-[130px] h-[120px] w-[120px] my-auto">
            <Image
              src={image?.url ?? ''}
              alt="picture"
              className="object-contain rounded-lg"
              width={120}
              height={120}
            />
          </div>
          <div className="flex flex-col flex-1 gap-1 max-xl:hidden">
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h5">{title}</Typography>
            </Button>
            <hr className="w-full" />
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                {status === 'beingRented' ? 'Request from:' : 'Asset from:'}
              </Typography>
              <Button variant="link" className="p-0 w-fit h-fit">
                <Typography variant="h6">{userFrom}</Typography>
              </Button>
            </div>
            <div className="flex 2xl:gap-8 ">
              <div className="flex gap-1 w-[180px]">
                <Typography variant="h6" className="text-light">
                  Date:
                </Typography>
                <Typography variant="h6">
                  {dayjs(startDate).format('DD/MM/YY')} - {dayjs(endDate).format('DD/MM/YY')}
                </Typography>
              </div>
              <div className="flex gap-1">
                <Typography variant="h6" className="text-light">
                  Rental fee:
                </Typography>
                <Typography variant="h6">฿{rentalFee}</Typography>
              </div>
            </div>
            <div className="flex 2xl:gap-8">
              <div className="flex gap-1 w-[180px]">
                <Typography variant="h6" className="text-light">
                  Insurance fee:
                </Typography>
                <Typography variant="h6">฿{insuranceFee}</Typography>
              </div>
              <div className="flex gap-1">
                <Typography variant="h6" className="text-light">
                  Delivery fee:
                </Typography>
                <Typography variant="h6">{deliveryFee}</Typography>
              </div>
            </div>
            <div className="flex 2xl:gap-8">
              <div className="flex gap-1 w-[180px]">
                <Typography variant="h6" className="text-light">
                  Total fee:
                </Typography>
                <Typography variant="h6">
                  ฿{(rentalFee ?? 0) + (insuranceFee ?? 0) + (deliveryFee ?? 0)}
                </Typography>
              </div>
              <div className="flex gap-1">
                <Badge
                  variant="outline"
                  size="md"
                  className="px-3 py-1 gap-1 border-muted-foreground"
                >
                  <Paperclip size={16} className="flex-none" />
                  <a href={file?.url ?? ''} target="_blank" rel="noopener noreferrer">
                    <Typography
                      variant="h6"
                      fontWeight="regular"
                      className="text-secondary hover:underline hover:underline-offset-1 cursor-pointer line-clamp-1"
                    >
                      {file?.filename}
                    </Typography>
                  </a>
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-1 xl:hidden relative">
            <Button variant="link" className="p-0 w-[180px] justify-start h-fit">
              <Typography variant="h5" className="truncate">
                {title}
              </Typography>
            </Button>
            <hr className="w-full" />
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                {status === 'beingRented' ? 'Request from:' : 'Asset from:'}
              </Typography>
              <Button variant="link" className="p-0 w-fit h-fit">
                <Typography variant="h6" className="text-primary">
                  {userFrom}
                </Typography>
              </Button>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Date:
              </Typography>
              <Typography variant="h6">
                {dayjs(startDate).format('DD/MM/YY')} - {dayjs(endDate).format('DD/MM/YY')}
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Rental fee:
              </Typography>
              <Typography variant="h6">฿{rentalFee}</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Insurance fee:
              </Typography>
              <Typography variant="h6">฿{insuranceFee}</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Delivery fee:
              </Typography>
              <Typography variant="h6">฿{deliveryFee}</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Total fee:
              </Typography>
              <Typography variant="h6">
                ฿{(rentalFee ?? 0) + (insuranceFee ?? 0) + (deliveryFee ?? 0)}
              </Typography>
            </div>
            <div className="flex gap-1">
              <Badge
                variant="outline"
                size="md"
                className="px-3 py-1 gap-1 border-muted-foreground"
              >
                <Paperclip size={16} className="flex-none" />
                <a href={file?.url ?? ''} target="_blank" rel="noopener noreferrer">
                  <Typography
                    variant="h6"
                    fontWeight="regular"
                    className="text-secondary hover:underline hover:underline-offset-1 cursor-pointer line-clamp-1"
                  >
                    {file?.filename}
                  </Typography>
                </a>
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-lg:hidden">
          {status === 'beingRented' ? (
            <Button
              variant="secondary"
              size="sm"
              className="gap-2"
              disabled={isLoading}
              onClick={() => {
                setIsOpen(true)
              }}
            >
              <PencilSimple size={16} />
              Edit Contract
            </Button>
          ) : (
            <Button
              size="sm"
              className="gap-2 px-1.5"
              disabled={isLoading}
              onClick={() => {
                onAccept()
              }}
            >
              <Check size={16} />
              Accept Contract
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault()
              onSubmitDecline(Number(request?.id))
            }}
          >
            <X size={16} />
            Decline
          </Button>
        </div>
        <div className="flex w-full gap-2 lg:hidden">
          {status === 'beingRented' ? (
            <Button
              variant="secondary"
              className="gap-2 w-1/2"
              disabled={isLoading || isLoadingAccept}
              onClick={(e) => {
                e.preventDefault()
                setIsOpen(true)
              }}
            >
              <PencilSimple size={20} />
              Edit Contract
            </Button>
          ) : (
            <Button
              className="gap-2 w-1/2 px-1"
              disabled={isLoading || isLoadingAccept}
              onClick={() => {
                onAccept()
              }}
            >
              <Check size={20} />
              Accept Contract
            </Button>
          )}
          <Button
            variant="outline"
            className="gap-2 w-1/2"
            disabled={isLoading || isLoadingAccept}
            onClick={(e) => {
              e.preventDefault()
              onSubmitDecline(Number(request?.id))
            }}
          >
            <X size={20} />
            Decline
          </Button>
        </div>
      </div>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <NegotiatingModal setIsOpen={setIsOpen} oldFile={file} request={request} query={query} />
      </Modal>
    </>
  )
}
