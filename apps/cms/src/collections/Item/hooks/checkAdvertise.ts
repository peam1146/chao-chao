import type { BeforeReadHook } from 'payload/dist/collections/config/types'

import type { Item } from '../../../payload-types'

export const CheckAdvertise: BeforeReadHook<Item> = async ({ req, doc }) => {
  const { advertise, id } = doc

  if (advertise.status === 'inactive') return

  if (new Date(advertise.endDate) < new Date()) {
    await req.payload.update({
      collection: 'items',
      id: id,
      data: {
        advertise: {
          status: 'inactive',
          startDate: null,
          endDate: null,
          price: null,
        },
      },
    })
    return
  }
}
