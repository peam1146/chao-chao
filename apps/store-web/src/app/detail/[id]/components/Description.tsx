'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import Rating from '@mui/material/Rating'
import { CalendarBlank } from '@phosphor-icons/react'
import { z } from 'zod'

import {
  Item,
  Item_rentingStatus,
  Maybe,
  Renting_status_MutationInput,
  resolve,
  useQuery,
} from '../../../../../gqty'

const requestSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
})

export default function Description({ isSelf, item }: { isSelf: boolean; item: Maybe<Item> }) {
  const dayjs = require('dayjs')

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof requestSchema>>({
    resolver: zodResolver(requestSchema),
  })

  const { toast } = useToast()

  const query = useQuery({
    fetchPolicy: 'cache-and-network',
  })
  const userId = query.meUser?.user?.id

  async function onSubmit(data: z.infer<typeof requestSchema>) {
    setIsLoading(true)

    if (data.endDate?.getTime() <= data.startDate?.getTime()) {
      toast({
        title: 'Error',
        description: 'End date must be after start date',
        error: true,
      })
      setIsLoading(false)
      return
    }
    try {
      await resolve(
        async ({ mutation }) => {
          const request = mutation.createRenting({
            data: {
              startDate: data.startDate?.toISOString(),
              endDate: data.endDate?.toISOString(),
              rentedBy: { user: userId },
              rentedTo: {
                item: item?.id,
                user: item?.createdBy?.id,
              },
              status: Renting_status_MutationInput.PENDING,
              rentalFee:
                Math.ceil(
                  (item?.price ?? 0) * (data.endDate?.getTime() - data.startDate?.getTime())
                ) /
                (1000 * 3600 * 24),
            },
          })
          return request
        },
        {
          cachePolicy: 'no-store',
        }
      )
      toast({
        title: 'Success',
        description: 'Request sent successfully',
        success: true,
      })
      setIsLoading(false)
    } catch {
      toast({
        title: 'Error',
        description: 'You alreary have a pending request for this item',
        error: true,
      })
      setIsLoading(false)
    }
  }

  return (
    <div className="h-full lg:w-1/2 flex flex-col gap-y-4">
      <div className="flex flex-col">
        <Typography variant="h3" fontWeight="bold">
          {item?.name}
        </Typography>
        <Typography variant="h4" className="text-primary">
          {item?.price}฿/day
        </Typography>
      </div>
      <div className="flex gap-0.5">
        <Rating
          name="read-only"
          value={item?.rating}
          readOnly
          sx={{
            '& .MuiRating-iconEmpty': {
              color: '#999999',
            },
          }}
        />
        <Typography variant="h5" className="text-light my-auto pt-0.5">
          {item?.rating?.toFixed(1)}
        </Typography>
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-3">
        {item?.tags?.map((item, index) => (
          <Badge variant="outline" key={index} className="px-3 py-1 border-muted-foreground">
            <Typography variant="h6" fontWeight="regular">
              {item.name}
            </Typography>
          </Badge>
        ))}
      </div>
      <Typography variant="body2">
        {item?.description ? item?.description : 'No details'}
      </Typography>
      {!isSelf && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-3 flex flex-col gap-y-2 border rounded-lg"
          >
            <Typography variant="h5" fontWeight="bold" className="flex justify-center">
              Select date to rent
            </Typography>
            <hr />
            <div className="h-fit lg:h-7 flex flex-col lg:flex-row justify-between">
              <Typography variant="h6" fontWeight="bold" className="whitespace-nowrap my-auto">
                Date
              </Typography>
              <div className="flex justify-between gap-x-2">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-x-2 bg-transparent grow lg:grow-0"
                            >
                              <CalendarBlank size={16} />
                              {field.value ? (
                                dayjs(field.value).format('DD/MM/YY')
                              ) : (
                                <span>Pick date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full">
                          <Calendar
                            mode="single"
                            disabled={{ before: new Date() }}
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
                <Typography variant="h6" className="my-auto">
                  -
                </Typography>
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-27 gap-x-2 bg-transparent grow lg:grow-0"
                            >
                              <CalendarBlank size={16} />
                              {field.value ? (
                                dayjs(field.value).format('DD/MM/YY')
                              ) : (
                                <span>Pick date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            disabled={{ before: new Date() }}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <hr />
            <div className="h-7 flex justify-between">
              <Typography variant="h6" fontWeight="bold" className="my-auto">
                Total period
              </Typography>
              {form.getValues('endDate') &&
                form.getValues('startDate') &&
                form.getValues('endDate').getTime() - form.getValues('startDate').getTime() >=
                  0 && (
                  <Typography variant="h6" fontWeight="bold" className="my-auto">
                    {Math.ceil(
                      form.getValues('endDate').getTime() - form.getValues('startDate').getTime()
                    ) /
                      (1000 * 3600 * 24)}{' '}
                    Day
                  </Typography>
                )}
            </div>
            <hr />
            <div className="h-7 flex justify-between">
              <Typography variant="h6" fontWeight="bold" className="my-auto">
                Total price
              </Typography>
              {form.getValues('endDate') &&
                form.getValues('startDate') &&
                form.getValues('endDate').getTime() - form.getValues('startDate').getTime() >=
                  0 && (
                  <Typography variant="h6" fontWeight="bold" className="my-auto">
                    {Math.ceil(
                      (item?.price ?? 0) *
                        (form.getValues('endDate').getTime() -
                          form.getValues('startDate').getTime())
                    ) /
                      (1000 * 3600 * 24)}
                    ฿
                  </Typography>
                )}
            </div>
            <hr />
            <div className="h-7 flex justify-between">
              <Typography variant="h6" fontWeight="bold" className="my-auto">
                Status
              </Typography>

              {item?.rentingStatus == Item_rentingStatus.available ? (
                <Typography variant="h6" className="px-3 py-1 border rounded-full bg-available">
                  Available
                </Typography>
              ) : (
                <Typography variant="h6" className="px-3 py-1 border rounded-full bg-unavailable">
                  Unavailable
                </Typography>
              )}
            </div>
            <hr
              className={item?.rentingStatus == Item_rentingStatus.available ? 'block' : 'hidden'}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !form.getValues('startDate') || !form.getValues('endDate')}
                className={item?.rentingStatus == Item_rentingStatus.available ? 'block' : 'hidden'}
              >
                <Typography variant="h5" className="flex items-center">
                  {isLoading ? <Spinner /> : 'Rent'}
                </Typography>
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}
