import { Access } from 'payload/config'
import { User } from 'payload/generated-types'

import { checkRole } from '../../../utils/access/check-role'

export const adminAndSelf: Access<User> = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin'], user)) {
      return true
    }

    return {
      id: {
        equals: user.id,
      },
    }
  }

  return false
}
