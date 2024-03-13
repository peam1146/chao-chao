'use client'

import { ChangeEvent, useRef } from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'

import mockPic from '@/assets/images/mockPic2.png'
import { TooltipProvider } from '@/components/plate-ui/tooltip'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
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
import { ListPlus, XCircle } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'
import { z } from 'zod'

import { Tag, TagInput } from '../../../../components/ui/tags/tag-input'
import { PlateEditor } from './PlateEditor'

export default function RegisterCard() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const [listImg, setListImg] = React.useState<StaticImageData[]>([])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const newList = [...listImg, mockPic]
      setListImg(newList)
    }
  }
  const handleDeleteImage = (idx: any) => {
    const newImages = [...listImg]
    newImages.splice(idx, 1)
    setListImg(newImages)
  }
  const autoCompleteOptions: Tag[] = [
    { id: Math.random().toString(36), text: 'Food' },
    { id: Math.random().toString(36), text: 'Movies' },
    { id: Math.random().toString(36), text: 'Art' },
    { id: Math.random().toString(36), text: 'Books' },
    { id: Math.random().toString(36), text: 'Music' },
    { id: Math.random().toString(36), text: 'Fashion' },
    { id: Math.random().toString(36), text: 'Health' },
    { id: Math.random().toString(36), text: 'Lifestyle' },
    { id: Math.random().toString(36), text: 'Sports' },
    { id: Math.random().toString(36), text: 'Travel' },
    { id: Math.random().toString(36), text: 'Tech' },
  ]
  const [tags, setTags] = React.useState<Tag[]>([])
  const [tagsDB, setTagsDB] = React.useState<Tag[]>(autoCompleteOptions)
  const [search, setSearch] = React.useState('')
  const assetSchema = z.object({
    name: z
      .string({
        required_error: 'Name is required.',
      })
      .min(1, {
        message: 'Name is required.',
      }),
    fee: z.number(),
    category: z.array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    ),
    description: z.string(),
    profileImg: z.string().url(),
  })
  type AssetSchema = z.infer<typeof assetSchema>

  const form = useForm<AssetSchema>({
    resolver: zodResolver(assetSchema),
  })
  function onSubmit(data: z.infer<typeof assetSchema>) {}
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-row gap-1">
        <ListPlus size={22}></ListPlus>
        <Typography variant="h4" fontWeight="bold">
          Asset Registration
        </Typography>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full bg-card rounded-md p-6 dark:border-none light:border-primary border-solid border-2">
            <div className="h-fit w-full flex flex-col gap-4 my-auto">
              <div className="flex w-full lg:flex-row flex-col gap-4 items-start">
                <div className="flex flex-col w-full lg:w-1/2">
                  <Typography variant="h5">Name</Typography>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            error={!!form.formState.errors.name}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-row items-end gap-[10px] w-full lg:w-1/2">
                  <div className="flex flex-col w-full">
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
                  <div className="relative">
                    <Select>
                      <SelectTrigger className="w-[106px]">
                        <SelectValue placeholder="฿ /day" />
                      </SelectTrigger>
                      <SelectContent className="absolute">
                        <SelectGroup>
                          <SelectItem value="฿/day"> ฿ /day</SelectItem>
                          <SelectItem value="฿/month"> ฿ /month</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div>
                <Typography variant="h5">Category</Typography>
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormControl>
                        <div className="pt-1 w-full ">
                          <TagInput
                            {...field}
                            id="category"
                            placeholder="Enter new category"
                            value={search}
                            tags={tags}
                            enableAutocomplete={true}
                            autocompleteOptions={tagsDB}
                            className="w-full"
                            setTags={(newTags) => {
                              setTags(newTags)
                            }}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Typography variant="h5">Description</Typography>
                <TooltipProvider>
                  <PlateEditor />
                </TooltipProvider>
              </div>
              <div className="w-full ">
                <Typography variant="h5">Image</Typography>

                <div className="grid gap-2 2xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 ">
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
                  {listImg.map((item, index) => (
                    <div className="relative md:w-[120px] w-[80px] md:h-[120px] h-[80px]">
                      <XCircle
                        size={24}
                        weight="fill"
                        className="absolute lg:right-1 md:right-2 right-1 top-1 text-primary"
                        onClick={handleDeleteImage.bind(index)}
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
            </div>
          </div>
          <div className="flex flex-row w-full gap-[10px] md:justify-center sm:justify-between pt-4">
            <Button variant="secondary" className="min-w-[130px] max-lg:w-1/2">
              <Typography variant="h5">Cancel</Typography>
            </Button>
            <Button type="submit" className="min-w-[130px] max-lg:w-1/2">
              <Typography variant="h5">Confirm</Typography>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
