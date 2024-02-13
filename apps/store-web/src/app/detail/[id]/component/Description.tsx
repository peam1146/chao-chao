'use client'

import { useState } from 'react'

import { Rating } from '@/app/components/rating'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Typography from '@/components/ui/typography'
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
  const dayjs = require('dayjs')

  const currentDay = new Date()
  currentDay.setHours(0, 0, 0, 0)
  const [startDate, setStartDate] = useState<Date | undefined>(new Date(currentDay))
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(currentDay.getTime() + 1000 * 3600 * 24)
  )
  const [periodText, setPeriodText] = useState<string>('1 Day')

  const timePeriod = (startDate: Date | undefined, endDate: Date | undefined): string => {
    if (startDate instanceof Date && endDate instanceof Date) {
      const diffTime = endDate.getTime() - startDate.getTime()
      const totalDate = Math.round(diffTime / (1000 * 3600 * 24))
      const month = Math.round(totalDate / 30)
      const day = totalDate % 30

      var monthText = String()
      if (month == 1) {
        monthText = '1 Month'
      } else if (month > 1) {
        monthText = month.toString() + ' Months'
      }

      var dayText = String()
      if (day == 1) {
        dayText = '1 Day'
      } else if (day > 1) {
        dayText = day.toString() + ' Days'
      }

      var periodText = String()
      if (monthText.length && dayText.length) {
        periodText = monthText + ', ' + dayText
      } else if (monthText.length) periodText = monthText
      else if (dayText.length) periodText = dayText
      return periodText
    } else {
      return ''
    }
  }

  return (
    <div className="h-full lg:w-1/2 flex flex-col gap-y-4">
      <div className="flex flex-col">
        <Typography variant="h3" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h4" className="text-primary">
          {price}฿/day
        </Typography>
      </div>
      <div className="flex gap-0.5">
        <Rating name="read-only" value={rating} max={5} />
        <Typography variant="h5" className="text-light my-auto pt-0.5">
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
        <div className="h-fit lg:h-7 flex flex-col lg:flex-row justify-between">
          <Typography variant="h6" fontWeight="bold" className="my-auto">
            Date
          </Typography>
          <div className="flex justify-between gap-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-x-2 bg-transparent grow lg:grow-0"
                >
                  <CalendarBlank size={16} />
                  <Typography variant="h6">{dayjs(startDate).format('DD/MM/YY')}</Typography>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={(e) => {
                    setStartDate(e)
                    setPeriodText(timePeriod(e, endDate))
                  }}
                  disabled={(date) =>
                    date < new Date(Date.now() - 1000 * 3600 * 24) ||
                    (endDate instanceof Date &&
                      date > new Date(endDate.getTime() - 1000 * 3600 * 24))
                  }
                  required
                />
              </PopoverContent>
            </Popover>
            <Typography variant="h6" className="my-auto">
              -
            </Typography>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-27 gap-x-2 bg-transparent grow lg:grow-0"
                >
                  <CalendarBlank size={16} />
                  <Typography variant="h6">{dayjs(endDate).format('DD/MM/YY')}</Typography>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={(e) => {
                    setEndDate(e)
                    setPeriodText(timePeriod(startDate, e))
                  }}
                  disabled={(date) =>
                    startDate instanceof Date &&
                    date < new Date(startDate.getTime() + 1000 * 3600 * 24)
                  }
                  required
                />
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
            {periodText}
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
