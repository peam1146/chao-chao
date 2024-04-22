'use client'

import { createContext, useMemo } from 'react'

import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Chats } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { useQuery } from '../../../gqty'

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
      <div className="flex items-center gap-2 w-full">
        <Image
          src={profileImage ?? '/assets/images/avatar.png'}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full aspect-square h-10 object-cover"
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <Typography variant="h6" fontWeight="bold" className="line-clamp-1 flex-1">
              {name}
            </Typography>
            <Typography
              variant="h6"
              className={isActive ? 'text-white flex-none' : 'text-light flex-none'}
            >
              {new Intl.DateTimeFormat('th-TH', {
                hour: '2-digit',
                minute: '2-digit',
              }).format(lastMessageCreatedAt)}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography variant="h6" className={isActive ? 'text-white' : 'text-light'}>
              {lastMessage} {isActive ? '' : '...'}
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

interface ChatContextType {
  chatId: string
  refetch: () => void
}
export const ChatContext = createContext<ChatContextType>({} as ChatContextType)

const ChatPage = ({ children }: { children: React.ReactNode }) => {
  const { chatId } = useParams<{ chatId: string }>()

  const query = useQuery({ fetchPolicy: 'cache-and-network' })

  const userId = query.meUser?.user?.id

  const roomsData = query
    .Chatrooms({
      where: {
        OR: [
          {
            user1_id: {
              equals: userId,
            },
          },
          {
            user2_id: {
              equals: userId,
            },
          },
        ],
      },
    })
    ?.docs?.filter((item) => item?.id !== undefined)
    .map((room) => ({
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
    }))

  const roomsWithLastView =
    roomsData?.map((room) => {
      const user = room?.user1_id.id === Number(userId) ? room?.user2_id : room?.user1_id
      return {
        name: `${user?.firstName} ${user?.lastName}`,
        profileImage: user?.profileImage,
        id: room?.id,
        userId: user?.id,
        userId1: room?.user1_id.id,
        userId2: room?.user2_id.id,
        lastMessage: room?.lastMessage,
        lastViewed:
          room?.user1_id.id === Number(userId) ? room?.user1LastViewed : room?.user2LastViewed,
        lastMessageCreatedAt: new Date(room?.lastMessageCreatedAt ?? 0),
      }
    }) ?? []

  const refetch = () => {
    query.$refetch()
  }

  const value = useMemo(() => ({ refetch, chatId }), [refetch, chatId])

  if (typeof window !== 'undefined' && window.innerWidth < 768 && chatId !== undefined) {
    return children
  }

  if (query.$state.isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner className="self-center" />
      </div>
    )
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
          {roomsWithLastView &&
            !query.$state.isLoading &&
            roomsWithLastView.length !== 0 &&
            roomsWithLastView?.map((room) => (
              <div key={room?.id}>
                <ChatRoom
                  profileImage={room?.profileImage}
                  name={room?.name}
                  isActive={
                    chatId === room.userId1?.toString() || chatId === room.userId2?.toString()
                  }
                  lastMessage={room?.lastMessage}
                  lastMessageCreatedAt={room?.lastMessageCreatedAt}
                  id={room.userId}
                />
              </div>
            ))}
        </div>
        <ChatContext.Provider value={value}>
          <div className="w-full lg:max-h-[80vh] max-md:hidden">{children}</div>
        </ChatContext.Provider>
      </div>
    </div>
  )
}

export default ChatPage
