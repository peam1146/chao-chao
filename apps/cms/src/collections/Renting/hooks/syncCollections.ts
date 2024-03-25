import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Renting, User } from '../../../payload-types'

export const syncCollections: AfterChangeHook<Renting> = async ({ req, doc }) => {
  const { payload } = req
  const { rentedTo, rentedBy, status } = doc

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

  const item = await req.payload.findByID({
    collection: 'items',
    id: itemId,
  })

  if (typeof item.createdBy === 'object' && item.createdBy.id !== rentedToID) {
    return payload.logger.error('Error in `syncCollections` hook: Item not created by user')
  }

  if (
    userRenting &&
    userBeingRented &&
    typeof userRenting === 'object' &&
    typeof userBeingRented === 'object'
  ) {
    const { requestsMade } = userRenting
    const { requestsReceived } = userBeingRented

    if (status === 'PENDING') {
      if (requestsMade && requestsMade.length > 0) {
        const requestMadeItemList = [
          ...requestsMade,
          {
            item: typeof item === 'object' ? item.id : item,
            user: userBeingRented.id,
          },
        ]

        await req.payload.update({
          collection: 'users',
          id: userRenting.id,
          data: {
            requestsMade: requestMadeItemList,
          },
        })
      } else {
        await req.payload.update({
          collection: 'users',
          id: userRenting.id,
          data: {
            requestsMade: [
              {
                item: typeof item === 'object' ? item.id : item,
                user: userBeingRented.id,
              },
            ],
          },
        })
      }

      if (requestsReceived && requestsReceived.length > 0) {
        const requestReceiveItemList = [
          ...requestsReceived,
          {
            item: typeof item === 'object' ? item.id : item,
            user: userRenting.id,
          },
        ]

        await req.payload.update({
          collection: 'users',
          id: userBeingRented.id,
          data: {
            requestsReceived: requestReceiveItemList,
          },
        })
      } else {
        await req.payload.update({
          collection: 'users',
          id: userBeingRented.id,
          data: {
            requestsReceived: [
              {
                item: typeof item === 'object' ? item.id : item,
                user: userRenting.id,
              },
            ],
          },
        })
      }
    }

    if (status === 'COMPLETED') {
      //ไปที่ collections payment
    }
    if (status === 'PROCESSING') {
      //บอกให้รู้สำหรับ negotiating ใน ui
    }
  }
}
