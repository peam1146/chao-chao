/* eslint-disable turbo/no-undeclared-env-vars */
import dotenv from 'dotenv'

import { S3Client } from '@aws-sdk/client-s3'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import stripePlugin from '@payloadcms/plugin-stripe'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { openapi, swaggerUI } from 'payload-oapi'
import s3Upload from 'payload-s3-upload'
import { buildConfig } from 'payload/config'

import { Chatroom, Item, Media, Message, Renting, Tag, Users } from './collections'
import { Report } from './collections/Report'
import { Review } from './collections/Review'
import { ACCESS_KEY_ID, REGION, SECRET_KEY_ID } from './common/env'
import { Logo } from './components/Logo'
import endpoints from './endpoints'

const mockModulePath = path.resolve(__dirname, './mock/endpoints.js')

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
})

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      graphics: {
        Logo: Logo,
      },
    },
    webpack: (config) => {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
            url: false,
            crypto: false,
            http: false,
            https: false,
          },
          alias: {
            ...config.resolve.alias,
            [path.resolve(__dirname, './endpoints')]: mockModulePath,
            [path.resolve(__dirname, 'collections/User/hooks/createStripeCustomer')]:
              mockModulePath,
            [path.resolve(__dirname, 'collections/Item/hooks/beforeChange')]: mockModulePath,
          },
        },
      }
    },
  },
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
    swaggerUI({}),
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
        'customer.created': ({ event, stripe }) => {
          console.log('customer.created', event)
        },
      },
    }),
  ],
  endpoints: endpoints,
  rateLimit: {
    window: 5 * 60 * 1000, // 5 minutes,
    max: 5000,
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
