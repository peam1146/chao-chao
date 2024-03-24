import type { AfterDeleteHook } from 'payload/dist/collections/config/types'

import type { Renting, User } from '../../../payload-types'

export const afterDelete: AfterDeleteHook<Renting> = async ({ req, doc }) => {
  const { payload } = req
  const { rentedTo, rentedBy } = doc

  const rentedByID = typeof rentedBy.user === 'object' ? rentedBy.user.id : rentedBy.user
  const rentedToID = typeof rentedTo.user === 'object' ? rentedTo.user.id : rentedTo.user

  const itemId = typeof rentedTo.item === 'object' ? rentedTo.item.id : rentedTo.item

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
      ...requestsMade.filter((request) => {
        typeof request.item === 'object'
          ? request.item.id !== itemId
          : request.item !== itemId && typeof request.user === 'object'
            ? request.user.id !== userBeingRented.id
            : request.user !== userBeingRented.id
      }),
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
      ...requestsReceived.filter((request) => {
        typeof request.item === 'object'
          ? request.item.id !== itemId
          : request.item !== itemId && typeof request.user === 'object'
            ? request.user.id !== userRenting.id
            : request.user !== userRenting.id
      }),
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
