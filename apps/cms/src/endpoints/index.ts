import { Endpoint } from 'payload/config'

import { createCheckoutSession } from './create-payment-intent'
import { customersProxy } from './customers'
import { webhook } from './webhook'

const endpoints: Endpoint[] = [
  {
    path: '/stripe/customers',
    method: 'get',
    handler: customersProxy,
  },
  {
    path: '/stripe/checkout-session',
    method: 'post',
    handler: createCheckoutSession,
  },
  {
    path: '/stripe/webhook',
    method: 'post',
    handler: webhook,
  },
  // {
  //   path: '/test',
  //   method: 'get',
  //   handler: async (req, res) => {
  //     await req.payload.update({
  //       collection: 'renting',
  //       id: 1,
  //       data: {
  //         status: 'COMPLETED',
  //       },
  //     })
  //   },
  // },
]
export default endpoints
