import { ChangeEvent, useEffect, useState } from 'react'

import { useDebounce } from '@/components/layout/hooks/use-debounce'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useQuery } from '../../../../../gqty'

export default function SearchMyAssets() {
  const [search, setSearch] = useState('')

  const router = useRouter()

  const debounce = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, 250)

  const { Items, meUser } = useQuery({
    fetchPolicy: 'cache-first',
  })

  const userId = meUser?.user?.id

  const items = Items({
    draft: false,
    limit: 5,
    where: {
      name: {
        contains: search,
      },
      createdBy: {
        equals: userId,
      },
    },
  })!.docs

  if (!items) return null

  const [showItems, setShowItems] = useState(false)
  // To toggle the search items as result changes
  useEffect(() => {
    if (items.length > 0 && !showItems) setShowItems(true)

    if (items.length <= 0) setShowItems(false)
  }, [items])

  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const param = search
          setShowItems(false)
          setSearch('')
          router.push(`/myAssets?search=${param}`)
        }}
        className={cn(
          'flex h-10 w-full items-center rounded-md border border-input bg-background p-2 text-sm ring-offset-background',
          search && 'rounded-b-none border-b-0'
        )}
      >
        <SearchIcon className="h-4" />
        <input
          type="text"
          onChange={debounce}
          placeholder="Search My Assets"
          className="w-full bg-transparent"
        />
        <input type="submit" className="hidden" />
      </form>
      {search && (
        <div className="bg-background text-muted-foreground text-sm w-full absolute border rounded-md rounded-t-none ">
          {showItems &&
            items.map((item) => (
              <Link
                href={{
                  pathname: '/myAssets',
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
