import { CollectionConfig } from 'payload/types'

import { admin } from './access/admin'
import { adminAndSelf } from './access/adminAndSelf'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // read: adminAndSelf,
    // admin: admin,
  },
  fields: [
    {
      label: {
        th: 'บทบาท',
        en: 'Roles',
      },
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      access: {
        update: admin,
      },
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      required: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Renter',
          value: 'renter',
        },
        {
          label: 'Lessor',
          value: 'lessor',
        },
      ],
    },
  ],
}

export default Users
