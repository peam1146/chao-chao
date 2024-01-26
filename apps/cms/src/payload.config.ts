import { viteBundler } from '@payloadcms/bundler-vite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import { openapi, redoc } from 'payload-oapi'
import { buildConfig } from 'payload/config'

import Item from './collections/Item'
import Media from './collections/Media'
import Users from './collections/User'
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
  editor: slateEditor({}),
  collections: [Users, Item, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    openapi({ openapiVersion: '3.0', metadata: { title: 'Dev API', version: '0.0.1' } }),
    redoc({}),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
