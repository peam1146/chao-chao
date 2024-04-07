import payload from 'payload'
import type { PayloadHandler } from 'payload/config'
import type { PayloadRequest } from 'payload/types'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
})

export const createCheckoutSession: PayloadHandler = async (req: PayloadRequest, res) => {
  const { totalPrice, productId, rentingId } = req.body as {
    totalPrice: number
    productId: string
    rentingId: string
  }

  const item = await payload.find({
    collection: 'items',
    where: {
      id: {
        equals: productId,
      },
    },
  })

  if (!item.docs[0]) {
    return res.status(404).json({ message: 'Item not found' })
  }

  const currentItem = item.docs[0]

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'thb',
          product_data: {
            name: currentItem.name,
            description: currentItem.description,
          },
          unit_amount: totalPrice * 100,
        },
        quantity: 1,
      },
    ],
    metadata: {
      rentingId,
    },
    payment_method_types: ['promptpay'],
    mode: 'payment',
    success_url: `http://localhost:3000/payment/?success=true`,
    cancel_url: `http://localhost:3000/payment/?canceled=true`,
  })

  res.send(session)
}
