import { Endpoint } from 'payload/config'

import { customersProxy } from './customers'

const endpoints: Endpoint[] = [
  {
    path: '/stripe/customers',
    method: 'get',
    handler: customersProxy,
  },
]
export default endpoints
