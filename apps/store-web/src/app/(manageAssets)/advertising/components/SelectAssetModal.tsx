import { ChangeEvent, useState } from 'react'

import { useDebounce } from '@/components/layout/hooks/use-debounce'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/dialog'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { useUserToken } from '@/providers/User'
import { Separator } from '@radix-ui/react-separator'
import { SearchIcon } from 'lucide-react'

import { Item_advertise__status_Input, useQuery } from '../../../../../gqty'
import AssetsCard from './AssetsCard'
import { SelectAssetDateModal } from './SelectAssetDateModal'

type SelectAssetModalProps = {
  handleOpenChange: (open: boolean) => void
}

export function SelectAssetModal(props: SelectAssetModalProps) {
  const { handleOpenChange } = props
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const query = useQuery({ fetchPolicy: 'network-only' })

  const { userId } = useUserToken()
  const items = query.Items({
    draft: false,
    where: {
      createdBy: {
        equals: userId,
      },
      name: {
        contains: search,
      },
      advertise__status: {
        equals: Item_advertise__status_Input.inactive,
      },
    },
  })

  const debounce = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, 250)

  const [selectedAsset, setSelectedAsset] = useState<number | null>(null)
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Typography variant="h4" fontWeight="bold">
            Select an asset to boost
          </Typography>
          <div className="flex h-10 w-full items-center rounded-md border border-input bg-background p-2 text-sm ring-offset-background">
            <SearchIcon className="h-4" />
            <input
              type="text"
              onChange={debounce}
              placeholder="Search My Assets"
              className="w-full bg-transparent"
            />
            <input type="submit" className="hidden" />
          </div>
          <Separator orientation="horizontal" className="border-b border-border" />
          {query.$state.isLoading ? (
            <div className="flex justify-center">
              <Spinner className="self-center" />
            </div>
          ) : (
            <div className="max-h-[400px] overflow-y-auto grid grid-cols-2 lg:grid-cols-3 gap-3">
              {items?.docs
                ?.filter((item) => item?.id !== undefined)
                .map((item) => {
                  return (
                    <div
                      key={item?.id}
                      onClick={() => {
                        setSelectedAsset(Number(item?.id))
                      }}
                    >
                      <AssetsCard
                        selectedAsset={selectedAsset}
                        id={Number(item?.id)}
                        name={item?.name ?? ''}
                        image={item?.image}
                        rating={item?.rating ?? 0}
                        price={item?.price ?? 0}
                        periodType={item?.periodType ?? 'Days'}
                      />
                    </div>
                  )
                })}
            </div>
          )}
          {items?.docs?.length === 0 && <div className="flex justify-center">No item found</div>}
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
            disabled={selectedAsset === null}
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
          selectedAsset={selectedAsset}
          handleOpenChange={(open: boolean) => {
            setOpen(open)
          }}
        />
      </Modal>
    </>
  )
}
