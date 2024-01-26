import { Media } from 'payload/generated-types'
import { FieldAccess } from 'payload/types'

import { checkRole } from './check-role'

export const isAdmin: FieldAccess<Media> = ({ req: { user } }) => {
  if (user && checkRole(['admin'], user)) {
    return true
  }

  return false
}
