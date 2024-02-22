import { S3UploadCollectionConfig } from 'payload-s3-upload'
import { User } from 'payload/generated-types'

import { checkRole, isAdmin } from '../../access/'
import { API_URL, BUCKET_NAME } from '../../common/env'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'

export const Users: S3UploadCollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    hidden: ({ user }) => !checkRole(['admin'], user as unknown as User),
  },
  access: {
    update: () => true,
    delete: isAdmin,
    unlock: isAdmin,
    create: () => true,
    read: () => true,
  },
  // upload: {
  //   staticURL: `${API_URL}/images`,
  //   disableLocalStorage: true,
  //   s3: {
  //     bucket: BUCKET_NAME,
  //     prefix: 'images/',
  //     commandInput: {
  //       ACL: 'public-read',
  //     },
  //   },
  //   adminThumbnail: ({ doc }) => `${API_URL}/images/${doc.filename}`,
  // },
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
      type: 'text',
      name: 'province',
      label: {
        th: 'จังหวัด',
        en: 'province',
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
      name: 'url',
      type: 'text',
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [({ data: doc }) => (doc ? `${API_URL}/images/${doc.filename}` : null)],
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
