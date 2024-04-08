import React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Typography from '@/components/ui/typography'
import { CalendarBlank } from '@phosphor-icons/react'
import { Separator } from '@radix-ui/react-separator'

type SelectAssetDateModalProps = {
  handleOpenChange: (open: boolean) => void
}

export function SelectAssetDateModal(props: SelectAssetDateModalProps) {
  const { handleOpenChange } = props
  // const dayjs = require("dayjs");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <Typography variant="h4" fontWeight="bold">
          Select advertising date
        </Typography>
        <Separator orientation="horizontal" className="border-b border-border" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Typography variant="h6" fontWeight="bold">
              Start date
            </Typography>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-x-2 bg-transparent grow lg:grow-0"
                >
                  <CalendarBlank size={16} />
                  {/* {field.value ? ( */}
                  {/* 	dayjs(field.value).format("DD/MM/YY") */}
                  {/* ) : ( */}
                  <span>Pick date</span>
                  {/* )} */}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <Calendar
                  mode="single"
                  disabled={{ before: new Date() }}
                  // selected={field.value}
                  // onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <Typography variant="h3" className="my-auto">
            -
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography variant="h6" fontWeight="bold">
              End date
            </Typography>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-27 gap-x-2 bg-transparent grow lg:grow-0"
                >
                  <CalendarBlank size={16} />
                  {/* {field.value ? ( */}
                  {/* 	dayjs(field.value).format("DD/MM/YY") */}
                  {/* ) : ( */}
                  <span>Pick date</span>
                  {/* )} */}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <Calendar
                  mode="single"
                  disabled={{ before: new Date() }}
                  // selected={field.value}
                  // onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Typography variant="h6" fontWeight="bold">
            Total cost
          </Typography>
          <div className="flex flex-col text-center">
            <Typography variant="h4" fontWeight="bold" className="text-primary">
              ฿3000
            </Typography>
            <Typography variant="h6" className="text-light">
              /30 days (฿100/day)
            </Typography>
          </div>
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
        <Button variant="default" type="submit" size="lg" className="w-full lg:w-[108px] ">
          <Typography variant="h5"> Select </Typography>
        </Button>
      </div>
    </div>
  )
}
