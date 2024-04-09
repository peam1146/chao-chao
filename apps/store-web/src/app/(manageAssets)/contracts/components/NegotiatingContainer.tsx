'use client'

import { Spinner } from '@/components/ui/spinner'

import { Renting_status, useQuery } from '../../../../../gqty'
import NeigotiatingContractsCard from './NeigotiatingContractsCard'

export function NegotiatingContainer() {
  const queryRequest = useQuery({
    fetchPolicy: 'cache-and-network',
  })

  const requestsMade = queryRequest.meUser?.user?.requestsMade?.filter(
    (request) => request.status === Renting_status.PROCESSING
  )

  const requestsReceived = queryRequest.meUser?.user?.requestsReceived?.filter(
    (request) => request.status === Renting_status.PROCESSING
  )

  if (queryRequest.$state.isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner className="self-center" />
      </div>
    )
  }

  if (requestsMade?.length === 0 && requestsReceived?.length === 0) {
    return <div className="self-center">No item found</div>
  }
  return (
    <>
      {requestsMade?.map((item) => (
        <NeigotiatingContractsCard
          key={item?.rentedTo?.item?.id}
          request={item}
          title={item?.rentedTo?.item?.name ?? ''}
          insuranceFee={item?.insuranceFee ?? 0}
          deliveryFee={item?.deliveryFee ?? 0}
          status="rented"
          image={item?.rentedTo?.item?.image?.at(0)}
          file={item?.file}
          userFrom={item?.rentedTo?.user?.firstName ?? ''}
          startDate={item?.startDate ?? ''}
          endDate={item?.endDate ?? ''}
          rentalFee={item?.rentalFee ?? 0}
          query={queryRequest}
        />
      ))}
      {requestsReceived?.map((item) => (
        <NeigotiatingContractsCard
          key={item?.rentedTo?.item?.id}
          request={item}
          title={item?.rentedTo?.item?.name ?? ''}
          insuranceFee={item?.insuranceFee ?? 0}
          deliveryFee={item?.deliveryFee ?? 0}
          status="beingRented"
          image={item?.rentedTo?.item?.image?.at(0)}
          file={item?.file}
          userFrom={item?.rentedBy?.user?.firstName ?? ''}
          startDate={item?.startDate ?? ''}
          endDate={item?.endDate ?? ''}
          rentalFee={item?.rentalFee ?? 0}
          query={queryRequest}
        />
      ))}
    </>
  )
}
