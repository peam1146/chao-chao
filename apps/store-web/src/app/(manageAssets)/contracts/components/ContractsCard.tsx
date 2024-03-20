'use client'

import { useForm } from 'react-hook-form'

import mockPic from '@/assets/images/mockPic.png'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Paperclip, PencilSimple, X } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'

import { Maybe, Media, resolve } from '../../../../../gqty'

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'An email address must contain a single @',
  }),
  phone: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      'An phone number must contain 10 characters.'
    ),
  password: z.string().min(6, { message: 'An password must contain at least 6 characters.' }),
})

type ValidationSchema = z.infer<typeof validationSchema>

export default function ContractsCard({
  name,
  image,
  price,
  periodType,
  status,
}: {
  name: string
  image?: Maybe<Media>
  price: number
  periodType: string
  status: string
}) {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  async function onSubmit(data: z.infer<typeof validationSchema>) {
    try {
      await resolve(
        async ({ mutation }) => {
          // const user = mutation.createUser({
          //   data: {
          //     email: data.email,
          //     password: data.password,
          //     phone: data.phone,
          //     roles: [User_roles_MutationInput.User],
          //   },
          // })
          // return user
        },
        {
          cachePolicy: 'no-store',
        }
      )
    } catch (err) {
      return err
    }
  }
  return (
    // <Link href="./detail/1">
    <div className="flex max-lg:flex-col items-center h-fit bg-card rounded-2xl px-4 py-2 gap-4 border lg:border-2 border-transparent hover:border-primary hover:border-opacity-100">
      <div className="flex flex-1 gap-3">
        <div className="flex h-[130px] w-[130px] my-auto">
          {/* {image && <Image src={mockPic} alt="picture" className="object-contain rounded-lg" />} */}
          <Image src={mockPic} alt="picture" className="object-contain rounded-lg" />
        </div>

        <div className="flex flex-col flex-1 gap-1 max-xl:hidden">
          <Typography variant="h5" fontWeight="regular" className="text-primary">
            {name}
          </Typography>
          <hr className="w-full" />
          <div className="flex gap-1">
            <Typography variant="h6" fontWeight="regular" className="text-light">
              Request from:
            </Typography>
            <Typography variant="h6" fontWeight="regular" className="text-primary">
              มาย มุมุ
            </Typography>
          </div>
          <div className="flex gap-2 2xl:gap-8 ">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" fontWeight="regular" className="text-light">
                Date:
              </Typography>
              <Typography variant="h6" fontWeight="regular">
                18/03/67 - 20/03/67
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" fontWeight="regular" className="text-light">
                Rental fee:
              </Typography>
              <Typography variant="h6" fontWeight="regular">
                ฿60 (฿{price}/{periodType})
              </Typography>
            </div>
          </div>
          <div className="flex gap-2 2xl:gap-8">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" fontWeight="regular" className="text-light">
                Insurance fee:
              </Typography>
              <Typography variant="h6" fontWeight="regular">
                ฿1000
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" fontWeight="regular" className="text-light">
                Delivery fee:
              </Typography>
              <Typography variant="h6" fontWeight="regular">
                -
              </Typography>
            </div>
          </div>
          <div className="flex gap-2 2xl:gap-8">
            <div className="flex gap-1 w-[180px]">
              <Typography variant="h6" fontWeight="regular" className="text-light">
                Total fee:
              </Typography>
              <Typography variant="h6" fontWeight="regular">
                ฿1060
              </Typography>
            </div>
            <div className="flex gap-1">
              <Badge variant="outline" size="md" className="px-3 py-1 border-muted-foreground">
                <Paperclip size={16} />
                <Typography variant="h6" fontWeight="regular" className="text-secondary">
                  สัญญาเช่า.pdf
                </Typography>
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-1 xl:hidden ">
          <Typography variant="h5" fontWeight="regular" className="text-primary">
            {name}
          </Typography>
          <hr className="w-full" />
          <div className="flex gap-1">
            <Typography variant="h6" fontWeight="regular" className="text-light">
              Request from:
            </Typography>
            <Typography variant="h6" fontWeight="regular" className="text-primary">
              มาย มุมุ
            </Typography>
          </div>
          <div className="flex gap-1 w-[180px]">
            <Typography variant="h6" fontWeight="regular" className="text-light">
              Date:
            </Typography>
            <Typography variant="h6" fontWeight="regular">
              18/03/67 - 20/03/67
            </Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" fontWeight="regular" className="text-light">
              Rental fee:
            </Typography>
            <Typography variant="h6" fontWeight="regular">
              ฿60 (฿{price}/{periodType})
            </Typography>
          </div>
          <div className="flex gap-1 w-[180px]">
            <Typography variant="h6" fontWeight="regular" className="text-light">
              Insurance fee:
            </Typography>
            <Typography variant="h6" fontWeight="regular">
              ฿1000
            </Typography>
          </div>
          <div className="flex gap-1">
            <Typography variant="h6" fontWeight="regular" className="text-light">
              Delivery fee:
            </Typography>
            <Typography variant="h6" fontWeight="regular">
              -
            </Typography>
          </div>
          <div className="flex gap-1 w-[180px]">
            <Typography variant="h6" fontWeight="regular" className="text-light">
              Total fee:
            </Typography>
            <Typography variant="h6" fontWeight="regular">
              ฿1060
            </Typography>
          </div>
          <div className="flex gap-1">
            <Badge variant="outline" size="md" className="px-3 py-1 border-muted-foreground">
              <Paperclip size={16} />
              <Typography variant="h6" fontWeight="regular" className="text-secondary">
                สัญญาเช่า.pdf
              </Typography>
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 max-lg:hidden">
        {status === 'renting' ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="gap-2"
                onClick={(e) => {
                  e.stopPropagation()
                  e.nativeEvent.preventDefault()
                }}
              >
                <PencilSimple size={16} />
                Edit Contract
              </Button>
            </DialogTrigger>
            <DialogContent className="flex flex-col w-[462px] h-fit bg-card rounded-2xl gap-4 p-6">
              <DialogHeader className="gap-3">
                <DialogTitle>Please fill in the required information.</DialogTitle>
                <DialogDescription className="flex flex-row gap-4">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="h-fit w-full flex flex-col items-center"
                      noValidate
                    >
                      <div className="w-full flex flex-col gap-y-5 ">
                        <div className="flex flex-row gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div className="flex flex-col gap-1">
                                    <div>
                                      <Typography variant="h5" fontWeight="regular">
                                        Insurance fee (฿)
                                      </Typography>
                                    </div>
                                    <div className="w-full relative">
                                      <Input
                                        type="number"
                                        placeholder="฿0.00"
                                        className="pl-9"
                                        // error={!!form.formState.errors.email}
                                        {...field}
                                      />
                                    </div>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div className="flex flex-col gap-1">
                                    <div>
                                      <Typography variant="h5" fontWeight="regular">
                                        Delivery fee (฿)
                                      </Typography>
                                    </div>
                                    <div className="w-full relative">
                                      <Input
                                        type="number"
                                        placeholder="฿0.00"
                                        className="pl-9"
                                        // error={!!form.formState.errors.email}
                                        {...field}
                                      />
                                    </div>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-col gap-1">
                                  <div>
                                    <Typography variant="h5" fontWeight="regular">
                                      Contract file
                                    </Typography>
                                  </div>
                                  <div className="w-full relative">
                                    <Input
                                      type="number"
                                      placeholder="฿0.00"
                                      className="pl-9"
                                      // error={!!form.formState.errors.email}
                                      {...field}
                                    />
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="w-full flex flex-row justify-end gap-2">
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit">Submit</Button>
                      </div>
                    </form>
                  </Form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ) : (
          <Button
            size="sm"
            className="gap-2"
            onClick={(e) => {
              e.stopPropagation()
              e.nativeEvent.preventDefault()
            }}
          >
            <Check size={16} />
            Accept Contract
          </Button>
        )}
        <Button variant="outline" size="sm" className="gap-2">
          <X size={16} />
          Decline
        </Button>
      </div>
    </div>
    // </Link>
  )
}
