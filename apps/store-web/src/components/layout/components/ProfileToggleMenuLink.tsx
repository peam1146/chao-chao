import React, { PropsWithChildren } from 'react'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import Link from 'next/link'

interface ProfileToggleMenuLinkProps extends PropsWithChildren {
  href: string
}

export default function ProfileToggleMenuLink(props: ProfileToggleMenuLinkProps) {
  const { href, children } = props
  return (
    <DropdownMenuItem className="cursor-pointer" asChild>
      <Link href={href} className="flex gap-2 items-center w-full h-full">
        {children}
      </Link>
    </DropdownMenuItem>
  )
}
