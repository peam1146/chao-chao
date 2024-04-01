import { User } from 'payload/generated-types'
import { CollectionConfig } from 'payload/types'

import { checkRole, isAdmin } from '../../access/'
import createStripeCustomer from './hooks/createStripeCustomer'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'
import { CustomerSelect } from './ui/CustomerSelect'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    hidden: ({ user }) => !checkRole(['admin'], user as unknown as User),
  },
  hooks: {
    beforeChange: [createStripeCustomer],
  },
  access: {
    update: () => true,
    delete: isAdmin,
    unlock: isAdmin,
    create: () => true,
    read: () => true,
  },

  fields: [
    {
      type: 'relationship',
      name: 'profileImage',
      relationTo: 'medias',
      access: {
        create: () => true,
        read: () => true,
        update: () => true,
      },
      required: false,
      maxDepth: 3,
    },
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
      type: 'text',
      name: 'firstName',
      label: {
        th: 'ชื่อจริง',
        en: 'firstName',
      },
      required: false,
    },
    {
      type: 'text',
      name: 'lastName',
      label: {
        th: 'นามสกุล',
        en: 'lastName',
      },
      required: false,
    },
    {
      type: 'textarea',
      name: 'bio',
      label: {
        th: 'คำอธิบาย',
        en: 'bio',
      },
      required: false,
    },
    {
      type: 'number',
      name: 'rating',
      label: {
        th: 'คะแนน',
        en: 'rating',
      },
      required: false,
      max: 5,
    },
    {
      type: 'text',
      name: 'province',
      label: {
        th: 'จังหวัด',
        en: 'province',
      },
      required: false,
    },
    {
      name: 'stripeCustomerID',
      label: 'Stripe Customer',
      type: 'text',
      access: {
        read: ({ req: { user } }) => checkRole(['admin'], user),
      },
      admin: {
        position: 'sidebar',
        components: {
          Field: CustomerSelect,
        },
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
    {
      name: 'requestsMade',
      label: 'Requests Made',
      type: 'relationship',
      relationTo: 'renting',
      hasMany: true,
      unique: true,
      maxDepth: 4,
    },
    {
      name: 'requestsReceived',
      label: 'Requests Received',
      type: 'relationship',
      relationTo: 'renting',
      hasMany: true,
      unique: true,
      maxDepth: 4,
    },
    {
      type: 'relationship',
      name: 'review',
      relationTo: 'reviews',
      hasMany: true,
      maxDepth: 4,
      access: {
        update: () => true,
      },
    },
  ],
}
