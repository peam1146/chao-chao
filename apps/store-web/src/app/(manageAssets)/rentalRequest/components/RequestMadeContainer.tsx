'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'
import { useMediaQuery } from '@/hooks/use-media-query'

import { Renting_status, resolve, useQuery } from '../../../../../gqty'
import {
  RentalRequestCard,
  RentalRequestCardButton,
  RentalRequestCardContainer,
} from './RentalRequestCard'

export default function RequestMadeContainer() {
  const isDesktop = useMediaQuery('(min-width: 821px)')

  const query = useQuery({
    fetchPolicy: 'network-only',
    suspense: true,
    refetchOnRender: true,
  })

  const requestMade = query.meUser?.user?.requestsMade

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(id: number) {
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
        description: 'Delete request successfully',
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

  const requestList = requestMade?.filter((request) => request.status === Renting_status.PENDING)

  return (
    <div className="flex flex-col gap-4 w-full">
      {!requestList || requestList.length === 0 ? (
        <div className="self-center">No request made</div>
      ) : (
        requestList.map((request) => {
          return (
            request &&
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
                    variant="secondary"
                    size={isDesktop ? 'sm' : 'lg'}
                    disabled={isLoading}
                    className="flex gap-2 w-full"
                    onClick={(e) => {
                      e.preventDefault()
                      onSubmit(Number(request.id))
                    }}
                  >
                    <Typography variant={isDesktop ? 'h6' : 'h5'} className="items-center">
                      {isLoading ? <Spinner size="xs" /> : 'Cancel'}
                    </Typography>
                  </Button>
                </RentalRequestCardButton>
              </RentalRequestCard>
            )
          )
        })
      )}
    </div>
  )
}
