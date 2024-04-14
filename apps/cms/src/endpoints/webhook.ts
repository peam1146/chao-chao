import type { PayloadHandler } from 'payload/config'
import type { PayloadRequest } from 'payload/types'

export const webhook: PayloadHandler = async (req: PayloadRequest, res) => {
  const event = req.body

  switch (event.type) {
    case 'checkout.session.completed':
      console.log(event.data.object.metadata)
      if (event.data.object.metadata.option === 'item') {
        await req.payload.update({
          collection: 'renting',
          id: event.data.object.metadata.rentingId,
          data: {
            status: 'COMPLETED',
          },
        })
        await req.payload
          .findByID({
            collection: 'renting',
            id: event.data.object.metadata.rentingId,
          })
          .then((renting) => {
            req.payload.create({
              collection: 'payment',
              data: {
                type: 'RENTING',
                createdBy:
                  typeof renting.createdBy === 'object' ? renting.createdBy.id : renting.createdBy,
                payTo:
                  typeof renting.rentedTo.user === 'object'
                    ? renting.rentedTo.user.id
                    : renting.rentedTo.user,
                renting: {
                  renting: event.data.object.metadata.rentingId,
                },
              },
            })
          })
      } else if (event.data.object.metadata.option === 'advertise') {
        await req.payload.update({
          collection: 'items',
          id: event.data.object.metadata.productId,
          data: {
            advertise: {
              status: 'active',
              startDate: new Date(event.data.object.metadata.startDate).toISOString(),
              endDate: new Date(event.data.object.metadata.endDate).toISOString(),
              price: event.data.object.metadata.price,
            },
          },
        })
        await req.payload
          .findByID({
            collection: 'items',
            id: event.data.object.metadata.productId,
          })
          .then((item) => {
            req.payload.create({
              collection: 'payment',
              data: {
                type: 'ADVERTISE',
                createdBy: typeof item.createdBy === 'object' ? item.createdBy.id : item.createdBy,
                advertise: {
                  item: item.id,
                  startDate: new Date(event.data.object.metadata.startDate).toISOString(),
                  endDate: new Date(event.data.object.metadata.endDate).toISOString(),
                  price: Number(event.data.object.metadata.price),
                },
              },
            })
          })
      }

      res.json({ received: true })
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
      res.json({ received: true })
  }
}
