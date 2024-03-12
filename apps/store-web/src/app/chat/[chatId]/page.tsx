'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { socket } from '@/lib/socket'
import { useParams } from 'next/navigation'

interface IMsgDataTypes {
  chatId: String
  user: String
  msg: String
  time: String
}

export default function ChatRoom() {
  const [currentMsg, setCurrentMsg] = useState('')
  const [chat, setChat] = useState<IMsgDataTypes[]>([])

  const { chatId } = useParams<{ chatId: string }>()

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentMsg !== '') {
      const msgData: IMsgDataTypes = {
        chatId: chatId,
        user: socket.id!,
        msg: currentMsg,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
      }
      socket.emit('send_msg', msgData)
      setCurrentMsg('')
    }
  }

  useEffect(() => {
    socket.on('receive_msg', (data: IMsgDataTypes) => {
      setChat((current) => [...current, data])
    })
  }, [socket])

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="border border-white p-4">
        <div className="mb-auto">
          <p>
            Name: <b>{socket.id}</b> and Room Id: <b>{chatId}</b>
          </p>
        </div>
        <div>
          {chat.map(({ chatId, user, msg, time }, key) => (
            <div key={key} className="flex items-center gap-1 flex-row-reverse">
              <span className="h-8 w-8 rounded-full border border-white flex justify-center items-center bg-gray-300 text-black">
                {user.charAt(0)}
              </span>
              <h3>{msg}</h3>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={(e) => sendData(e)} className="flex gap-2">
            <Input
              type="text"
              value={currentMsg}
              placeholder="Type your message.."
              onChange={(e) => setCurrentMsg(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
