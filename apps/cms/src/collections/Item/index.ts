import { CollectionConfig } from 'payload/types'

import { isAdminOrSelf } from '../../access'
import { beforeProductChange } from './hooks/beforeChange'
import { ProductSelect } from './ui/ProductSelect'

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
  hooks: {
    beforeChange: [beforeProductChange],
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
      type: 'date',
      name: 'start',
      label: {
        en: 'Start Date',
        th: 'วันที่เริ่มให้เช่า',
      },
    },
    {
      type: 'date',
      name: 'end',
      label: {
        en: 'End Date',
        th: 'วันที่สิ้นสุดให้เช่า',
      },
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
      name: 'stripeProductID',
      label: 'Stripe Product',
      type: 'text',
      admin: {
        components: {
          Field: ProductSelect,
        },
      },
    },
	{
type: 'relationship',
      name: 'review',
      relationTo: 'reviews',
      hasMany: true,
},
  ],
}
