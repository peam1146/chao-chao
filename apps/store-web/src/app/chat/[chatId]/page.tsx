'use client'

import { useContext, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { socket } from '@/lib/socket'
import { cn } from '@/lib/utils'
import { ArrowLeft, PaperPlaneRight, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Maybe, mutationChatroomUpdateInput, resolve } from '../../../../gqty'
import { ChatContext } from '../layout'

const MessageRow = ({
  message,
  createdAt,
  createdBy,
  profileImage,
  me,
}: {
  message: string
  createdAt: Date
  createdBy: number
  profileImage: string
  me: number
}) => {
  return (
    <div className="flex w-full">
      <div className={cn('flex gap-2 w-full', createdBy === me && 'flex-row-reverse')}>
        {createdBy !== me && profileImage && (
          <Image
            src={profileImage}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full aspect-square h-10 object-cover"
          />
        )}
        <div
          className={cn(
            'rounded-lg bg-muted px-3 py-2 text-white max-w-[calc(50%-20px)]',
            createdBy === me ? 'rounded-tr-none bg-primary-hover' : 'rounded-tl-none'
          )}
        >
          {message}
        </div>
        <div className="flex items-end">
          <div className="text-light">
            {new Intl.DateTimeFormat('th-TH', {
              hour: '2-digit',
              minute: '2-digit',
            }).format(new Date(createdAt))}
          </div>
        </div>
        {createdBy === me && <div className="flex-1"></div>}
      </div>
    </div>
  )
}

type UserInfo = {
  id?: number | null
  firstName?: string | null
  lastName?: string | null
  profileImage?: string | null
}

type Message = {
  message?: string | null
  createdAt?: Date | null
  createdBy?: number | null
}

export default function ChatRoom() {
  const [currentMsg, setCurrentMsg] = useState('')
  const [currentRoom, setCurrentRoom] = useState<{
    id: Maybe<number | undefined>
    me: UserInfo
    user: UserInfo
  }>()
  const [messages, setMessages] = useState<Message[]>([])
  const { refetch } = useContext(ChatContext)

  useEffect(() => {
    ;(async () => {
      const { id: userId } = await resolve(({ query }) => {
        return {
          id: query.meUser?.user?.id,
        }
      })
      const { rooms } = await resolve(({ query }) => {
        return {
          rooms: query
            .Chatrooms({
              limit: 100,
              where: {
                OR: [
                  {
                    user1_id: {
                      equals: userId,
                    },
                    user2_id: {
                      equals: Number(chatId),
                    },
                  },
                  {
                    user2_id: {
                      equals: userId,
                    },
                    user1_id: {
                      equals: Number(chatId),
                    },
                  },
                ],
              },
            })
            ?.docs?.map((doc) => ({
              id: doc?.id,
              user1: {
                id: doc?.user1_id.id,
                firstName: doc?.user1_id.firstName,
                lastName: doc?.user1_id.lastName,
                profileImage: doc?.user1_id.profileImage?.url,
              },
              user2: {
                id: doc?.user2_id.id,
                firstName: doc?.user2_id.firstName,
                lastName: doc?.user2_id.lastName,
                profileImage: doc?.user2_id.profileImage?.url,
              },
            })),
        }
      })
      console.log('rooms', rooms)
      if (rooms?.length === 0 && Number(chatId) != userId) {
        const room = await resolve(
          ({ mutation }) => {
            const doc = mutation.createChatroom({
              data: {
                user1_id: userId,
                user2_id: Number(chatId),
              },
              draft: false,
            })
            return {
              id: doc?.id,
              user1: {
                id: doc?.user1_id.id,
                firstName: doc?.user1_id.firstName,
                lastName: doc?.user1_id.lastName,
                profileImage: doc?.user1_id.profileImage?.url,
              },
              user2: {
                id: doc?.user2_id.id,
                firstName: doc?.user2_id.firstName,
                lastName: doc?.user2_id.lastName,
                profileImage: doc?.user2_id.profileImage?.url,
              },
            }
          },
          {
            cachePolicy: 'no-store',
          }
        )
        setCurrentRoom({
          id: room?.id,
          me: room?.user1.id === userId ? room?.user1 : room?.user2,
          user: room?.user1.id === userId ? room?.user2 : room?.user1,
        })
      } else {
        const { messages } = await resolve(({ query }) => {
          return {
            messages: query
              .Messages({
                limit: 100,
                where: {
                  room: {
                    equals: rooms![0]?.id,
                  },
                },
              })
              ?.docs?.map((doc) => ({
                message: doc?.message,
                createdAt: new Date(doc?.createdAt ?? 0),
                createdBy: doc?.createdBy.id,
              })),
          }
        })
        setMessages(messages ?? [])
        setCurrentRoom({
          id: rooms![0]?.id,
          me: rooms![0]?.user1.id === userId ? rooms![0]?.user1 : rooms![0]?.user2,
          user: rooms![0]?.user1.id === userId ? rooms![0]?.user2 : rooms![0]?.user1,
        })
        await resolve(({ mutation }) => {
          const data: mutationChatroomUpdateInput = {}
          console.log('rooms![0]?.user1.id', rooms![0]?.user1.id, userId)
          data[rooms![0]?.user1.id === userId ? 'user1LastViewed' : 'user2LastViewed'] =
            new Date().toISOString()

          const result = mutation.updateChatroom({
            id: rooms![0].id!,
            data,
            draft: false,
            autosave: true,
          })
          console.log('result', result?.createdAt)
          return result
        })
        refetch()
      }
    })()
  }, [])

  useEffect(() => {
    if (!currentRoom) return
    if (chatId !== '') {
      socket.connect()
      socket.emit('join_room', currentRoom?.id)
    }
    return () => {
      socket.disconnect()
    }
  }, [currentRoom])

  const { chatId } = useParams<{ chatId: string }>()

  const sendData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentMsg !== '') {
      socket.emit('send_msg', {
        room: currentRoom?.id,
        message: currentMsg,
        createdBy: currentRoom?.me.id,
      })
      setCurrentMsg('')
      refetch()
    }
  }

  useEffect(() => {
    const onMessage = (data: Message) => {
      console.log('data', data)
      setMessages((current) => [data, ...current])
    }

    socket.on('receive_msg', onMessage)

    return () => {
      socket.off('receive_msg', onMessage)
    }
  }, [socket])

  console.log('message', messages, currentRoom)

  return (
    <div className="w-full h-full flex flex-col max-md:h-[calc(100vh-64px)]">
      <div className="border-b px-4 py-3 flex justify-between items-center">
        <Link href="/chat" className="lg:hidden md:hidden">
          <ArrowLeft size={24} />
        </Link>
        <Typography
          variant="h4"
          fontWeight="bold"
        >{`${currentRoom?.user?.firstName ?? ''} ${currentRoom?.user?.lastName ?? ''}`}</Typography>
        <Link href={`/profile/${currentRoom?.user?.id}`}>
          <UserCircle size={24} />
        </Link>
      </div>
      <div className="flex-1 gap-2 flex flex-col-reverse pb-4 overflow-scroll max-md:px-4">
        {messages.map((msg, i) => (
          <MessageRow
            key={i}
            message={msg.message ?? ''}
            createdAt={msg.createdAt ?? new Date()}
            createdBy={msg.createdBy ?? 0}
            profileImage={currentRoom?.user?.profileImage ?? ''}
            me={currentRoom?.me?.id ?? 0}
          />
        ))}
      </div>
      <div className="border-t px-4 py-3">
        <form onSubmit={sendData} className="flex gap-3 items-center">
          <Input
            className="placeholder:text-muted-foreground bg-card"
            placeholder="Type a message"
            value={currentMsg}
            onChange={(e) => setCurrentMsg(e.target.value)}
          />
          <Button type="submit" className="rounded-full h-8 p-1 aspect-square">
            <PaperPlaneRight size={14} />
          </Button>
        </form>
      </div>
    </div>
  )
}
