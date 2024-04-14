import { CollectionConfig } from 'payload/types'

import { isAdminOrSelf } from '../../access'

export const Item: CollectionConfig = {
  slug: 'items',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    update: isAdminOrSelf,
    create: isAdminOrSelf,
    delete: () => true,
    readVersions: isAdminOrSelf,
  },
  versions: {
    drafts: true,
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
      type: 'textarea',
      name: 'description',
      label: {
        en: 'Description',
        th: 'คำอธิบาย',
      },
    },
    {
      type: 'relationship',
      name: 'image',
      relationTo: 'medias',
      hasMany: true,
      required: true,
      maxDepth: 2,
    },
    {
      type: 'number',
      name: 'price',
      label: {
        en: 'Price',
        th: 'ราคา',
      },
    },
    {
      type: 'date',
      name: 'availableAt',
      label: {
        en: 'Available At',
        th: 'วันที่เปิดขาย',
      },
    },
    {
      type: 'number',
      name: 'period',
      label: {
        en: 'Period',
        th: 'ระยะเวลา',
      },
    },
    {
      type: 'select',
      name: 'periodType',
      options: [
        { label: 'Days', value: 'days' },
        { label: 'Weeks', value: 'weeks' },
        { label: 'Months', value: 'months' },
        { label: 'Years', value: 'years' },
      ],
      defaultValue: 'weeks',
    },
    {
      type: 'select',
      name: 'rentingStatus',
      label: {
        en: 'Renting Status',
        th: 'สถานะการเช่า',
      },
      options: [
        {
          label: 'Available',
          value: 'available',
        },
        {
          label: 'Unavailable',
          value: 'unavailable',
        },
        {
          label: 'Negotiating',
          value: 'negotiating',
        },
      ],
    },
    {
      type: 'relationship',
      name: 'tags',
      label: {
        en: 'Tags',
        th: 'แท็ก',
      },
      relationTo: 'tags',
      hasMany: true,
      maxDepth: 2,
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
    {
      type: 'number',
      name: 'rating',
      min: 0,
      max: 5,
      label: {
        en: 'Rating',
        th: 'คะแนน',
      },
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
    {
      name: 'advertise',
      type: 'group',
      fields: [
        {
          type: 'select',
          name: 'status',
          defaultValue: 'inactive',
          options: [
            {
              label: 'Active',
              value: 'active',
            },
            {
              label: 'Waiting for Payment',
              value: 'waiting_for_payment',
            },
            {
              label: 'Inactive',
              value: 'inactive',
            },
          ],
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
  ],
}
