'use client'

import { addDays } from 'date-fns'

import { Renting_status_Input, useQuery } from '../../../../../gqty'
import { ExpensesCardButton, PaymentCard, PaymentCardContainer } from './PaymentCard'

// real
export default function ExpensesContainer() {
  const { Rentings, meUser } = useQuery()

  const toPay = Rentings({
    where: {
      status: { equals: Renting_status_Input.WAIT_PAID },
    },
  })
    ?.docs?.filter((renting) => renting?.rentedBy?.user?.id === meUser?.user?.id)
    ?.map((renting) => ({
      ...renting,
    }))

  const handlePay = async (
    productId: number | undefined,
    totalPrice: number,
    rentingId: number | undefined
  ) => {
    const result = await fetch('http://localhost:3001/api/stripe/checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        totalPrice,
        rentingId,
      }),
    })

    const data = await result.json()

    if (data.id) {
      window.location = data.url
    }
  }

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
          <ExpensesCardButton
            onClick={() =>
              handlePay(
                renting.rentedTo?.item?.id as number,
                Number(renting.insuranceFee) +
                  Number(renting.deliveryFee) +
                  Number(renting.rentalFee),
                renting.id as number
              )
            }
            dueDate={addDays(new Date(renting.createdAt ?? new Date()), 5)}
          />
        </PaymentCard>
      ))}
    </div>
  )
}
