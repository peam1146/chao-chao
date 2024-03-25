import { CollectionConfig } from 'payload/types'

import { isAdminOrSelf } from '../../access'
import { afterDelete } from './hooks/afterDelete'
import { syncCollections } from './hooks/syncCollections'
import { syncTotalPrice } from './hooks/syncTotalPrice'

export const Renting: CollectionConfig = {
  slug: 'renting',
  admin: {
    useAsTitle: 'createdAt',
    defaultColumns: ['createdAt'],
  },
  hooks: {
    afterChange: [syncCollections, syncTotalPrice],
    afterDelete: [afterDelete],
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
    readVersions: isAdminOrSelf,
  },
  timestamps: true,
  fields: [
    //ถูก request โดย
    {
      name: 'rentedBy',
      type: 'group',
      fields: [
        {
          name: 'user',
          type: 'relationship',
          defaultValue: ({ user }) => user.id,
          relationTo: 'users',
          hasMany: false,
          maxDepth: 3,
        },
      ],
    },
    //request ไปที่
    {
      name: 'rentedTo',
      type: 'group',
      fields: [
        {
          name: 'user',
          type: 'relationship',
          relationTo: 'users',
          hasMany: false,
          maxDepth: 3,
        },
        {
          name: 'item',
          type: 'relationship',
          relationTo: 'items',
          hasMany: false,
          maxDepth: 3,
        },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'PENDING' },
        { label: 'Processing', value: 'PROCESSING' },
        { label: 'Completed', value: 'COMPLETED' },
      ],
    },
    {
      name: 'totalPrice',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'rentalFee',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'insuranceFee',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'deliveryFee',
      type: 'number',
      defaultValue: 0,
    },
    {
      type: 'relationship',
      name: 'file',
      relationTo: 'medias',
      hasMany: false,
      maxDepth: 3,
    },
    {
      type: 'relationship',
      name: 'createdBy',
      relationTo: 'users',
      defaultValue: ({ user }) => user.id,
      required: true,
      hidden: false,
      maxDepth: 3,
    },
  ],
}
