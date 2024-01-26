import { User } from 'payload/generated-types'
import { CollectionConfig } from 'payload/types'

import { checkRole, isAdmin, isAdminOrSelf } from '../../access/'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    hidden: ({ user }) => !checkRole(['admin'], user as unknown as User),
  },
  access: {
    update: isAdminOrSelf,
    delete: isAdmin,
    unlock: isAdmin,
  },
  fields: [
    {
      type: 'text',
      name: 'phone',
      label: {
        th: 'เบอร์โทรศัพท์',
        en: 'Phone',
      },
      required: true,
      validate: (value) => {
        if (!/^[0-9]{10}$/.test(value)) {
          return "Phone number isn't valid"
        }
        return true
      },
    },
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
        update: isAdmin,
      },
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      required: true,
      options: [
        {
          label: {
            th: 'ผู้ดูแลระบบ',
            en: 'Admin',
          },
          value: 'admin',
        },
        {
          label: {
            th: 'ผู้ใช้งานทั่วไป',
            en: 'User',
          },
          value: 'User',
        },
      ],
    },
  ],
}
