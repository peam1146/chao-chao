'use client'

import { useState } from 'react'

import logo from '@/assets/images/logo.svg'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/react-hooks/use-media-query'
import { List, MagnifyingGlass } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Typography from '../ui/typography'
import { MenuSheet } from './components/MenuSheet'
import { ModeToggle } from './components/theme-toggle'

const NavbarDesktop = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const pathname = usePathname()
  const isDesktop = useMediaQuery('(min-width: 821px)')

  if (isDesktop) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logo} width={70} height={70} alt="logo" />
          </Link>
          <Input placeholder="Search" className="w-2/5" />
          <div className="flex items-center gap-4">
            <Link href="/signin" className="flex flex-row gap-0.5 items-center">
              {pathname === '/signin' && <MagnifyingGlass className="w-4 h-4" />}
              <Typography variant="h5" className={cn(pathname !== '/signin' && 'text-light')}>
                Sign in
              </Typography>
            </Link>
            <Link href="/signup" className="flex flex-row gap-0.5 items-center">
              {pathname === '/signup' && <MagnifyingGlass className="w-4 h-4" />}
              <Typography variant="h5" className={cn(pathname !== '/signup' && 'text-light')}>
                Sign up
              </Typography>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>
    )
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <List className="w-6 h-6 cursor-pointer" onClick={() => setOpenMenu(true)} />
        <Link href="/" className="flex items-center">
          <Image src={logo} width={70} height={70} alt="logo" />
        </Link>
        <MagnifyingGlass className="w-6 h-6 cursor-pointer" />
      </div>
      <MenuSheet open={openMenu} setOpen={setOpenMenu} pathname={pathname} />
    </header>
  )
}

export default NavbarDesktop
