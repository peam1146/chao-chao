'use client'

import { Dispatch, SetStateAction } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { DatePicker } from '@/components/ui/datepicker'
import { Input } from '@/components/ui/input'

import { useQuery } from '../../../../gqty'

interface FilterInputProps {
  category: number[]
  startDate?: Date
  endDate?: Date
  setCategory: Dispatch<SetStateAction<number[]>>
  setStartDate: Dispatch<SetStateAction<Date | undefined>>
  setEndDate: Dispatch<SetStateAction<Date | undefined>>
  setMinPrice: Dispatch<SetStateAction<number | undefined>>
  setMaxPrice: Dispatch<SetStateAction<number | undefined>>
}

export function FilterInput(props: FilterInputProps) {
  const {
    startDate,
    endDate,
    category,
    setCategory,
    setEndDate,
    setMaxPrice,
    setMinPrice,
    setStartDate,
  } = props

  const query = useQuery({
    fetchPolicy: 'cache-first',
    refetchOnWindowVisible: false,
    suspense: true,
  })

  const tags = query.Tags({
    draft: false,
  })

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
      <h6 className="flex mt-4 font-bold text-sm">Date</h6>
      <hr />
      <div className="flex justify-between space-x-1 items-center">
        <DatePicker value={startDate} onChange={setStartDate} />
        <p>-</p>
        <DatePicker value={endDate} onChange={setEndDate} />
      </div>
      <h6 className="font-bold text-sm">Price</h6>
      <hr />
      <div className="flex justify-between space-x-1 items-center mx-auto">
        <Input
          type="number"
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="text-sm p-1 h-8"
          placeholder="0.00"
        />
        <p>-</p>
        <Input
          type="number"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="text-sm p-1 h-8"
          placeholder="0.00"
        />
      </div>
    </div>
  )
}
