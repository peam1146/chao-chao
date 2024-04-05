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
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { logout } from '../actions/logout'
import ProfileToggleMenuLink from './ProfileToggleMenuLink'

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
        <ProfileToggleMenuLink href="/">
          <House className="h-4 w-4" />
          Home
        </ProfileToggleMenuLink>
        <ProfileToggleMenuLink href="/profile">
          <User className="h-4 w-4" />
          My Profile
        </ProfileToggleMenuLink>
        <ProfileToggleMenuLink href="/chat">
          <Chats className="h-4 w-4" />
          Chat
        </ProfileToggleMenuLink>
        <ProfileToggleMenuLink href="/help">
          <Info className="h-4 w-4" />
          Help center
        </ProfileToggleMenuLink>
        <DropdownMenuItem>
          <button
            className="flex gap-2 items-center w-full h-full"
            onClick={() => {
              logout()
            }}
          >
            <SignOut className="h-4 w-4" />
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
