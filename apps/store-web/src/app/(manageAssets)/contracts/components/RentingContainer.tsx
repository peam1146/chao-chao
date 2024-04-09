'use client'

import { Spinner } from '@/components/ui/spinner'

import { Renting_status, useQuery } from '../../../../../gqty'
import RentingContractsCard from './RentingContractsCard'

export function RentingContainer() {
  const query = useQuery({
    fetchPolicy: 'cache-and-network',
  })

  const requestsMade = query.meUser?.user?.requestsMade?.filter(
    (request) => request.status === Renting_status.COMPLETED
  )

  if (query.$state.isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner className="self-center" />
      </div>
    )
  }

  if (requestsMade?.length === 0 && !query.$state.isLoading) {
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
