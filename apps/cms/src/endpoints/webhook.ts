import payload from 'payload'
import type { PayloadHandler } from 'payload/config'
import type { PayloadRequest } from 'payload/types'

export const webhook: PayloadHandler = async (req: PayloadRequest, res) => {
  const event = req.body

  console.log('Received event', JSON.stringify(event, null, 2))

  switch (event.type) {
    case 'checkout.session.completed':
      console.log('Checkout session completed', event, event.data.object.metadata.rentingId)

      console.log(
        payload.update({
          collection: 'renting',
          id: event.data.object.metadata.rentingId,
          data: {
            status: 'COMPLETED',
          },
        })
      )

      break
    default:
      console.log(`Unhandled event type ${event.type}`)
      res.json({ received: true })
  }
}
