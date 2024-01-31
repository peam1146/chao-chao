/* eslint-disable turbo/no-undeclared-env-vars */
import { S3UploadCollectionConfig } from "payload-s3-upload";

import { isAdminOrCreatedByUser } from "../../access";

export const Media: S3UploadCollectionConfig = {
	slug: "medias",
	upload: {
		staticURL: "/assets",
		staticDir: "assets",
		disableLocalStorage: true,
		s3: {
			bucket: "chaochao-bucket",
			prefix: "images/xyz", // files will be stored in bucket folder images/xyz
			// prefix: ({ doc }) => `assets/${doc.type}`, // dynamic prefixes are possible too
			commandInput: {
				// optionally, use here any valid PutObjectCommandInput property
				// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/putobjectcommandinput.html
				ACL: "public-read",
			},
		},
		adminThumbnail: ({ doc }) =>
			`https://chaochao-bucket.s3-ap-southeast-2.amazonaws.com/images/xyz/${doc.filename}`,
	},
	access: {
		read: isAdminOrCreatedByUser,
	},
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			type: "text",
			name: "alt",
			label: {
				en: "Alt",
				th: "คอธบาย",
			},
		},
		{
			name: "url",
			type: "text",
			access: {
				create: () => false,
			},
			admin: {
				disabled: true,
			},
			hooks: {
				afterRead: [
					({ data: doc }) =>
						`https://chaochao-bucket.s3-ap-southeast-2.amazonaws.com/images/${doc.type}/${doc.filename}`,
				],
			},
		},
		{
			type: "relationship",
			relationTo: "users",
			name: "createdBy",
			defaultValue: ({ user }) => user.id,
			required: true,
			hidden: true,
		},
	],
};
