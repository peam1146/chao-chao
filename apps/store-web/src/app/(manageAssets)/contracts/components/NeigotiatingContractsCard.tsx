'use client'

import { useForm } from 'react-hook-form'

import mockPic from '@/assets/images/mockPic.png'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import FileUpload from '@/components/ui/fileUpload'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Paperclip, PencilSimple, X } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

import { Maybe, Media, resolve } from '../../../../../gqty'

const validationSchema = z.object({
  insuranceFee: z.coerce.number().min(0, 'Insurance fee must be greater than 0').optional(),
  deliveryFee: z.coerce.number().min(0, 'Delivery fee must be greater than 0').optional(),
  // contractFile: z.coercez.instanceof(FileList).optional(),
})

type ValidationSchema = z.infer<typeof validationSchema>

type ContractCardprop = {
  title: String
  userFrom: String
  startDate: Date
  endDate: Date
  rentalFee: number
  insureanceFee?: number
  deliveryFee?: number
}
export default function NeigotiatingContractsCard({
  name,
  image,
  price,
  periodType,
  status,
  // prop,
}: {
  name: string
  image?: Maybe<Media>
  price: number
  periodType: string
  status: string
  // prop?: ContractCardprop
}) {
  // const { title, userFrom, startDate, endDate, rentalFee, insureanceFee, deliveryFee } =
  //   prop || undefined

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const { toast } = useToast()
  // const router = useRouter()

  async function onSubmit(data: z.infer<typeof validationSchema>) {
    // try {
    //   await resolve(
    //     async ({ mutation }) => {
    //       // const user = mutation.createUser({
    //       //   data: {
    //       //     email: data.email,
    //       //     password: data.password,
    //       //     phone: data.phone,
    //       //     roles: [User_roles_MutationInput.User],
    //       //   },
    //       // })
    //       // return user
    //     },
    //     {
    //       cachePolicy: 'no-store',
    //     }
    //   )
    // } catch (err) {
    //   return err
    // }
    toast({
      title: 'Success',
      description: 'The rental information has been updated.',
      success: true,
    })
  }

  async function onAccept() {
    toast({
      title: 'Success',
      description: 'You have accepted the contract.',
      success: true,
    })
  }

  return (
    <>
      <div className="flex max-lg:flex-col items-center h-fit bg-card rounded-2xl px-4 py-2 gap-4 border lg:border-2 border-transparent">
        <div className="flex flex-1 gap-3">
          <div className="flex h-[130px] w-[130px] my-auto">
            {/* {image && <Image src={mockPic} alt="picture" className="object-contain rounded-lg" />} */}
            <Image src={mockPic} alt="picture" className="object-contain rounded-lg" />
          </div>

          <div className="flex flex-col flex-1 gap-1 max-xl:hidden">
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h5">{name}</Typography>
            </Button>
            <hr className="w-full" />
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                {status === 'beingRented' ? 'Request from:' : 'Asset from:'}
              </Typography>
              <Button variant="link" className="p-0 w-fit h-fit">
                <Typography variant="h6">มาย มุมุ</Typography>
              </Button>
            </div>
            <div className="flex 2xl:gap-8 ">
              <div className="flex gap-1 w-[180px]">
                <Typography variant="h6" className="text-light">
                  Date:
                </Typography>
                <Typography variant="h6">18/03/67 - 20/03/67</Typography>
              </div>
              <div className="flex gap-1">
                <Typography variant="h6" className="text-light">
                  Rental fee:
                </Typography>
                <Typography variant="h6">
                  ฿60 (฿{price}/{periodType})
                </Typography>
              </div>
            </div>
            <div className="flex 2xl:gap-8">
              <div className="flex gap-1 w-[180px]">
                <Typography variant="h6" className="text-light">
                  Insurance fee:
                </Typography>
                <Typography variant="h6">฿1000</Typography>
              </div>
              <div className="flex gap-1">
                <Typography variant="h6" className="text-light">
                  Delivery fee:
                </Typography>
                <Typography variant="h6">-</Typography>
              </div>
            </div>
            <div className="flex 2xl:gap-8">
              <div className="flex gap-1 w-[180px]">
                <Typography variant="h6" className="text-light">
                  Total fee:
                </Typography>
                <Typography variant="h6">฿1060</Typography>
              </div>
              <div className="flex gap-1">
                <Badge
                  variant="outline"
                  size="md"
                  className="px-3 py-1 gap-1 border-muted-foreground"
                >
                  <Paperclip size={16} />
                  <Typography variant="h6" className="text-secondary">
                    สัญญาเช่า.pdf
                  </Typography>
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-1 xl:hidden ">
            <Button variant="link" className="p-0 w-fit h-fit">
              <Typography variant="h5">{name}</Typography>
            </Button>
            <hr className="w-full" />
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                {status === 'beingRented' ? 'Request from:' : 'Asset from:'}
              </Typography>
              <Button variant="link" className="p-0 w-fit h-fit">
                <Typography variant="h6" className="text-primary">
                  มาย มุมุ
                </Typography>
              </Button>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Date:
              </Typography>
              <Typography variant="h6">18/03/67 - 20/03/67</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Rental fee:
              </Typography>
              <Typography variant="h6">
                ฿60 (฿{price}/{periodType})
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Insurance fee:
              </Typography>
              <Typography variant="h6">฿1000</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Delivery fee:
              </Typography>
              <Typography variant="h6">-</Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="h6" className="text-light">
                Total fee:
              </Typography>
              <Typography variant="h6">฿1060</Typography>
            </div>
            <div className="flex gap-1">
              <Badge
                variant="outline"
                size="md"
                className="px-3 py-1 gap-1 border-muted-foreground"
              >
                <Paperclip size={16} />
                <Typography variant="h6" fontWeight="regular" className="text-secondary">
                  สัญญาเช่า.pdf
                </Typography>
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 max-lg:hidden">
          {status === 'beingRented' ? (
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
                        className="h-fit w-full flex flex-col items-center gap-4"
                        noValidate
                      >
                        <div className="w-full flex flex-col gap-y-5 ">
                          <div className="flex flex-row gap-4">
                            <FormField
                              control={form.control}
                              name="insuranceFee"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <div className="flex flex-col gap-1">
                                      <Typography variant="h5" fontWeight="regular">
                                        Insurance fee (฿)
                                      </Typography>
                                      <Input
                                        type="number"
                                        placeholder="฿0.00"
                                        // error={!!form.formState.errors.email}
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="deliveryFee"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <div className="flex flex-col gap-1">
                                      <Typography variant="h5" fontWeight="regular">
                                        Delivery fee (฿)
                                      </Typography>
                                      <Input
                                        type="number"
                                        placeholder="฿0.00"
                                        // error={!!form.formState.errors.email}
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="contractFile"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div className="flex flex-col gap-1">
                                    <Typography variant="h5" fontWeight="regular">
                                      Contract file
                                    </Typography>
                                    <FileUpload
                                      uploadText="Drag a file here or "
                                      uploadStatus="default"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full flex flex-row justify-end gap-2">
                          <DialogClose asChild>
                            <Button type="button" variant="outline">
                              Cancel
                            </Button>
                          </DialogClose>

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
              onClick={() => {
                onAccept()
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

        <div className="flex w-full gap-2 lg:hidden">
          {status === 'beingRented' ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  className="gap-2 w-1/2"
                  onClick={(e) => {
                    e.stopPropagation()
                    e.nativeEvent.preventDefault()
                  }}
                >
                  <PencilSimple size={20} />
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
                        className="h-fit w-full flex flex-col items-center gap-4"
                        noValidate
                      >
                        <div className="w-full flex flex-col gap-y-5 ">
                          <div className="flex flex-row gap-4">
                            <FormField
                              control={form.control}
                              name="insuranceFee"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <div className="flex flex-col gap-1">
                                      <Typography variant="h5" fontWeight="regular">
                                        Insurance fee (฿)
                                      </Typography>
                                      <Input
                                        type="number"
                                        placeholder="฿0.00"
                                        // error={!!form.formState.errors.email}
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="deliveryFee"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <div className="flex flex-col gap-1">
                                      <Typography variant="h5" fontWeight="regular">
                                        Delivery fee (฿)
                                      </Typography>
                                      <Input
                                        type="number"
                                        placeholder="฿0.00"
                                        // error={!!form.formState.errors.email}
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="contractFile"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <div className="flex flex-col gap-1">
                                    <Typography variant="h5" fontWeight="regular">
                                      Contract file
                                    </Typography>
                                    <FileUpload
                                      uploadText="Drag a file here or "
                                      uploadStatus="default"
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full flex flex-row justify-end gap-2">
                          <DialogClose asChild>
                            <Button type="button" variant="outline">
                              Cancel
                            </Button>
                          </DialogClose>
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
              className="gap-2 w-1/2 px-1"
              onClick={() => {
                onAccept()
              }}
            >
              <Check size={20} />
              Accept Contract
            </Button>
          )}
          <Button variant="outline" className="gap-2 w-1/2">
            <X size={20} />
            Decline
          </Button>
        </div>
      </div>
    </>
  )
}
