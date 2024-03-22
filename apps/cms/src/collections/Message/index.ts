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
      hidden: true,
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
      defaultValue: ({ user }) => user.id,
      required: true,
      hidden: true,
    },
    {
      type: 'relationship',
      relationTo: 'chatroom',
      name: 'room',
      required: true,
      hidden: true,
    },
  ],
}
