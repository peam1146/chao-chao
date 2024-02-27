import { useState } from 'react'

import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'

export default function SearchMyAssets() {
  const [search, setSearch] = useState('')
  return (
    <div className="relative">
      <div
        className={cn(
          'flex gap-x-2 h-10 w-full items-center rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background',
          search && 'rounded-b-none border-b-0'
        )}
      >
        <SearchIcon size={13} className="text-muted-foreground" />
        <input
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          placeholder="Search"
          value={search}
          className="w-full h-6 bg-transparent"
        />
      </div>
      {search && (
        <div className="bg-background text-muted-foreground text-sm w-full absolute border rounded-md rounded-t-none">
          {
            <div className="flex p-2 items-center">
              <SearchIcon className="h-4" />
              <Typography className="w-full">{search}</Typography>
            </div>
          }
        </div>
      )}
    </div>
  )
}
