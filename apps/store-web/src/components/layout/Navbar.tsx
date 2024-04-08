'use client'

import { ChangeEvent, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { useUserToken } from '@/providers/User'
import { CaretLeft, List, MagnifyingGlass } from '@phosphor-icons/react'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { Item_rentingStatus, useQuery } from '../../../gqty'
import Typography from '../ui/typography'
import { MenuSheet } from './components/MenuSheet'
import { ProfileToggle } from './components/profile-toggle'
import { ModeToggle } from './components/theme-toggle'
import { useDebounce } from './hooks/use-debounce'

const SearchSuggestion = () => {
  const [search, setSearch] = useState('')

  const [searchEnter, setSearchEnter] = useState('')

  const debounce = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, 250)

  const { Items } = useQuery({
    fetchPolicy: 'cache-and-network',
  })

  const { userId: me } = useUserToken()

  console.log(me)

  const items = Items({
    draft: false,
    limit: 5,
    where: {
      name: {
        contains: search,
      },
      createdBy: {
        not_equals: Number(me),
      },
    },
  })!.docs?.filter((item) => item?.rentingStatus === Item_rentingStatus.available)

  if (!items) return null

  const [showItems, setShowItems] = useState(false)
  // To toggle the search items as result changes
  useEffect(() => {
    if (items.length > 0 && !showItems) setShowItems(true)

    if (items.length <= 0) setShowItems(false)
  }, [items])

  const router = useRouter()

  return (
    <div className="relative max-lg:w-full lg:w-2/5" tabIndex={1}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const param = searchEnter
          setShowItems(false)
          setSearch('')
          router.push(`/search?search=${param}`)
        }}
        className={cn(
          'flex h-10 w-full items-center rounded-md border border-input bg-background p-2 text-sm ring-offset-background',
          search && 'rounded-b-none border-b-0'
        )}
      >
        <SearchIcon className="h-4" />
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault()
            debounce(e)
            setSearchEnter(e.target.value)
          }}
          placeholder="Search"
          className="w-full bg-transparent"
        />
        <input type="submit" className="hidden" />
      </form>
      {search && (
        <div className="bg-background text-muted-foreground text-sm w-full absolute border rounded-md rounded-t-none z-[100]">
          {showItems &&
            items.map((item) => (
              <Link
                href={{
                  pathname: '/search',
                  query: { search: `${item?.name}` },
                }}
                className="flex p-2 items-center transition-all ease-in-out duration-500 hover:bg-muted"
                key={item?.id}
                onClick={() => {
                  setShowItems(false)
                  setSearch('')
                }}
              >
                <SearchIcon className="h-4" />
                <Typography className="w-full">{item?.name}</Typography>
              </Link>
            ))}
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  const pathname = usePathname()

  const { userToken: id } = useUserToken()

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
            {id === '' && (
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
            {id !== '' && (
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
        <div className="flex h-16 w-full gap-4 px-4 items-center justify-between">
          {!openSearch && (
            <>
              <List className="w-6 h-6 cursor-pointer" onClick={() => setOpenMenu(true)} />
              <Link href="/" className="flex items-center">
                <Typography variant="h3" fontWeight="bold">
                  chao chao
                </Typography>
              </Link>
            </>
          )}
          {openSearch ? (
            <>
              <button
                type="button"
                onClick={() => {
                  setOpenSearch(!openSearch)
                }}
                title="search"
              >
                <CaretLeft className="w-6 h-6" />
              </button>
              <SearchSuggestion />
            </>
          ) : (
            <button
              title="search"
              type="button"
              onClick={() => {
                setOpenSearch(!openSearch)
              }}
            >
              <MagnifyingGlass className="w-6 h-6" />
            </button>
          )}
        </div>
        <MenuSheet open={openMenu} setOpen={setOpenMenu} pathname={pathname} />
      </header>
    </>
  )
}

export default Navbar
