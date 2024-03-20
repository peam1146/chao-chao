'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { CreditCard } from '@phosphor-icons/react'

import ExpensesContainer from './ExpensesContainer'
import ReceivableContainer from './ReceivableContainer'

// import { PaymentCardContainer } from './PaymentCard'

export function PaymentContainer() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex gap-1">
        <CreditCard size={24} />
        <Typography variant="h4" fontWeight="bold">
          Rental Requests
        </Typography>
      </div>
      <div>
        <Tabs defaultValue="expenses" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="expenses" className="w-1/2">
              Expenses
            </TabsTrigger>
            <TabsTrigger value="receivables" className="w-1/2">
              Receivables
            </TabsTrigger>
            <TabsTrigger value="paymentHistory" className="w-1/2">
              Payment history
            </TabsTrigger>
          </TabsList>
          <TabsContent value="expenses">
            <ExpensesContainer />
          </TabsContent>
          <TabsContent value="receivables">
            <ReceivableContainer />
          </TabsContent>

          <TabsContent value="paymentHistory"></TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
