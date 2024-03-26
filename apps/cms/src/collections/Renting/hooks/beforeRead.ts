import type { BeforeReadHook } from 'payload/dist/collections/config/types'

import type { Renting } from '../../../payload-types'

export const beforeRead: BeforeReadHook<Renting> = async ({ req, doc }) => {
  const { endDate, id: requestId } = doc

  if (new Date(endDate) < new Date()) {
    await req.payload.delete({
      collection: 'renting',
      id: requestId,
    })
  }
}
