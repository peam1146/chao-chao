'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Rating from '@mui/material/Rating'
import { CalendarBlank } from '@phosphor-icons/react'

export default function Description({
  name,
  price,
  tags,
  startDate,
  endDate,
}: {
  name: string
  price: number
  tags: Array<String>
  startDate: string
  endDate: string
}) {
  const [value, setValue] = useState<number | null>(2)
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col">
        <Typography variant="h3" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h4" className="text-primary">
          {price}฿/day
        </Typography>
      </div>
      <Typography variant="h6" className="h-5 flex text-light">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />

        {value}
      </Typography>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        {tags.map((tag) => (
          <Typography
            variant="h6"
            className="px-3 py-1 text-secondary border border-secondary rounded-full"
          >
            {tag}
          </Typography>
        ))}
      </div>
      <div className="p-3 flex flex-col gap-y-2 border rounded-lg">
        <Typography variant="h5" fontWeight="bold" className="flex justify-center">
          Check for available dates
        </Typography>
        <hr />
        <div className="h-7 flex justify-between">
          <Typography variant="h6" fontWeight="bold" className="my-auto">
            Date
          </Typography>
          <div className="flex gap-x-2">
            <div className="flex gap-x-2 px-3 py-1 border border-accent-foreground rounded-lg">
              <CalendarBlank size={16} />
              <Typography variant="h6">{startDate}</Typography>
            </div>
            <Typography variant="h6" className="my-auto">
              -
            </Typography>
            <div className="flex gap-x-2 px-3 py-1 border border-accent-foreground rounded-lg">
              <CalendarBlank size={16} />
              <Typography variant="h6">{endDate}</Typography>
            </div>
          </div>
        </div>
        <hr />
        <div className="h-7 flex justify-between">
          <Typography variant="h6" fontWeight="bold" className="my-auto">
            Total period
          </Typography>
          <Typography variant="h6" fontWeight="bold" className="my-auto">
            1 month
          </Typography>
        </div>
        <hr />
        <div className="h-7 flex justify-between">
          <Typography variant="h6" fontWeight="bold" className="my-auto">
            Total price
          </Typography>
          <Typography variant="h6" fontWeight="bold" className="my-auto">
            600฿
          </Typography>
        </div>
        <hr />
        <div className="h-7 flex justify-between">
          <Typography variant="h6" fontWeight="bold" className="my-auto">
            Status
          </Typography>

          <Typography variant="h6" className="px-3 py-1 border rounded-full bg-available">
            Avilable
          </Typography>
        </div>
        <hr />
        <div className="flex justify-center">
          <Button type="submit" className="bg-primary w-full lg:w-[148px] ">
            Rent
          </Button>
        </div>
      </div>
    </div>
  )
}
