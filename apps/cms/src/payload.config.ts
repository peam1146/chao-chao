/* eslint-disable turbo/no-undeclared-env-vars */
import { S3Client } from '@aws-sdk/client-s3'
import { viteBundler } from '@payloadcms/bundler-vite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { openapi, redoc } from 'payload-oapi'
import s3Upload from 'payload-s3-upload'
import { buildConfig } from 'payload/config'

import { Item, Media, Tag, Users } from './collections'
import { Logo } from './components/Logo'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
    components: {
      graphics: {
        Logo: Logo,
      },
    },
  },
  // i18n: {
  //   fallbackLng: 'en', // default
  //   debug: true, // default
  //   resources: i18n(),
  // },
  editor: slateEditor({}),
  collections: [Users, Item, Media, Tag],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    openapi({
      openapiVersion: '3.0',
      metadata: { title: 'Dev API', version: '0.0.1' },
    }),
    redoc({}),
    s3Upload(
      new S3Client({
        region: 'ap-southeast-2',
        credentials: {
          accessKeyId: 'AKIAQ3EGTZ5MREDLP267',
          secretAccessKey: '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',
        },
      })
    ),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
