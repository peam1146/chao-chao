'use client'

import { Renting_status, useQuery } from '../../../../../gqty'
import RentingContractsCard from './RentingContractsCard'

export function RentingContainer() {
  const query = useQuery({
    fetchPolicy: 'network-only',
    suspense: true,
  })

  const requestsMade = query.meUser?.user?.requestsMade?.filter(
    (request) => request.status === Renting_status.COMPLETED
  )

  if (requestsMade?.length === 0) {
    return <div className="self-center">No item found</div>
  }

  return (
    <>
      {requestsMade?.map((item) => (
        <RentingContractsCard key={item?.id} request={item} status="renting" />
      ))}
    </>
  )
}
