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
              <AccordionTrigger>
                What types of assets can I rent out on the platform?
              </AccordionTrigger>
              <AccordionContent>
                Our platform accommodates a wide range of assets, including but not limited to
                equipment, vehicles, spaces, tools, and even services. If you're unsure whether your
                asset fits within our guidelines, feel free to reach out to our support team for
                clarification.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How does the chat feature work for communicating with renters/owners?
              </AccordionTrigger>
              <AccordionContent>
                Our built-in chat feature allows seamless communication between renters and asset
                owners. Once a rental inquiry is made or an asset is listed, both parties can engage
                in real-time messaging within the platform to discuss rental terms, ask questions,
                and finalize agreements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How can I purchase ads to promote my assets on the platform?
              </AccordionTrigger>
              <AccordionContent>
                Users have the option to boost the visibility of their listed assets by purchasing
                ad placements within our platform. Simply navigate to the advertising section in
                your dashboard, choose your desired ad format (e.g., banner, sponsored listing), set
                your budget, and target audience, and launch your ad campaign.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is there a rating system for renters and asset owners?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we encourage users to provide feedback and ratings based on their rental
                experiences to foster transparency and trust within our community. Both renters and
                asset owners can rate each other based on factors such as communication,
                reliability, and overall satisfaction.
              </AccordionContent>
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
