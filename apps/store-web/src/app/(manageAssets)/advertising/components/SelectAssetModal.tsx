import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import Typography from '@/components/ui/typography'
import { Separator } from '@radix-ui/react-separator'

import { useQuery } from '../../../../../gqty'
import SearchMyAssets from '../../myAssets/components/SearchMyAssets'
import AssetsCard from './AssetsCard'
import { SelectAssetDateModal } from './SelectAssetDateModal'

type SelectAssetModalProps = {
  handleOpenChange: (open: boolean) => void
}

export function SelectAssetModal(props: SelectAssetModalProps) {
  const { handleOpenChange } = props
  const [open, setOpen] = useState(false)

  const { Items } = useQuery({ fetchPolicy: 'cache-and-network' })
  const items = Items({
    draft: false,
    where: {},
  })

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Typography variant="h4" fontWeight="bold">
            Select an asset to boost
          </Typography>
          <SearchMyAssets />
          <Separator orientation="horizontal" className="border-b border-border" />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {items?.docs
              ?.filter((item) => item?.id !== undefined)
              .map((item) => {
                return (
                  <AssetsCard
                    key={item?.id}
                    id={Number(item?.id)}
                    name={item?.name ?? ''}
                    image={item?.image}
                    rating={item?.rating ?? 0}
                    price={item?.price ?? 0}
                    periodType={item?.periodType ?? 'Days'}
                  />
                )
              })}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            type="button"
            size="lg"
            className="w-full lg:w-[108px]"
            onClick={() => handleOpenChange(false)}
          >
            <Typography variant="h5">Cancel</Typography>
          </Button>
          <Button
            variant="default"
            type="submit"
            size="lg"
            className="w-full lg:w-[108px] "
            onClick={() => {
              setOpen(true)
            }}
          >
            <Typography variant="h5"> Select </Typography>
          </Button>
        </div>
      </div>
      <Modal open={open} onOpenChange={setOpen} className="lg:max-w-[400px] max-lg:max-w-[344px]">
        <SelectAssetDateModal
          handleOpenChange={(open: boolean) => {
            setOpen(open)
          }}
        />
      </Modal>
    </>
  )
}
