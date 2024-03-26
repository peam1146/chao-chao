'use client'

import { useForm } from 'react-hook-form'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { Headset, Info, PaperPlaneTilt } from '@phosphor-icons/react'
import { z } from 'zod'

const validationSchema = z.object({
  problem: z
    .string({
      required_error: 'Text is required.',
    })
    .min(1, {
      message: 'Text is required.',
    }),
})

type ValidationSchema = z.infer<typeof validationSchema>

function onSubmit(data: z.infer<typeof validationSchema>) {}

export default function HelpPage() {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  return (
    <div className="container flex flex-col gap-10 my-10">
      <div className="flex flex-col gap-4">
        <div className="flex gap-1">
          <Info size={24} />
          <Typography variant="h4" fontWeight="bold">
            Help Center
          </Typography>
        </div>
        <div className="self-center lg:w-5/6 w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-1">
          <Headset size={24} />
          <Typography variant="h4" fontWeight="bold">
            Contact administrator
          </Typography>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="problem"
              render={({ field }) => (
                <FormItem className="lg:w-5/6 w-full self-center">
                  <FormControl>
                    <Textarea
                      placeholder="Tell us your problem..."
                      className=" h-[124px]"
                      error={!!form.formState.errors.problem}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" className="gap-2 w-full lg:w-[108px]">
                <PaperPlaneTilt size={20} />
                Send
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
