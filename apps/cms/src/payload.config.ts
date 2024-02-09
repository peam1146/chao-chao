/* eslint-disable turbo/no-undeclared-env-vars */
import { viteBundler } from "@payloadcms/bundler-vite";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { openapi, redoc } from "payload-oapi";
import { buildConfig } from "payload/config";

import { Item, Media, Tag, Users } from "./collections";
import { Logo } from "./components/Logo";
import { S3Client } from "@aws-sdk/client-s3";
import s3Upload from "payload-s3-upload";

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
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	plugins: [
		payloadCloud(),
		openapi({
			openapiVersion: "3.0",
			metadata: { title: "Dev API", version: "0.0.1" },
		}),
		redoc({}),
		s3Upload(
			new S3Client({
				region: "ap-southeast-2",
				credentials: {
					accessKeyId: process.env.S3_ACCESS_KEY_ID,
					secretAccessKey: process.env.S3_SECRET_KEY_ID,
				},
			}),
		),
	],
	db: postgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URI,
		},
	}),
	email: {
		transportOptions: {
			host: process.env.SMTP_HOST,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
			port: Number(process.env.SMTP_HOST),
			secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false (the default) for 587 and others
			requireTLS: true,
		},
		fromName: "hello",
		fromAddress: "hello@example.com",
	},
});
