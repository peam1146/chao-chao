import { User } from 'payload/generated-types'
import { CollectionConfig } from 'payload/types'

import { isAdmin } from '../../access'
import { checkRole } from '../../access/check-role'

export const Chatroom: CollectionConfig = {
  slug: 'chatroom',
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
      type: 'relationship',
      relationTo: 'users',
      name: 'user1_id',
      required: true,
      hidden: true,
    },
    {
      type: 'relationship',
      relationTo: 'users',
      name: 'user2_id',
      required: true,
      hidden: true,
    },
  ],
}
