'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { useUserToken } from '@/providers/User'

import { Renting_status_Input, useQuery } from '../../../../../gqty'
import { PaymentCard, PaymentCardContainer } from './PaymentCard'
import PaymentHistoryLessorReviewModal from './components/PaymentHistoryLessorReviewModal'
import PaymentHistoryRenterReviewModal from './components/PaymentHistoryRenterReviewModal'

// real
export default function HistoryContainer() {
  const query = useQuery({
    fetchPolicy: 'network-only',
  })

  const { userId } = useUserToken()

  const pay = query
    .Rentings({
      where: {
        status: { equals: Renting_status_Input.COMPLETED },
      },
    })
    ?.docs?.filter((renting) => renting?.rentedBy?.user?.id === Number(userId))
    ?.map((renting) => ({
      ...renting,
    }))
    .filter((renting) => renting?.id !== undefined)

  const receive = query
    .Rentings({
      where: {
        status: { equals: Renting_status_Input.COMPLETED },
      },
    })
    ?.docs?.filter((renting) => renting?.rentedTo?.user?.id === Number(userId))
    ?.map((renting) => ({
      ...renting,
    }))
    .filter((renting) => renting?.id !== undefined)

  const [openLessorReviewModal, SetOpenLessorReviewModal] = useState(false)
  const [openRenterReveiwModal, setOpenRenterReviewModal] = useState(false)
  const [reviewToLessorId, setReviewToLessorId] = useState<number | undefined>(undefined)
  const [reviewToRentorId, setReviewToRentorId] = useState<number | undefined>(undefined)
  const [reviewToItemId, setReviewToItemId] = useState<number | undefined>(undefined)

  if (query.$state.isLoading || query.$state.error) {
    return (
      <div className="flex justify-center">
        <Spinner className="self-center" />
      </div>
    )
  }

  if (pay?.length === 0 && receive?.length === 0) {
    return <div className="flex justify-center">No payment history</div>
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {pay?.map((renting) => (
        <PaymentCard>
          <PaymentCardContainer
            title={renting.rentedTo?.item?.name ?? ''}
            assetFrom={renting.rentedTo?.user?.firstName ?? ''}
            thumbnail={
              renting.rentedTo?.item?.image?.length
                ? renting.rentedTo?.item?.image[0].url ?? ''
                : ''
            }
            startDate={new Date(renting.startDate ?? new Date())}
            endDate={new Date(renting.endDate ?? new Date())}
            insuranceFee={Number(renting.insuranceFee)}
            deliveryFee={Number(renting.deliveryFee)}
            rentalFee={Number(renting.rentalFee)}
            totalFee={
              Number(renting.insuranceFee) + Number(renting.deliveryFee) + Number(renting.rentalFee)
            }
            variant="expenses"
          />
          <div className="flex justify-center items-center xl:w-max max-xl:w-full">
            <div className="flex xl:flex-col max-xl:flex-row-reverse max-xl:w-full gap-2 xl:w-max items-center justify-center">
              <Typography variant="h6" className="text-unavailable w-full text-center">
                - ฿
                {Number(renting.insuranceFee) +
                  Number(renting.deliveryFee) +
                  Number(renting.rentalFee)}
              </Typography>
              <Button
                variant="default"
                className="flex gap-2 w-full"
                onClick={() => {
                  setReviewToLessorId(Number(renting.rentedTo?.user?.id))
                  setReviewToItemId(Number(renting.rentedTo?.item?.id))
                  setOpenRenterReviewModal(true)
                }}
              >
                <Typography>Write a review</Typography>
              </Button>
            </div>
          </div>
        </PaymentCard>
      ))}
      {receive?.map((renting) => (
        <PaymentCard>
          <PaymentCardContainer
            title={renting.rentedTo?.item?.name ?? ''}
            assetFrom={renting.rentedBy?.user?.firstName ?? ''}
            thumbnail={
              renting.rentedTo?.item?.image?.length
                ? renting.rentedTo?.item?.image[0].url ?? ''
                : ''
            }
            startDate={new Date(renting.startDate ?? new Date())}
            endDate={new Date(renting.endDate ?? new Date())}
            insuranceFee={Number(renting.insuranceFee)}
            deliveryFee={Number(renting.deliveryFee)}
            rentalFee={Number(renting.rentalFee)}
            totalFee={
              Number(renting.insuranceFee) + Number(renting.deliveryFee) + Number(renting.rentalFee)
            }
            variant="receivable"
          />
          <div className="flex justify-center items-center xl:w-max max-xl:w-full">
            <div className="flex xl:flex-col max-xl:flex-row-reverse max-xl:w-full gap-2 xl:w-max items-center justify-center">
              <Typography variant="h6" className="text-available w-full text-center">
                + ฿
                {Number(renting.insuranceFee) +
                  Number(renting.deliveryFee) +
                  Number(renting.rentalFee)}
              </Typography>
              <Button
                variant="default"
                className="flex gap-2 w-full"
                onClick={() => {
                  setReviewToRentorId(Number(renting.rentedBy?.user?.id))
                  SetOpenLessorReviewModal(true)
                }}
              >
                <Typography>Write a review</Typography>
              </Button>
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
