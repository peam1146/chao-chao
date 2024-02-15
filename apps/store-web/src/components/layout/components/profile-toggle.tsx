'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Chats, House, Info, SignOut, User, UserCircle } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

import { logout } from '../actions/logout'

export function ProfileToggle() {
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <UserCircle className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="gap-2 items-center" onClick={() => router.push('/')}>
          <House className="h-4 w-4" />
          Home
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 items-center" onClick={() => router.push('/profile')}>
          <User className="h-4 w-4" />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 items-center" onClick={() => router.push('/chat')}>
          <Chats className="h-4 w-4" />
          Chat
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 items-center" onClick={() => router.push('/help')}>
          <Info className="h-4 w-4" />
          Help center
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2 items-center"
          onClick={() => {
            logout()
          }}
        >
          <SignOut className="h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
