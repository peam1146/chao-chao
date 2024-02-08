'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Typography from '@/components/ui/typography'
import Rating from '@mui/material/Rating'
import { CalendarBlank } from '@phosphor-icons/react'

export default function Description({
  name,
  price,
  tags,
  rating,
  status,
}: {
  name: string
  price: number
  tags: Array<string>
  rating: number
  status: string
}) {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date(Date.now))
  const [endDate, setEndDate] = useState<Date | undefined>(new Date(Date.now))

  return (
    <div className="h-full w-1/2 flex flex-col gap-y-4">
      <div className="flex flex-col">
        <Typography variant="h3" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h4" className="text-primary">
          {price}฿/day
        </Typography>
      </div>
      <div className="flex gap-0.5">
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="h6" className="text-light my-auto">
          {rating.toFixed(1)}
        </Typography>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        {tags.map((item, index) => (
          <Badge variant="outline" key={index} className="px-3 py-1 border-muted-foreground">
            <Typography variant="h6" fontWeight="regular">
              {item}
            </Typography>
          </Badge>
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
          <div className="flex gap-x-2 ">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-x-2 bg-transparent">
                  <CalendarBlank size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
              </PopoverContent>
            </Popover>
            <Typography variant="h6" className="my-auto">
              -
            </Typography>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-x-2 bg-transparent">
                  <CalendarBlank size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
              </PopoverContent>
            </Popover>
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

          {status == 'Available' ? (
            <Typography variant="h6" className="px-3 py-1 border rounded-full bg-available">
              Available
            </Typography>
          ) : (
            <Typography variant="h6" className="px-3 py-1 border rounded-full bg-unavailable">
              Unavailable
            </Typography>
          )}
        </div>
        <hr className={status == 'Available' ? 'block' : 'hidden'} />
        <div className="flex justify-center">
          <Button type="submit" size="lg" className={status == 'Available' ? 'block' : 'hidden'}>
            Rent
          </Button>
        </div>
      </div>
    </div>
  )
}
