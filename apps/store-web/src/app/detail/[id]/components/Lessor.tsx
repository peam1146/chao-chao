'use client'

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { Rating } from '@mui/material'
import { Chats, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { Maybe, User } from '../../../../../gqty'

interface LessorProps {
  isSelf: boolean
  user?: Maybe<User>
}

export default function Lessor(props: LessorProps) {
  const { isSelf, user } = props

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:justify-between px-6 py-5 bg-card rounded-2xl">
      <div className="flex flex-row gap-4 items-center">
        <Image
          src={user?.profileImage?.url ?? ''}
          alt="Lessor Picture"
          width={80}
          height={80}
          className="rounded-full w-20 h-20 object-cover"
        />

        <div className="flex flex-col gap-2">
          <Typography variant="h5" fontWeight="bold">
            {user?.firstName}
          </Typography>
          <div className="flex flex-row justify-center gap-1">
            <Rating
              name="read-only"
              value={user?.rating ?? 0}
              max={5}
              readOnly
              sx={{
                '& .MuiRating-iconEmpty': {
                  color: '#999999',
                },
              }}
            />
            <Typography variant="h5" className="text-light pt-0.5">
              {user?.rating ? user?.rating : '0'}
            </Typography>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:flex lg:flew-row lg:flex-col gap-3 lg:justify-center">
        {!isSelf && (
          <Link href={`/chat/${user?.id}`} className="w-full">
            <Button type="button" size="sm" className="gap-2 max-lg:hidden w-full">
              <Chats size={16} className="text-primary-foreground " />
              Chat
            </Button>
          </Link>
        )}
        <Link href={`/profile/${user?.id}`} className="w-full">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="gap-2 max-lg:hidden w-full"
          >
            <UserCircle size={16} className="text-secondary-foreground" />
            See Profile
          </Button>
        </Link>

        {!isSelf && (
          <Link href={`/chat/${user?.id}`} className="w-full">
            <Button type="button" className="gap-2 lg:hidden w-full">
              <Chats size={16} className="text-primary-foreground" />
              Chat
            </Button>
          </Link>
        )}
        <Link href={`/profile/${user?.id}`} className="w-full">
          <Button type="button" variant="secondary" className="gap-2 lg:hidden w-full">
            <UserCircle size={16} className="text-secondary-foreground" />
            See Profile
          </Button>
        </Link>
      </div>
    </div>
  )
}
