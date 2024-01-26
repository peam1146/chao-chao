import { User } from 'payload/generated-types'
import { CollectionConfig } from 'payload/types'

import { isAdmin } from '../../access'
import { checkRole } from '../../access/check-role'

export const Tag: CollectionConfig = {
  slug: 'tags',
  access: {
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'name',
    hidden: ({ user }) => !checkRole(['admin'], user as unknown as User),
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      label: {
        en: 'Name',
        th: 'ชื่อ',
      },
      required: true,
    },
    {
      type: 'text',
      name: 'alt',
      label: {
        en: 'Alt',
        th: 'คำอธิบาย',
      },
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
