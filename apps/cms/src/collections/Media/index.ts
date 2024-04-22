/* eslint-disable turbo/no-undeclared-env-vars */
import { S3UploadCollectionConfig } from 'payload-s3-upload'

export const Media: S3UploadCollectionConfig = {
  slug: 'medias',
  upload: {
    staticURL: `${process.env.PAYLOAD_PUBLIC_API_URL}/images`,
    disableLocalStorage: true,
    s3: {
      bucket: process.env.PAYLOAD_PUBLIC_BUCKET_NAME,
      prefix: 'images/',
      commandInput: {
        ACL: 'public-read',
      },
    },
    adminThumbnail: ({ doc }) => `${process.env.PAYLOAD_PUBLIC_API_URL}/images/${doc.filename}`,
  },
  access: {
    read: () => true,
    create: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      label: {
        en: 'Name',
        th: 'ชื่อ',
      },
    },
    {
      type: 'text',
      name: 'alt',
      label: {
        en: 'Alt',
        th: 'คำอธิบาย',
      },
    },
    {
      name: 'url',
      type: 'text',
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          ({ data: doc }) => `${process.env.PAYLOAD_PUBLIC_API_URL}/images/${doc.filename}`,
        ],
      },
    },
    {
      type: 'relationship',
      relationTo: 'users',
      name: 'createdBy',
      defaultValue: ({ user }) => user.id,
      required: true,
      hidden: true,
    },
  ],
}
