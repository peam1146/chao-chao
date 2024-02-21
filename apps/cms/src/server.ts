/* eslint-disable turbo/no-undeclared-env-vars */
import cors from 'cors'
import express from 'express'
import nodemailer from 'nodemailer'
import payload from 'payload'

require('dotenv').config()
const app = express()

app.use(cors())

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

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
  })

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
    email: {
      fromName: process.env.SMTP_USERNAME,
      fromAddress: process.env.SMTP_USER,
      transport,
    },
  })

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  })
}

start()
