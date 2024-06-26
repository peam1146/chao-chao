import { User } from 'payload/generated-types'
import { CollectionConfig } from 'payload/types'

import { isAdmin } from '../../access'
import { checkRole } from '../../access/check-role'

export const Message: CollectionConfig = {
  slug: 'message',
  access: {
    read: () => true,
    create: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    hidden: ({ user }) => !checkRole(['admin'], user as unknown as User),
  },
  fields: [
    {
      type: 'text',
      name: 'message',
    },
    {
      type: 'date',
      name: 'createdAt',
      required: true,
      defaultValue: () => new Date(),
    },
    {
      type: 'relationship',
      relationTo: 'users',
      name: 'createdBy',
      required: true,
    },
    {
      type: 'relationship',
      relationTo: 'chatroom',
      name: 'room',
      required: true,
    },
  ],
}
