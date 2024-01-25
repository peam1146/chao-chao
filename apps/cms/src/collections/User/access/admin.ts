import { User } from 'payload/generated-types'
import { FieldAccess } from 'payload/types'

import { checkRole } from '../../../utils/access/check-role'

export const admin: FieldAccess<User> = ({ req: { user } }) => {
  if (user && checkRole(['admin'], user)) {
    return true
  }

  return false
}
