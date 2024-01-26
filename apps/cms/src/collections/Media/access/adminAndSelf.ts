import { FieldAccess } from 'payload/types'

import { checkRole } from '../../../utils/access/check-role'

export const adminAndSelf: FieldAccess = ({ req: { user } }) => {
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
