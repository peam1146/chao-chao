import { Payload } from 'payload'

export class Message {
  constructor(private payload: Payload) {}

  async createMessage(message: string, createdBy: number, room: number) {
    return this.payload.create({
      collection: 'message',
      data: {
        message,
        createdBy,
        room,
      },
    })
  }

  async getMessages(room: number) {
    return this.payload.find({
      collection: 'message',
      where: {
        room: {
          equals: room,
        },
      },
    })
  }
}
