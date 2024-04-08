'use client'

import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { useDebounce } from '@/components/layout/hooks/use-debounce'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'

import { useQuery } from '../../../../gqty'

interface FilterInputProps {
  category: number[]
  setCategory: Dispatch<SetStateAction<number[]>>
  setMinPrice: Dispatch<SetStateAction<number | undefined>>
  setMaxPrice: Dispatch<SetStateAction<number | undefined>>
}

export function FilterInput(props: FilterInputProps) {
  const { category, setCategory, setMaxPrice, setMinPrice } = props

  const query = useQuery({
    fetchPolicy: 'cache-first',
    suspense: true,
  })

  const tags = query.Tags({
    draft: false,
  })

  const debounceMinPrice = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setMinPrice(undefined)
    } else setMinPrice(Number(e.target.value))
  }, 300)

  const debounceMaxPrice = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setMaxPrice(undefined)
    } else setMaxPrice(Number(e.target.value))
  }, 300)

  return (
    <div className="flex flex-col gap-2 w-[25%] min-w-[280px] h-fit sticky top-[65px] rounded-md p-6 max-xl:hidden">
      <h6 className="font-bold text-sm">Category</h6>
      <hr />
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
                  if (category.includes(tag.id)) {
                    setCategory(category.filter((item) => item !== tag.id))
                  } else {
                    setCategory([...category, tag.id])
                  }
                }}
                checked={!!tag?.id && category?.includes(tag.id)}
              />
            </div>
          ))}
      </div>
      <h6 className="font-bold text-sm">Price</h6>
      <hr />
      <div className="flex justify-between space-x-1 items-center mx-auto">
        <Input
          type="number"
          onChange={debounceMinPrice}
          className="text-sm p-1 h-8"
          placeholder="0.00"
        />
        <p>-</p>
        <Input
          type="number"
          onChange={debounceMaxPrice}
          className="text-sm p-1 h-8"
          placeholder="0.00"
        />
      </div>
    </div>
  )
}
