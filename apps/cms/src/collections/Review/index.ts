import { User } from 'payload/generated-types'
import { CollectionConfig } from 'payload/types'

import { isAdmin } from '../../access'
import { checkRole } from '../../access/check-role'

export const Review: CollectionConfig = {
  slug: 'reviews',
  access: {
    read: () => true,
    create: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [], //ไปอัพเดทค่าใน collection user หรือ item ตาม option จะ review อะไร
  },
  admin: {
    hidden: ({ user }) => !checkRole(['admin'], user as unknown as User),
  },
  fields: [
    {
      type: 'text',
      name: 'description',
      required: true,
    },
    {
      type: 'number',
      name: 'rating',
      required: true,
      min: 0,
      max: 5,
    },
    {
      type: 'relationship',
      relationTo: 'users',
      name: 'reviewToUser',
    },
    {
      type: 'relationship',
      relationTo: 'items',
      name: 'reviewToItem',
    },
    {
      name: 'option',
      type: 'select',
      options: [
        { label: 'item', value: 'ITEM' },
        { label: 'user', value: 'USER' },
      ],
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
