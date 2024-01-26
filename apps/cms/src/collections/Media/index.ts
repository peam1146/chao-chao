import path from 'path'
import { CollectionConfig } from 'payload/types'

import { admin } from './access/admin'
import { adminAndSelf } from './access/adminAndSelf'

const Media: CollectionConfig = {
  slug: 'medias',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
  },
  access: {
    admin: adminAndSelf,
  },
  fields: [
    {
      type: 'text',
      name: 'name',
    },
    {
      type: 'text',
      name: 'alt',
    },
    {
      type: 'relationship',
      relationTo: 'users',
      name: 'createdBy',
      access: {
        create: admin,
        read: admin,
        update: admin,
      },
      defaultValue: ({ user }) => user.id,
      required: true,
    },
  ],
}

export default Media
