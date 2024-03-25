import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Renting, User } from '../../../payload-types'

export const syncCollections: AfterChangeHook<Renting> = async ({ req, doc }) => {
  const { payload } = req
  const { rentedTo, rentedBy, status, id } = doc

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
        const requestMadeList = [
          ...requestsMade.map((request) => (typeof request === 'object' ? request.id : request)),
          id,
        ]

        const requestMadeIds = requestMadeList.filter(
          (id, index) => requestMadeList.indexOf(id) === index
        )

        await req.payload.update({
          collection: 'users',
          id: userRenting.id,
          data: {
            requestsMade: requestMadeIds,
          },
        })
      } else {
        await req.payload.update({
          collection: 'users',
          id: userRenting.id,
          data: {
            requestsMade: [id],
          },
        })
      }

      if (requestsReceived && requestsReceived.length > 0) {
        const requestReceiveItemList = [
          ...requestsReceived.map((request) =>
            typeof request === 'object' ? request.id : request
          ),
          id,
        ]

        const requestReceiveIds = requestReceiveItemList.filter(
          (id, index) => requestReceiveItemList.indexOf(id) === index
        )

        await req.payload.update({
          collection: 'users',
          id: userBeingRented.id,
          data: {
            requestsReceived: requestReceiveIds,
          },
        })
      } else {
        await req.payload.update({
          collection: 'users',
          id: userBeingRented.id,
          data: {
            requestsReceived: [id],
          },
        })
      }
    }
  }
  if (status === 'COMPLETED') {
    //ไปที่ collections payment
  }
  if (status === 'PROCESSING') {
    if (item) {
      await req.payload.update({
        collection: 'items',
        id: item.id,
        data: {
          rentingStatus: 'negotiating',
        },
      })
    }
  }
}
