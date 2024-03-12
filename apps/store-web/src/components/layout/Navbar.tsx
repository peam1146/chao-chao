'use client'

import { ChangeEvent, useState } from 'react'

import { cn } from '@/lib/utils'
import { List, MagnifyingGlass } from '@phosphor-icons/react'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Maybe, useQuery } from '../../../gqty'
import Typography from '../ui/typography'
import { MenuSheet } from './components/MenuSheet'
import { ProfileToggle } from './components/profile-toggle'
import { ModeToggle } from './components/theme-toggle'
import { useDebounce } from './hooks/use-debounce'

const SearchSuggestion = () => {
  const [search, setSearch] = useState('')

  const debounce = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, 350)

  return (
    <div className="relative w-2/5">
      <div
        className={cn(
          'flex h-10 w-full items-center rounded-md border border-input bg-background p-2 text-sm ring-offset-background',
          search && 'rounded-b-none border-b-0'
        )}
      >
        <SearchIcon className="h-4" />
        <input onChange={debounce} placeholder="Search" className="w-full bg-transparent" />
      </div>

      {search && <SuggestionItems search={search} />}
    </div>
  )
}

type SuggestionItemsProps = {
  search?: string
}

const SuggestionItems = (props: SuggestionItemsProps) => {
  const { Items } = useQuery()

  const items = Items({
    draft: false,
    limit: 5,
    where: {
      name: {
        contains: props.search,
      },
    },
  })!.docs

  if (!items) return null

  return (
    <div className="bg-background text-muted-foreground text-sm w-full absolute border rounded-md rounded-t-none">
      {items.map((item) => (
        <div className="flex p-2 items-center">
          <SearchIcon className="h-4" />
          <Typography className="w-full">{item!.name}</Typography>
        </div>
      ))}
    </div>
  )
}

const Navbar = ({ id }: { id: Maybe<Number | undefined> }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const pathname = usePathname()

  return (
    <>
      <header className="max-lg:hidden sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="xl:max-w-screen-2xl flex h-16 w-full px-8 items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <Typography variant="h3" fontWeight="bold">
              chao chao
            </Typography>
          </Link>
          <SearchSuggestion />
          <div className="flex items-center gap-4">
            {!id && (
              <>
                <Link href="/signin" className="flex flex-row gap-0.5 items-center">
                  <Typography variant="h5" className={cn(pathname !== '/signin' && 'text-light')}>
                    Sign in
                  </Typography>
                </Link>
                <Link href="/signup" className="flex flex-row gap-0.5 items-center">
                  <Typography variant="h5" className={cn(pathname !== '/signup' && 'text-light')}>
                    Sign up
                  </Typography>
                </Link>
              </>
            )}
            {id && (
              <>
                <Link href="/myAssets" className="flex flex-row gap-0.5 items-center">
                  <Typography variant="h5" className={cn(pathname !== '/asset' && 'text-light')}>
                    Manage assets
                  </Typography>
                </Link>
                <ProfileToggle />
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </header>

      <header className="lg:hidden sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 w-full px-4 items-center justify-between">
          <List className="w-6 h-6 cursor-pointer" onClick={() => setOpenMenu(true)} />
          <Link href="/" className="flex items-center">
            <Typography variant="h3" fontWeight="bold">
              chao chao
            </Typography>
          </Link>
          <MagnifyingGlass className="w-6 h-6 cursor-pointer" />
        </div>
        <MenuSheet open={openMenu} setOpen={setOpenMenu} pathname={pathname} id={id} />
      </header>
    </>
  )
}

export default Navbar
