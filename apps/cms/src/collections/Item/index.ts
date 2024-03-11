import { CollectionConfig } from 'payload/types'

import { isAdminOrSelf } from '../../access'

export const Item: CollectionConfig = {
  slug: 'items',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    create: isAdminOrSelf,
    delete: isAdminOrSelf,
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
      type: 'upload',
      name: 'image',
      relationTo: 'medias',
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
      maxRows: 2,
    },
    {
      type: 'relationship',
      name: 'createdBy',
      relationTo: 'users',
      defaultValue: ({ user }) => user.id,
      required: true,
      hidden: true,
    },
    {
      type: 'number',
      name: 'rating',
      label: {
        en: 'Rating',
        th: 'คะแนน',
      },
      required: false,
    },
    {
      type: 'number',
      name: 'price',
      label: {
        en: 'Price',
        th: 'ราคา',
      },
      required: true,
    },
    {
      type: 'date',
      name: 'start',
      label: {
        en: 'Start Date',
        th: 'วันที่เริ่มให้เช่า',
      },
      required: true,
    },
    {
      type: 'date',
      name: 'end',
      label: {
        en: 'End Date',
        th: 'วันที่สิ้นสุดให้เช่า',
      },
      required: true,
    },
  ],
}
