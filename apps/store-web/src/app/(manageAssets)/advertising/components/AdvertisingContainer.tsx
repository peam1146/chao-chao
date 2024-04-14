'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { useUserToken } from '@/providers/User'
import { Megaphone, Plus } from '@phosphor-icons/react'
import { Separator } from '@radix-ui/react-separator'
import { useSearchParams } from 'next/navigation'

import { Item_advertise__status_Input, useQuery } from '../../../../../gqty'
import AdvertisingCard from './AdvertisingCard'
import { SelectAssetModal } from './SelectAssetModal'

export default function AdvertisingContainer() {
  const query = useQuery({ fetchPolicy: 'cache-and-network' })
  const [open, setOpen] = useState(false)

  const searchParams = useSearchParams()
  const search = searchParams.get('search') ? searchParams.get('search') : undefined

  const { userId } = useUserToken()

  const items = query.Items({
    draft: false,
    where: {
      name: {
        contains: search,
      },
      createdBy: {
        equals: userId,
      },
      advertise__status: {
        equals: Item_advertise__status_Input.active,
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
        {query.$state.isLoading ? (
          <div className="flex justify-center">
            <Spinner className="self-center" />
          </div>
        ) : (
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
                    startDate={new Date(item?.advertise?.startDate ?? '')}
                    endDate={new Date(item?.advertise?.endDate ?? '')}
                  />
                )
              })}
          </div>
        )}
        {items?.docs?.length === 0 && <div className="flex justify-center">No item found</div>}
      </div>
      <Modal open={open} onOpenChange={setOpen} className="lg:max-w-[672px]">
        <SelectAssetModal handleOpenChange={handleOpenChange} />
      </Modal>
    </>
  )
}
