'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import Typography from '@/components/ui/typography'
import { Megaphone, Plus } from '@phosphor-icons/react'
import { Separator } from '@radix-ui/react-separator'
import { useSearchParams } from 'next/navigation'

import { useQuery } from '../../../../../gqty'
import AdvertisingCard from './AdvertisingCard'
import { SelectAssetModal } from './SelectAssetModal'

export default function AdvertisingContainer() {
  const { Items, meUser } = useQuery({ fetchPolicy: 'cache-and-network' })
  const [open, setOpen] = useState(false)

  const searchParams = useSearchParams()
  const search = searchParams.get('search') ? searchParams.get('search') : undefined

  const userId = meUser?.user?.id

  const items = Items({
    draft: false,
    where: {
      name: {
        contains: search,
      },
      createdBy: {
        equals: userId,
      },
    },
  })

  function handleOpenChange(open: boolean) {
    setOpen(open)
  }

  return (
    <>
      <div className="flex flex-col w-full gap-y-4">
        <div className="flex justify-between">
          <div className="flex my-auto gap-x-1">
            <Megaphone size={24} />
            <Typography variant="h4" fontWeight="bold">
              Advertising
            </Typography>
          </div>
          <Button className="gap-2" onClick={() => setOpen(true)}>
            <Plus size={15} className="text-primary-foreground" />
            Boost an asset
          </Button>
        </div>
        <Typography variant="h6" className="text-white">
          Upgrade your asset's visibility with our recommended tag feature, ensuring it appears at
          the top of search results for maximum exposure.
        </Typography>
        <Separator orientation="horizontal" className="border-b border-border" />
        {items?.docs?.length === 0 && <div className="flex justify-center">No item found</div>}
        <div className="grid grid-cols-2 2xl:grid-cols-5 lg:grid-cols-3 grid-s-3 gap-3">
          {items?.docs
            ?.filter((item) => item?.id !== undefined)
            .map((item) => {
              return (
                <AdvertisingCard
                  key={item?.id}
                  id={Number(item?.id)}
                  name={item?.name ?? ''}
                  image={item?.image}
                  startDate={new Date(item?.start ?? '')}
                  endDate={new Date(item?.end ?? '')}
                />
              )
            })}
        </div>
      </div>
      <Modal open={open} onOpenChange={setOpen} className="lg:max-w-[672px]">
        <SelectAssetModal handleOpenChange={handleOpenChange} />
      </Modal>
    </>
  )
}
