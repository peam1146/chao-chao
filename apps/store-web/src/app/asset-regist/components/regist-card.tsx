'use client'

import { ChangeEvent, useEffect, useRef } from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'

import mockPic from '@/assets/images/mockPic2.png'
import { TooltipProvider } from '@/components/plate-ui/tooltip'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from '@phosphor-icons/react'
import { ListPlus, X, XCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import { z } from 'zod'

import TagsInput from '../TagsInput'
import { PlateEditor } from './description'
import { Tag, TagInput } from './tags/tag-input'

export const assetSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.',
  }),
  fee: z.string(),
  category: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
  description: z.string(),
  profileImg: z.string().url(),
})
export default function RegistCard() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      console.log('Selected file:', file)
    }
  }
  type AssetSchema = z.infer<typeof assetSchema>
  const form = useForm<AssetSchema>({
    resolver: zodResolver(assetSchema),
  })
  async function onSubmit(data: z.infer<typeof assetSchema>) {
    console.log(data)
  }
  const ListforImage = [mockPic, mockPic, mockPic, mockPic, mockPic, mockPic, mockPic, mockPic]
  const Demotags: Tag[] = [
    { id: Math.random().toString(36), text: 'Sports' },
    { id: Math.random().toString(36), text: 'Travel' },
    { id: Math.random().toString(36), text: 'Programming' },
  ]
  const [tags, setTags] = React.useState<Tag[]>(Demotags)
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-row gap-1">
        <ListPlus size={22}></ListPlus>
        <Typography variant="h4" fontWeight="bold">
          Asset Registration
        </Typography>
      </div>
      <div className="flex flex-col w-full max-w-[1100px] bg-card rounded-md p-6 dark:border-none light:border-primary border-solid border-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-fit w-full flex flex-col gap-4 my-auto "
          >
            <div className="flex w-full lg:flex-row flex-col gap-8">
              {/*Name + Rental Fee*/}
              <div className="flex flex-col max-w-[428px] w-full">
                <Typography variant="h5">Name</Typography>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" error={!!form.formState.errors.name} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/*Rental Fee*/}
              <div className="flex flex-row items-end gap-[10px]">
                <div className="flex flex-col w-full max-w-[428px] min-w-[100px]">
                  <Typography variant="h5">Rental Fee</Typography>
                  <FormField
                    control={form.control}
                    name="fee"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="0.00" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-[106px]">
                    <SelectValue placeholder="฿/day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="฿/day">฿/day</SelectItem>
                      <SelectItem value="฿/month">฿/month</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/*Name + Rental Fee*/}
            </div>

            <div>
              {/*Category*/}
              <Typography variant="h5">Category</Typography>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start">
                    <FormControl>
                      <div>
                        <TagInput
                          {...field}
                          placeholder="Enter a topic"
                          tags={tags}
                          className="sm:min-w-[450px]"
                          setTags={(newTags) => {
                            setTags(newTags)
                          }}
                        />
                        {/* <TagsInput {...field} /> */}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              {/*Description*/}
              <Typography variant="h5">Description</Typography>
              <TooltipProvider>
                <PlateEditor />
              </TooltipProvider>
            </div>
            <div className="w-full ">
              {/*Image*/}
              <Typography variant="h5">Image</Typography>

              <div className="grid gap-2 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-3">
                <div className="flex md:w-[120px] w-[80px] md:h-[120px] h-[80px] justify-center items-center rounded-[8px] border-primary border-dashed border-2">
                  <p onClick={handleButtonClick}>
                    <Plus className="w-4 h-4 text-primary" />
                  </p>
                  <Input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
                {ListforImage.map((item, index) => (
                  <div className="relative">
                    {/* <div className="w-[24px] h-[24px] rounded-full bg-primary justify-center items-center">
                      <X size={16} />
                    </div> */}
                    <XCircle
                      size={24}
                      weight="fill"
                      className="absolute md:right-1 md:top-1 right-3 top-1 text-primary"
                      // onClick={}
                    />
                    <Image
                      key={index}
                      src={item}
                      width={0}
                      height={0}
                      alt="add picture"
                      className="rounded-[8px] md:w-[120px] w-[80px] md:h-[120px] h-[80px]"
                    ></Image>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="flex flex-row w-full gap-[10px] md:justify-center sm:justify-between">
        <Button variant="secondary" className="w-[160px]">
          <Typography variant="h5">Cancel</Typography>
        </Button>
        <Button className="w-[160px]">
          <Typography variant="h5">Confirm</Typography>
        </Button>
      </div>
    </div>
  )
}
