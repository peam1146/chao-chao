'use client'

import { Spinner } from '@/components/ui/spinner'

import { Renting_status, useQuery } from '../../../../../gqty'
import RentingContractsCard from './RentingContractsCard'

export function BeingRentedContainer() {
  const query = useQuery({
    fetchPolicy: 'cache-and-network',
  })

  const requestsReceived = query.meUser?.user?.requestsReceived?.filter(
    (request) => request.status === Renting_status.COMPLETED
  )

  if (query.$state.isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner className="self-center" />
      </div>
    )
  }

  if (requestsReceived?.length === 0) {
    return <div className="self-center">No item found</div>
  }

  return (
    <>
      {requestsReceived?.map((item) => (
        <RentingContractsCard key={item?.id} request={item} status="beingRented" />
      ))}
    </>
  )
}
