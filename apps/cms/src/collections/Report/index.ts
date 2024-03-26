import { User } from 'payload/generated-types'
import { CollectionConfig } from 'payload/types'

import { isAdmin } from '../../access'
import { checkRole } from '../../access/check-role'

export const Report: CollectionConfig = {
  slug: 'report',
  access: {
    read: isAdmin,
    create: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    hidden: ({ user }) => !checkRole(['admin'], user as unknown as User),
  },
  fields: [
    {
      type: 'textarea',
      name: 'reportMessage',
      required: true,
    },
    {
      type: 'relationship',
      relationTo: 'users',
      name: 'createdBy',
      defaultValue: ({ user }) => user.id,
      required: true,
      hidden: true,
    },
  ],
}
