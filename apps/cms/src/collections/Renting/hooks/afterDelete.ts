import type { AfterDeleteHook } from 'payload/dist/collections/config/types'

import type { Renting, User } from '../../../payload-types'

export const afterDelete: AfterDeleteHook<Renting> = async ({ req, doc }) => {
  const { payload } = req
  const { rentedTo, rentedBy, id: requestId } = doc

  const rentedByID = typeof rentedBy.user === 'object' ? rentedBy.user.id : rentedBy.user
  const rentedToID = typeof rentedTo.user === 'object' ? rentedTo.user.id : rentedTo.user

  if (!rentedByID) {
    payload.logger.error('Error in `syncCollections` hook: No user ID found on renting')
  }

  if (!rentedToID) {
    payload.logger.error('Error in `syncCollections` hook: No user found on renting')
  }

  //Rented by ถูกเช่าโดย
  const userRenting: User = await req.payload.findByID({
    collection: 'users',
    id: rentedByID,
  })

  //Rented to เช่าไปที่
  const userBeingRented: User = await req.payload.findByID({
    collection: 'users',
    id: rentedToID,
  })

  const { requestsMade } = userRenting
  const { requestsReceived } = userBeingRented

  if (requestsMade && requestsMade.length > 0) {
    const requestMadeItemList = [
      ...requestsMade
        .map((request) => (typeof request === 'object' ? request.id : request))
        .filter((id) => id !== requestId),
    ]
    await req.payload.update({
      collection: 'users',
      id: userRenting.id,
      data: {
        requestsMade: requestMadeItemList,
      },
    })
  }

  if (requestsReceived && requestsReceived.length > 0) {
    const requestReceiveItemList = [
      ...requestsReceived
        .map((request) => (typeof request === 'object' ? request.id : request))
        .filter((id) => id !== requestId),
    ]
    await req.payload.update({
      collection: 'users',
      id: userBeingRented.id,
      data: {
        requestsReceived: requestReceiveItemList,
      },
    })
  }
}
