'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import Typography from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Check, X } from '@phosphor-icons/react'

import { Renting_status, resolve, useQuery } from '../../../../../gqty'
import {
  RentalRequestCard,
  RentalRequestCardButton,
  RentalRequestCardContainer,
} from './RentalRequestCard'
import { RequestAcceptModal } from './RequestAcceptModal'

export default function RequestReceivedContainer() {
  const isDesktop = useMediaQuery('(min-width: 821px)')
  const [open, setOpen] = useState(false)

  const query = useQuery({
    fetchPolicy: 'cache-and-network',
    suspense: true,
    refetchOnRender: true,
  })

  const requestReceived = query.meUser?.user?.requestsReceived

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
        description: 'Decline request successfully',
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

  const [requestId, setRequestId] = useState<number>()

  const requestList = requestReceived?.filter(
    (request) => request.status === Renting_status.PENDING
  )

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        {!requestList || requestList.length === 0 ? (
          <div className="self-center">No request received</div>
        ) : (
          requestList.map((request) => {
            return (
              request !== undefined &&
              !query.$state.isLoading &&
              !query.$state.error &&
              request.id &&
              request.status === Renting_status.PENDING && (
                <RentalRequestCard key={request.id}>
                  <RentalRequestCardContainer
                    title={request.rentedTo?.item?.name ?? ''}
                    requestFrom={`${request.rentedBy?.user?.firstName} ${request.rentedBy?.user?.lastName}`}
                    thumbnail={request.rentedTo?.item?.image?.at(0)?.url ?? ''}
                    startDate={new Date(request.startDate ?? '')}
                    endDate={new Date(request.endDate ?? '')}
                    rentalFee={request.rentalFee ?? 0}
                  />
                  <RentalRequestCardButton>
                    <Button
                      variant="default"
                      size={isDesktop ? 'sm' : 'lg'}
                      className="flex gap-2 w-full"
                      onClick={() => {
                        setOpen(true)
                        setRequestId(Number(request.id))
                      }}
                    >
                      <Check className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
                      <Typography variant={isDesktop ? 'h6' : 'h5'}>Accept</Typography>
                    </Button>
                    <Button
                      variant="outline"
                      size={isDesktop ? 'sm' : 'lg'}
                      disabled={isLoading}
                      className="flex gap-2 w-full"
                      onClick={(e) => {
                        e.preventDefault()
                        onSubmitDecline(Number(request.id))
                      }}
                    >
                      <X className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
                      <Typography variant={isDesktop ? 'h6' : 'h5'}>Decline</Typography>
                    </Button>
                  </RentalRequestCardButton>
                </RentalRequestCard>
              )
            )
          })
        )}
      </div>
      <Modal open={open} onOpenChange={setOpen}>
        <RequestAcceptModal onClose={setOpen} requestId={requestId} refetch={query.$refetch} />
      </Modal>
    </>
  )
}
