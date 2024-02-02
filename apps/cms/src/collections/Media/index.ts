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
			prefix: ({ doc }) => `images/${doc.type}`,
			commandInput: {
				ACL: "public-read",
			},
		},
		adminThumbnail: ({ doc }) =>
			`${process.env.S3_API_URL}/images/xyz/${doc.filename}`,
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
						`${process.env.S3_API_URL}/images/${doc.type}/${doc.filename}`,
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
