/* eslint-disable turbo/no-undeclared-env-vars */
import express from "express";
import payload from "payload";

import nodemailer from "nodemailer";
require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
	res.redirect("/admin");
});

async function start() {
	const transport = nodemailer.createTransport({
		service: process.env.SMTP_SERVICE,
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		express: app,
		onInit: async () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
		},
		email: {
			fromName: "inwpuun",
			fromAddress: "inwpuun1@gmail.com",
			transport,
		},
	});

	app.listen(process.env.PORT, () => {
		console.log(`Server is running on port ${process.env.PORT}`);
	});
}

start();
