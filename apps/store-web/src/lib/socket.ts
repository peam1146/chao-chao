import { io } from 'socket.io-client'

const URL = 'http://api.chaochao.vishnu20.com'

export const socket = io(URL, {
  autoConnect: false,
})
