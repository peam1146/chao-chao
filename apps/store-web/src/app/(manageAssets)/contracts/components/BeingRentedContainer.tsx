'use client'

import { Renting_status, useQuery } from '../../../../../gqty'
import RentingContractsCard from './RentingContractsCard'

export function BeingRentedContainer() {
  const query = useQuery({
    fetchPolicy: 'network-only',
    suspense: true,
  })

  const requestsReceived = query.meUser?.user?.requestsReceived?.filter(
    (request) => request.status === Renting_status.COMPLETED
  )

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
