'use client'

import { Dispatch, SetStateAction, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'

import { useQuery } from '../../../../gqty'

interface FilterModalProps {
  onClose: () => void
  setCategory: Dispatch<SetStateAction<number[]>>
  setMinPrice: Dispatch<SetStateAction<number | undefined>>
  setMaxPrice: Dispatch<SetStateAction<number | undefined>>
}

export function FilterModal(props: FilterModalProps) {
  const { onClose, setCategory, setMaxPrice, setMinPrice } = props

  const [categoryModal, setModalCategory] = useState<number[]>([])
  const [minPriceModal, setModalMinPrice] = useState<number>()
  const [maxPriceModal, setModalMaxPrice] = useState<number>()

  const query = useQuery({
    fetchPolicy: 'cache-first',
    suspense: true,
  })

  const tags = query.Tags({
    draft: false,
  })

  const onSubmit = () => {
    setCategory(categoryModal)
    setMinPrice(minPriceModal)
    setMaxPrice(maxPriceModal)
    onClose()
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <div className="flex flex-col gap-4 w-full h-fit">
        <Typography variant="h5" fontWeight="bold" className="pb-2 border-b">
          Category
        </Typography>
        <div className="max-h-40 overflow-hidden space-y-1">
          {tags &&
            tags?.docs?.map((tag) => (
              <div className="flex justify-between items-center" key={tag?.id}>
                <p className="text-sm">{tag?.name}</p>
                <Checkbox
                  onClick={() => {
                    if (!tag?.id) {
                      return
                    }
                    if (categoryModal.includes(tag.id)) {
                      setModalCategory(categoryModal.filter((item) => item !== tag.id))
                    } else {
                      setModalCategory([...categoryModal, tag.id])
                    }
                  }}
                  checked={!!tag?.id && categoryModal?.includes(tag.id)}
                />
              </div>
            ))}
        </div>
        <Typography variant="h5" fontWeight="bold" className="pb-2 border-b">
          Price
        </Typography>
        <div className="flex justify-between space-x-1 items-center">
          <Input
            type="number"
            onChange={(e) => setModalMinPrice(Number(e.target.value))}
            className="text-sm p-2 h-8"
            placeholder="0.00"
          />
          <p>-</p>
          <Input
            type="number"
            onChange={(e) => setModalMaxPrice(Number(e.target.value))}
            className="text-sm p-2 h-8"
            placeholder="0.00"
          />
        </div>
        <div className="flex gap-2">
          <Button className="w-1/2" variant="outline" size="default" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="w-1/2" size="default">
            Apply
          </Button>
        </div>
      </div>
    </form>
  )
}
