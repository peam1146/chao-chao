import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarBlank } from '@phosphor-icons/react'
import { Separator } from '@radix-ui/react-separator'
import { z } from 'zod'

type SelectAssetDateModalProps = {
  handleOpenChange: (open: boolean) => void
  selectedAsset: number | null
}

const advetiseSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
})

export function SelectAssetDateModal(props: SelectAssetDateModalProps) {
  const dayjs = require('dayjs')
  const { handleOpenChange, selectedAsset } = props

  const form = useForm<z.infer<typeof advetiseSchema>>({
    resolver: zodResolver(advetiseSchema),
  })

  const { toast } = useToast()

  const handlePay = async (data: z.infer<typeof advetiseSchema>) => {
    if (data.endDate?.getTime() <= data.startDate?.getTime()) {
      toast({
        title: 'Error',
        description: 'End date must be after start date',
        error: true,
      })
      return
    }
    const result = await fetch(`https://api.chaochao.vishnu20.com/api/stripe/checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify({
        option: 'advertise',
        productId: selectedAsset,
        totalPrice:
          (Math.ceil(data.endDate.getTime() - data.startDate.getTime()) / (1000 * 3600 * 24)) * 100,
        startDate: data.startDate.toISOString(),
        endDate: data.endDate.toISOString(),
      }),
    })

    const stripeData = await result.json()

    if (stripeData.id) {
      window.location.replace(stripeData.url)
    }
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handlePay)}>
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
            </div>
            <Typography variant="h3" className="my-auto">
              -
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography variant="h6" fontWeight="bold">
                End date
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
          <div className="flex flex-col gap-2">
            {form.getValues('endDate') &&
              form.getValues('startDate') &&
              form.getValues('endDate').getTime() - form.getValues('startDate').getTime() >= 0 && (
                <>
                  <Typography variant="h6" fontWeight="bold">
                    Total cost
                  </Typography>
                  <div className="flex flex-col text-center">
                    <Typography variant="h4" fontWeight="bold" className="text-primary">
                      ฿
                      {(Math.ceil(
                        form.getValues('endDate').getTime() - form.getValues('startDate').getTime()
                      ) /
                        (1000 * 3600 * 24)) *
                        100}
                    </Typography>
                    <Typography variant="h6" className="text-light">
                      /
                      {Math.ceil(
                        form.getValues('endDate').getTime() - form.getValues('startDate').getTime()
                      ) /
                        (1000 * 3600 * 24)}{' '}
                      days (฿100/day)
                    </Typography>
                  </div>
                </>
              )}
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
            disabled={!form.formState.isValid}
          >
            <Typography variant="h5">Pay now</Typography>
          </Button>
        </div>
      </form>
    </Form>
  )
}
