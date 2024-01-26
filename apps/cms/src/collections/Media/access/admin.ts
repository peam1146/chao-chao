import { FieldAccess } from 'payload/types'

import { checkRole } from '../../../utils/access/check-role'

export const admin: FieldAccess = ({ req: { user } }) => {
  if (user && checkRole(['admin'], user)) {
    return true
  }

  return false
}
