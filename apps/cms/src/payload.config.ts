/* eslint-disable turbo/no-undeclared-env-vars */
import { S3Client } from '@aws-sdk/client-s3'
import { viteBundler } from '@payloadcms/bundler-vite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import stripePlugin from '@payloadcms/plugin-stripe'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { openapi, redoc } from 'payload-oapi'
import s3Upload from 'payload-s3-upload'
import { buildConfig } from 'payload/config'

import { Item, Media, Renting, Tag, Users } from './collections'
import { Chatroom, Message } from './collections'
import { Report } from './collections/Report'
import { Review } from './collections/Review'
import { ACCESS_KEY_ID, REGION, SECRET_KEY_ID } from './common/env'
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
    vite: (config) => {
      return {
        ...config,
        build: {
          rollupOptions: {
            external: ['@payloadcms/plugin-stripe'],
          },
        },
      }
    },
  },
  // i18n: {
  //   fallbackLng: 'en', // default
  //   debug: true, // default
  //   resources: i18n(),
  // },
  editor: slateEditor({}),
  collections: [Users, Item, Media, Tag, Chatroom, Message, Renting, Review, Report],
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
        region: REGION,
        credentials: {
          accessKeyId: ACCESS_KEY_ID,
          secretAccessKey: SECRET_KEY_ID,
        },
      })
    ),
    stripePlugin({
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      stripeWebhooksEndpointSecret: process.env.STRIPE_WEBHOOKS_ENDPOINT_SECRET,
      isTestKey: Boolean(process.env.PAYLOAD_PUBLIC_STRIPE_IS_TEST_KEY),
      webhooks: {
        'checkout.session.completed': async ({ event, stripe, stripeConfig }) => {
          console.log('checkout.session.completed', event)
        },
      },
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
