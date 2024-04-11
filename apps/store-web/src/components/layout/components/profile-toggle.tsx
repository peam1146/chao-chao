'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useToast } from '@/components/ui/use-toast'
import { Chats, House, Info, SignOut, User, UserCircle } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

import { logout } from '../actions/logout'
import ProfileToggleMenuLink from './ProfileToggleMenuLink'

export function ProfileToggle() {
  const { toast } = useToast()
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
            onClick={async () => {
              await logout()
              toast({
                title: 'Sign out successfully',
                success: true,
              })
              router.push('/')
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
