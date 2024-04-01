'use client'

import { createContext, useEffect, useState } from 'react'

import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Chats } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { resolve } from '../../../gqty'

const ChatRoom = ({
  name,
  profileImage,
  isActive,
  lastMessage,
  lastMessageCreatedAt,
  id,
  unread,
}: {
  name?: string | null
  profileImage?: string | null
  isActive?: boolean
  lastMessage?: string | null
  lastMessageCreatedAt?: Date
  id?: number | null
  unread?: number
}) => {
  return (
    <Link
      href={`/chat/${id}`}
      className={cn(
        'flex w-full items-center gap-2 p-2 bg-card rounded-lg',
        isActive && 'bg-primary-hover'
      )}
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <Image
          src={profileImage ?? '/assets/images/avatar.png'}
          alt="avatar"
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="">
          <div className="flex justify-between">
            <Typography
              variant="h6"
              fontWeight="bold"
              className="text-ellipsis truncate max-w-[calc(100%-50px)] overflow-hidden"
            >
              {name}
            </Typography>

            <Typography variant="h6" className={isActive ? 'text-white' : 'text-light'}>
              {new Intl.DateTimeFormat('th-TH', {
                hour: '2-digit',
                minute: '2-digit',
              }).format(lastMessageCreatedAt)}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="h6" className={isActive ? 'text-white' : 'text-light'}>
              {lastMessage}
            </Typography>
            {!!unread && unread > 0 && (
              <div className="w-4 h-4 text-sm bg-primary flex items-center justify-center rounded-full">
                <p className="leading-none">{unread}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export const ChatContext = createContext<{
  refetch: () => void
}>({
  refetch: () => {},
})

const ChatPage = ({ children }: { children: React.ReactNode }) => {
  const [rooms, setRooms] = useState<
    {
      name?: string | null
      profileImage?: string | null
      id?: number | null
      lastMessage?: string | null
      isRead?: boolean
      lastMessageCreatedAt?: Date
      unread?: number
      userId?: number | null
    }[]
  >([])

  const { chatId } = useParams()
  const refetch = async () => {
    const { id } = await resolve(({ query }) => ({
      id: query.meUser?.user?.id,
    }))
    const { rooms: roomData } = await resolve(({ query }) => ({
      rooms: query
        .Chatrooms({
          where: {
            OR: [
              {
                user1_id: {
                  equals: id,
                },
              },
              {
                user2_id: {
                  equals: id,
                },
              },
            ],
          },
        })
        ?.docs?.map((room) => ({
          id: room?.id,
          user1_id: {
            id: room?.user1_id.id,
            firstName: room?.user1_id.firstName,
            lastName: room?.user1_id.lastName,
            profileImage: room?.user1_id.profileImage?.url,
          },
          user2_id: {
            id: room?.user2_id.id,
            firstName: room?.user2_id.firstName,
            lastName: room?.user2_id.lastName,
            profileImage: room?.user2_id.profileImage?.url,
          },
          lastMessage: room?.lastMessage?.message,
          lastMessageCreatedAt: room?.lastMessage?.createdAt,
          user1LastViewed: room?.user1LastViewed,
          user2LastViewed: room?.user2LastViewed,
        })),
    }))

    const roomsWithLastView =
      roomData?.map((room) => {
        const user = room?.user1_id.id === id ? room?.user2_id : room?.user1_id
        return {
          name: `${user?.firstName} ${user?.lastName}`,
          profileImage: user?.profileImage,
          id: room?.id,
          userId: user?.id,
          lastMessage: room?.lastMessage,
          lastViewed: room?.user1_id.id === id ? room?.user1LastViewed : room?.user2LastViewed,
          lastMessageCreatedAt: new Date(room?.lastMessageCreatedAt ?? 0),
        }
      }) ?? []

    const unreadCount = await Promise.all(
      roomsWithLastView.map((room) => {
        return resolve(({ query }) => {
          console.log('room.lastViewed', room.lastViewed)
          return {
            messages: query
              .Messages({
                where: {
                  room: {
                    equals: room.id,
                  },
                  createdAt: {
                    greater_than_equal: room.lastViewed,
                  },
                },
              })
              ?.docs?.map((doc) => ({
                id: doc?.id,
                message: doc?.message,
              })),
          }
        })
      })
    )

    setRooms(
      roomsWithLastView.map((room, index) => {
        return {
          ...room,
          unread: unreadCount[index].messages?.filter((m) => m.id).length ?? 0,
        }
      })
    )
  }

  useEffect(() => {
    refetch()
  }, [])

  if (window.innerWidth < 768 && chatId !== undefined) {
    return children
  }

  return (
    <div className="flex flex-col flex-1 gap-4 w-full container mt-10 mx-auto lg:max-h-[80vh]">
      <div className="flex flex-1 gap-2 lg:max-h-[80vh]">
        <div className="w-72 max-md:w-full space-y-2">
          <div className="flex gap-1">
            <Chats size={24} />
            <Typography variant="h4" fontWeight="bold">
              <span>Chats</span>
            </Typography>
          </div>
          {rooms &&
            rooms?.map((room) => (
              <div key={room?.id}>
                <ChatRoom
                  profileImage={room?.profileImage}
                  name={room?.name}
                  isActive={chatId === room?.id?.toString()}
                  lastMessage={room?.lastMessage}
                  unread={room?.unread}
                  id={room.userId}
                />
              </div>
            ))}
        </div>
        <ChatContext.Provider value={{ refetch }}>
          <div className="w-full lg:max-h-[80vh] max-md:hidden">{children}</div>
        </ChatContext.Provider>
      </div>
    </div>
  )
}

export default ChatPage
