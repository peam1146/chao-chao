'use client'

import React from 'react'

import { addDays } from 'date-fns'
import { useSearchParams } from 'next/navigation'

import { Renting_status_Input, useQuery } from '../../../../../gqty'
import { ExpensesCardButton, PaymentCard, PaymentCardContainer } from './PaymentCard'

// real
export default function HistoryContainer() {
  const { meUser } = useQuery()
  const { Rentings } = useQuery()

  const toPay = Rentings({
    where: {
      status: { equals: Renting_status_Input.COMPLETED },
    },
  })
    ?.docs?.filter((renting) => renting?.rentedBy?.user?.id === meUser?.user?.id)
    ?.map((renting) => ({
      ...renting,
    }))

  return (
    <div className="flex flex-col gap-4 w-full">
      {toPay?.map((renting) => (
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
          />
        </PaymentCard>
      ))}
    </div>
  )
}
