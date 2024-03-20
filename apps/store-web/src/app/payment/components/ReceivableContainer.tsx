'use client'

import React from 'react'

import bicycle from '@/assets/images/bicycle.svg'

import {
  ExpensesCardButton,
  ExpensesCardOverDueButton,
  PaymentCard,
  PaymentCardContainer,
  ReceivableCardOverDueButton,
  ReceivablesCardButton,
} from './PaymentCard'

export default function ReceivableContainer() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <PaymentCard>
        <PaymentCardContainer
          title="จักรยานแพะภูเขา"
          assetFrom="มาย มุมุ"
          thumbnail={bicycle}
          startDate={new Date('2024-02-29')}
          endDate={new Date()}
          insuranceFee={1000}
          deliveryFee={50}
          rentalFee={50}
          totalFee={1100}
        />
        <ReceivablesCardButton dueDate={new Date('2024-03-17')} />
      </PaymentCard>
      <PaymentCard>
        <PaymentCardContainer
          title="จักรยานแพะภูเขา"
          assetFrom="มาย มุมุ"
          thumbnail={bicycle}
          startDate={new Date('2024-02-29')}
          endDate={new Date()}
          insuranceFee={1000}
          deliveryFee={50}
          rentalFee={50}
          totalFee={1100}
        />
        <ReceivableCardOverDueButton dueDate={new Date('2024-03-17')} />
      </PaymentCard>
    </div>
  )
}
