'use client'

import React, { useState } from 'react'

import bicycle from '@/assets/images/bicycle.svg'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import Typography from '@/components/ui/typography'

import { PaymentCard, PaymentCardContainer } from './PaymentCard'
import PaymentHistoryLessorReviewModal from './components/PaymentHistoryLessorReviewModal'
import PaymentHistoryRenterReviewModal from './components/PaymentHistoryRenterReviewModal'

export default function PaymentHistoryContainer() {
  const [openLessorReviewModal, SetOpenLessorReviewModal] = useState(false)
  const [openRenterReveiwModal, setOpenRenterReviewModal] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <PaymentCard>
          <PaymentCardContainer
            title="จกรยานแพะภเขา"
            assetFrom="มาย มม"
            thumbnail={bicycle}
            startDate={new Date('2024-02-29')}
            endDate={new Date()}
            insuranceFee={1000}
            deliveryFee={50}
            rentalFee={50}
            totalFee={1100}
          />
          <div className="flex justify-center items-center xl:w-max max-xl:w-full">
            <div className="flex xl:flex-col max-xl:flex-row-reverse max-xl:w-full gap-2 xl:w-max items-center justify-center">
              <Typography variant="h6" className="text-unavailable w-full text-center">
                - ฿1,110
              </Typography>
              <Button
                variant="default"
                className="flex gap-2 w-full"
                onClick={() => {
                  setOpenRenterReviewModal(true)
                }}
              >
                <Typography>Write a review</Typography>
              </Button>
            </div>
          </div>
        </PaymentCard>
        <PaymentCard>
          <PaymentCardContainer
            title="จกรยานแพะภเขา"
            assetFrom="มาย มม"
            thumbnail={bicycle}
            startDate={new Date('2024-02-29')}
            endDate={new Date()}
            insuranceFee={1000}
            deliveryFee={50}
            rentalFee={50}
            totalFee={1100}
            variant="receivable"
          />
          <div className="flex justify-center items-center xl:w-max max-xl:w-full">
            <div className="flex xl:flex-col max-xl:flex-row-reverse max-xl:w-full gap-2 xl:w-max items-center justify-center">
              <Typography variant="h6" className="text-available w-full text-center">
                + ฿1,110
              </Typography>
              <Button
                variant="default"
                className="flex gap-2 w-full"
                onClick={() => {
                  SetOpenLessorReviewModal(true)
                }}
              >
                <Typography>Write a review</Typography>
              </Button>
            </div>
          </div>
        </PaymentCard>
      </div>
      <Modal open={openRenterReveiwModal} onOpenChange={setOpenRenterReviewModal}>
        <PaymentHistoryRenterReviewModal
          reviewToUser={1}
          reviewToItem={1}
          onClick={() => setOpenRenterReviewModal(false)}
        />
      </Modal>
      <Modal open={openLessorReviewModal} onOpenChange={SetOpenLessorReviewModal}>
        <PaymentHistoryLessorReviewModal
          reviewToUser={1}
          onClick={() => SetOpenLessorReviewModal(false)}
        />
      </Modal>
    </>
  )
}
