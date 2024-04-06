'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Typography from '@/components/ui/typography'
import { CreditCard } from '@phosphor-icons/react'

import ExpensesContainer from './ExpensesContainer'
import HistoryContainer from './HistoryContainer'
import ReceivableContainer from './ReceivableContainer'

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
          <TabsList className="w-full max-lg:no-scrollbar max-lg:overflow-x-scroll justify-start">
            <TabsTrigger value="expenses" className="md:w-1/3">
              Expenses
            </TabsTrigger>
            <TabsTrigger value="receivables" className="md:w-1/3">
              Receivables
            </TabsTrigger>
            <TabsTrigger value="paymentHistory" className="md:w-1/3">
              Payment history
            </TabsTrigger>
          </TabsList>
          <TabsContent value="expenses">
            <ExpensesContainer />
          </TabsContent>
          <TabsContent value="receivables">
            <ReceivableContainer />
          </TabsContent>
          <TabsContent value="paymentHistory">
            <HistoryContainer />
          </TabsContent>
        </Tabs>
      </div>

      {/* <Pagination> */}
      {/* 	<PaginationContent> */}
      {/* 		<PaginationItem> */}
      {/* 			<PaginationPrevious href="#" /> */}
      {/* 		</PaginationItem> */}
      {/**/}
      {/* 		<PaginationItem> */}
      {/* 			<PaginationLink isActive>1</PaginationLink> */}
      {/* 		</PaginationItem> */}
      {/**/}
      {/* 		<PaginationItem> */}
      {/* 			<PaginationLink href="#">2</PaginationLink> */}
      {/* 		</PaginationItem> */}
      {/**/}
      {/* 		<PaginationItem> */}
      {/* 			<PaginationLink href="#">3</PaginationLink> */}
      {/* 		</PaginationItem> */}
      {/**/}
      {/* 		<PaginationItem> */}
      {/* 			<PaginationEllipsis /> */}
      {/* 		</PaginationItem> */}
      {/**/}
      {/* 		<PaginationItem> */}
      {/* 			<PaginationNext href="#" /> */}
      {/* 		</PaginationItem> */}
      {/* 	</PaginationContent> */}
      {/* </Pagination> */}
    </div>
  )
}
