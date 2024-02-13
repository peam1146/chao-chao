'use client'

import { useRef, useState } from 'react'

import logo from '@/assets/images/logo.svg'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { List, MagnifyingGlass } from '@phosphor-icons/react'
import { set } from 'date-fns'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from 'usehooks-ts'

import Typography from '../ui/typography'
import { MenuSheet } from './components/MenuSheet'
import { ModeToggle } from './components/theme-toggle'

const SearchSuggestion = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="relative w-2/5">
      <div
        className={cn(
          'flex h-10 w-full items-center rounded-md border border-input bg-background p-2 text-sm ring-offset-background',
          search && 'rounded-b-none border-b-0'
        )}
      >
        <SearchIcon className="h-4" />
        <input
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          placeholder="Search"
          value={search}
          className="w-full bg-transparent"
        />
      </div>
      {search && (
        <div className="bg-background text-muted-foreground text-sm w-full absolute border rounded-md rounded-t-none">
          {
            <div className="flex p-2 items-center">
              <SearchIcon className="h-4" />
              <p className="w-full">{search}</p>
            </div>
          }
        </div>
      )}
    </div>
  )
}

const NavbarDesktop = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const pathname = usePathname()
  const isDesktop = useMediaQuery('(min-width: 821px)')

  if (isDesktop) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="xl:max-w-screen-2xl flex h-16 w-full px-8 items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <Image src={logo} width={70} height={70} alt="logo" />
          </Link>
          <SearchSuggestion />
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
            <ModeToggle />S S
          </div>
        </div>
      </header>
    )
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 w-full px-4 items-center justify-between">
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
