/* eslint-disable turbo/no-undeclared-env-vars */
import cors from 'cors'
import express from 'express'
import http from 'http'
import nodemailer from 'nodemailer'
import payload from 'payload'
import { Server } from 'socket.io'

require('dotenv').config()
const app = express()

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

app.use(cors())

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id)
  socket.on('join_room', (chatId) => {
    socket.join(chatId)
    console.log(`user with id-${socket.id} joined room - ${chatId}`)
  })
  socket.on('send_msg', async (data) => {
    const newMessage = {
      message: data.message,
      createdBy: data.createdBy,
      createdAt: new Date(),
    }

    socket.emit('receive_msg', newMessage)
    socket.to(data.room).emit('receive_msg', newMessage)

    const { id } = await payload.create({
      collection: 'message',
      data: {
        message: data.message,
        room: data.room,
        createdBy: data.createdBy,
      },
    })

    await payload.update({
      collection: 'chatroom',
      id: data.room,
      data: {
        lastMessage: id,
      },
    })
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id)
  })
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

  server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
  })
}

start()
