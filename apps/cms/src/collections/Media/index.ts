/* eslint-disable turbo/no-undeclared-env-vars */
import { S3UploadCollectionConfig } from 'payload-s3-upload'

import { isAdminOrCreatedByUser } from '../../access'
import { API_URL, BUCKET_NAME } from '../../common/env'

export const Media: S3UploadCollectionConfig = {
  slug: 'medias',
  upload: {
    staticURL: `${API_URL}/images`,
    disableLocalStorage: true,
    s3: {
      bucket: BUCKET_NAME,
      prefix: 'images/',
      commandInput: {
        ACL: 'public-read',
      },
    },
    adminThumbnail: ({ doc }) => `${API_URL}/images/${doc.filename}`,
  },
  access: {
    read: isAdminOrCreatedByUser,
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
        afterRead: [({ data: doc }) => `${API_URL}/images/${doc.filename}`],
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
