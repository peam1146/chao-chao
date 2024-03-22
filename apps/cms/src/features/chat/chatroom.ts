import { Payload } from 'payload'

export class Chatroom {
  constructor(private payload: Payload) {}

  async createChatroom(user1Id: number, user2Id: number) {
    return this.payload.create({
      collection: 'chatroom',
      data: {
        user1_id: user1Id,
        user2_id: user2Id,
      },
    })
  }

  async getChatroom(user1Id: string, user2Id: string) {
    return this.payload.find({
      collection: 'chatroom',
      where: {
        or: [
          {
            user1_id: {
              equals: user1Id,
            },
            user2_id: {
              equals: user2Id,
            },
          },
          {
            user1_id: {
              equals: user2Id,
            },
            user2_id: {
              equals: user1Id,
            },
          },
        ],
      },
    })
  }
}
