import payload from 'payload'
import type { PayloadHandler } from 'payload/config'
import type { PayloadRequest } from 'payload/types'

export const webhook: PayloadHandler = async (req: PayloadRequest, res) => {
  const event = req.body

  switch (event.type) {
    case 'checkout.session.completed':
      await req.payload.update({
        collection: 'renting',
        id: event.data.object.metadata.rentingId,
        data: {
          status: 'COMPLETED',
        },
      })

      res.json({ received: true })
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
      res.json({ received: true })
  }
}
