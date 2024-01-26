import { CollectionConfig } from 'payload/types'

const Item: CollectionConfig = {
  slug: 'items',
  admin: {
    useAsTitle: 'name',
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
  ],
}

export default Item
