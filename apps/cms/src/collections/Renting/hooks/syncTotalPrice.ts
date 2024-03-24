import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Renting } from '../../../payload-types'

export const syncTotalPrice: AfterChangeHook<Renting> = async ({ req, doc }) => {
  const { deliveryFee, insuranceFee, rentalFee } = doc

  const totalPrice = deliveryFee + insuranceFee + rentalFee

  await req.payload.update({
    collection: 'renting',
    id: doc.id,
    data: {
      totalPrice: totalPrice,
    },
  })
}
