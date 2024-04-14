import { User } from 'payload/generated-types'
import { CollectionConfig } from 'payload/types'

import { isAdmin, isAdminOrSelf } from '../../access'
import { checkRole } from '../../access/check-role'

export const Payment: CollectionConfig = {
  slug: 'payment',
  access: {
    read: () => true,
    create: () => true,
    update: isAdmin,
    delete: isAdminOrSelf,
  },
  admin: {
    hidden: ({ user }) => !checkRole(['admin'], user as unknown as User),
  },
  fields: [
    {
      name: 'renting',
      type: 'group',
      fields: [
        {
          type: 'relationship',
          relationTo: 'renting',
          name: 'renting',
        },
      ],
    },
    {
      name: 'advertise',
      type: 'group',
      fields: [
        {
          type: 'relationship',
          relationTo: 'items',
          name: 'item',
        },
        {
          type: 'date',
          name: 'startDate',
          label: 'Start Date',
        },
        {
          type: 'date',
          name: 'endDate',
          label: 'End Date',
        },
        {
          type: 'number',
          name: 'price',
          label: 'Price',
        },
      ],
    },
    {
      type: 'select',
      name: 'type',
      options: [
        {
          label: 'renting',
          value: 'RENTING',
        },
        {
          label: 'advertise',
          value: 'ADVERTISE',
        },
      ],
    },
    {
      type: 'relationship',
      relationTo: 'users',
      name: 'createdBy',
      required: true,
    },
    {
      type: 'relationship',
      relationTo: 'users',
      name: 'payTo',
    },
  ],
}
