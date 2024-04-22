import { io } from 'socket.io-client'

const URL = 'https://api.chaochao.vishnu20.com'

export const socket = io(URL, {
  autoConnect: false,
})
