import { Access } from 'payload/types'

import { checkRole } from './check-role'

export const isAdminOrCreatedByUser: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin'], user)) {
      return true
    }

    return {
      createdBy: {
        equals: user.id,
      },
    }
  }

  return false
}
