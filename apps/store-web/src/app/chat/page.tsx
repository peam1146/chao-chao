'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { socket } from '@/lib/socket'
import Link from 'next/link'

const ChatPage = () => {
  const [chatId, setChatId] = useState('')

  const handleJoin = () => {
    if (chatId !== '') {
      socket.connect()
      socket.emit('join_room', chatId)
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-4 items-center justify-center py-12">
        <Input
          className="w-fit"
          type="text"
          placeholder="Chat Id"
          onChange={(e) => setChatId(e.target.value)}
        />
        <Link href={`/chat/${chatId}`}>
          <Button onClick={() => handleJoin()}>Join</Button>
        </Link>
      </div>
    </div>
  )
}

export default ChatPage
