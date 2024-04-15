'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { useUserToken } from '@/providers/User'
import { Separator } from '@radix-ui/react-separator'
import Image from 'next/image'

import { Payment_type_Input, useQuery } from '../../../../../gqty'
import { PaymentCard, PaymentCardContainer } from './PaymentCard'
import PaymentHistoryLessorReviewModal from './components/PaymentHistoryLessorReviewModal'
import PaymentHistoryRenterReviewModal from './components/PaymentHistoryRenterReviewModal'

// real
export default function HistoryContainer() {
  const query = useQuery({
    fetchPolicy: 'network-only',
  })

  const { userId } = useUserToken()

  const payRenting = query
    .Payments({
      where: {
        type: {
          equals: Payment_type_Input.RENTING,
        },
      },
    })
    ?.docs?.filter((renting) => renting?.createdBy.id === Number(userId))
    .map((renting) => ({
      ...renting,
    }))
    .filter((renting) => renting?.id !== undefined)

  const receiveRenting = query
    .Payments({
      where: {
        type: {
          equals: Payment_type_Input.RENTING,
        },
      },
    })
    ?.docs?.filter((renting) => renting?.payTo?.id === Number(userId))
    .map((renting) => ({
      ...renting,
    }))
    .filter((renting) => renting?.id !== undefined)

  const payAdvertise = query
    .Payments({
      where: {
        type: {
          equals: Payment_type_Input.ADVERTISE,
        },
      },
    })
    ?.docs?.filter((renting) => renting?.createdBy.id === Number(userId))
    .map((renting) => ({
      ...renting,
    }))
    .filter((renting) => renting?.id !== undefined)

  console.log(payAdvertise?.at(0)?.advertise?.price)

  const [openLessorReviewModal, SetOpenLessorReviewModal] = useState(false)
  const [openRenterReveiwModal, setOpenRenterReviewModal] = useState(false)
  const [reviewToLessorId, setReviewToLessorId] = useState<number | undefined>(undefined)
  const [reviewToRentorId, setReviewToRentorId] = useState<number | undefined>(undefined)
  const [reviewToItemId, setReviewToItemId] = useState<number | undefined>(undefined)

  if (query.$state.isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner className="self-center" />
      </div>
    )
  }

  if (payRenting?.length === 0 && receiveRenting?.length === 0 && payAdvertise?.length === 0) {
    return <div className="flex justify-center">No payment history</div>
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {payRenting?.map((renting) => (
        <PaymentCard>
          <PaymentCardContainer
            title={renting?.renting?.renting?.rentedTo?.item?.name ?? ''}
            assetFrom={renting?.renting?.renting?.rentedTo?.user?.firstName ?? ''}
            thumbnail={
              renting?.renting?.renting?.rentedTo?.item?.image?.length
                ? renting?.renting?.renting?.rentedTo?.item?.image[0].url ?? ''
                : ''
            }
            startDate={new Date(renting?.renting?.renting?.startDate ?? new Date())}
            endDate={new Date(renting?.renting?.renting?.endDate ?? new Date())}
            insuranceFee={Number(renting?.renting?.renting?.insuranceFee)}
            deliveryFee={Number(renting?.renting?.renting?.deliveryFee)}
            rentalFee={Number(renting?.renting?.renting?.rentalFee)}
            totalFee={
              Number(renting?.renting?.renting?.insuranceFee) +
              Number(renting?.renting?.renting?.deliveryFee) +
              Number(renting?.renting?.renting?.rentalFee)
            }
            variant="expenses"
          />
          <div className="flex justify-center items-center xl:w-max max-xl:w-full">
            <div className="flex xl:flex-col max-xl:flex-row-reverse max-xl:w-full gap-2 xl:w-max items-center justify-center">
              <Typography variant="h6" className="text-unavailable w-full text-center">
                - ฿
                {Number(renting?.renting?.renting?.insuranceFee) +
                  Number(renting?.renting?.renting?.deliveryFee) +
                  Number(renting?.renting?.renting?.rentalFee)}
              </Typography>
              <Button
                variant="default"
                className="flex gap-2 w-full"
                onClick={() => {
                  setReviewToLessorId(Number(renting?.renting?.renting?.rentedTo?.user?.id))
                  setReviewToItemId(Number(renting?.renting?.renting?.rentedTo?.item?.id))
                  setOpenRenterReviewModal(true)
                }}
              >
                <Typography>Write a review</Typography>
              </Button>
            </div>
          </div>
        </PaymentCard>
      ))}
      {receiveRenting?.map((renting) => (
        <PaymentCard>
          <PaymentCardContainer
            title={renting?.renting?.renting?.rentedTo?.item?.name ?? ''}
            assetFrom={renting?.renting?.renting?.rentedBy?.user?.firstName ?? ''}
            thumbnail={
              renting?.renting?.renting?.rentedTo?.item?.image?.length
                ? renting?.renting?.renting?.rentedTo?.item?.image[0].url ?? ''
                : ''
            }
            startDate={new Date(renting?.renting?.renting?.startDate ?? new Date())}
            endDate={new Date(renting?.renting?.renting?.endDate ?? new Date())}
            insuranceFee={Number(renting?.renting?.renting?.insuranceFee)}
            deliveryFee={Number(renting?.renting?.renting?.deliveryFee)}
            rentalFee={Number(renting?.renting?.renting?.rentalFee)}
            totalFee={
              Number(renting?.renting?.renting?.insuranceFee) +
              Number(renting?.renting?.renting?.deliveryFee) +
              Number(renting?.renting?.renting?.rentalFee)
            }
            variant="receivable"
          />
          <div className="flex justify-center items-center xl:w-max max-xl:w-full">
            <div className="flex xl:flex-col max-xl:flex-row-reverse max-xl:w-full gap-2 xl:w-max items-center justify-center">
              <Typography variant="h6" className="text-available w-full text-center">
                + ฿
                {Number(renting?.renting?.renting?.insuranceFee) +
                  Number(renting?.renting?.renting?.deliveryFee) +
                  Number(renting?.renting?.renting?.rentalFee)}
              </Typography>
              <Button
                variant="default"
                className="flex gap-2 w-full"
                onClick={() => {
                  setReviewToRentorId(Number(renting?.renting?.renting?.rentedBy?.user?.id))
                  SetOpenLessorReviewModal(true)
                }}
              >
                <Typography>Write a review</Typography>
              </Button>
            </div>
          </div>
        </PaymentCard>
      ))}
      {payAdvertise?.map((pay) => (
        <PaymentCard>
          <div className="flex gap-3 w-full pt-2 pb-2 ">
            <Image
              src={pay?.advertise?.item?.image?.at(0)?.url ?? ''}
              alt="thumbnail"
              className="w-[100px] h-[100px]"
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-1 w-full">
              <Button variant="link" className="p-0 w-fit h-fit">
                <Typography variant="h5">{pay?.advertise?.item?.name}</Typography>
              </Button>
              <Separator
                orientation="horizontal"
                className="border-b border-border whitespace-nowrap"
              />
              <div className="flex flex-col gap-1">
                <div className="flex xl:flex-row flex-col xl:gap-8 gap-1">
                  <div className="flex w-[180px] gap-1">
                    <Typography variant="h6" className="text-light">
                      asset from:
                    </Typography>
                    <Button variant="link" className="p-0 w-fit h-fit">
                      <Typography variant="h6">{pay?.createdBy?.firstName}</Typography>
                    </Button>
                  </div>
                  <div className="flex max-xl:flex-col xl:flex-row max-xl:gap-1 xl:gap-8">
                    <div className="flex gap-1">
                      <Typography variant="h6" className="text-light">
                        Date:
                      </Typography>
                      <Typography variant="h6">{`${new Date(
                        pay?.advertise?.startDate ?? new Date()
                      ).getDate()}/${new Date(
                        pay?.advertise?.startDate ?? new Date()
                      ).toLocaleString('default', {
                        month: '2-digit',
                        year: '2-digit',
                      })} - ${new Date(pay?.advertise?.endDate ?? new Date()).getDate()}/${new Date(
                        pay?.advertise?.endDate ?? new Date()
                      ).toLocaleString('default', {
                        month: '2-digit',
                        year: '2-digit',
                      })}`}</Typography>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Typography variant="h6" className="text-light">
                    Advertise fee:
                  </Typography>
                  <Typography variant="h6">{`฿${pay?.advertise?.price}`}</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center xl:w-max max-xl:w-full px-5">
            <div className="flex xl:flex-col max-xl:flex-row-reverse max-xl:w-full gap-2 xl:w-max items-center justify-center">
              <Typography variant="h6" className="text-unavailable w-full text-center">
                - ฿{pay?.advertise?.price}
              </Typography>
            </div>
          </div>
        </PaymentCard>
      ))}
      <Modal open={openRenterReveiwModal} onOpenChange={setOpenRenterReviewModal}>
        <PaymentHistoryRenterReviewModal
          reviewToUser={reviewToLessorId}
          reviewToItem={reviewToItemId}
          onClick={() => setOpenRenterReviewModal(false)}
        />
      </Modal>
      <Modal open={openLessorReviewModal} onOpenChange={SetOpenLessorReviewModal}>
        <PaymentHistoryLessorReviewModal
          reviewToUser={reviewToRentorId}
          onClick={() => SetOpenLessorReviewModal(false)}
        />
      </Modal>
    </div>
  )
}
