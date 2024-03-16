'use client'

import { ChangeEvent } from 'react'
import React from 'react'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import mockPic from '@/assets/images/mockPic2.png'
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
import { Textarea } from '@/components/ui/textarea'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from '@phosphor-icons/react'
import { ListPlus, XCircle } from '@phosphor-icons/react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

import { Item_periodType_MutationInput, useQuery } from '../../../../../gqty'
import { resolve } from '../../../../../gqty'
import { Tag, TagInput } from '../../../../components/ui/tags/tag-input'

export const assetSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(1, {
      message: 'Name is required.',
    }),
  fee: z.coerce.number().optional(),
  description: z.string().optional(),
})
export default function RegisterCard() {
  const [imageUrl, setImageUrl] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const [listImg, setListImg] = useState<string[]>([])
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const newfile = [...imageUrl, file]
      setImageUrl(newfile)
      if (!file) return
      const url = URL.createObjectURL(file)
      const newList = [...listImg, url]
      setListImg(newList)
    }
  }
  const handleDeleteImage = (idx: any) => {
    const newImages = [...listImg]
    newImages.splice(idx, 1)
    setListImg(newImages)
  }
  const [tags, setTags] = useState<Tag[]>([])
  const [search, setSearch] = useState('')
  const form = useForm<z.infer<typeof assetSchema>>({
    resolver: zodResolver(assetSchema),
  })
  const router = useRouter()
  const { toast } = useToast()
  const { Tags } = useQuery({ fetchPolicy: 'cache-first' })
  const tagsDB = Tags({
    draft: false,
  })?.docs?.map((tag) => {
    return { id: tag?.id, text: tag?.name }
  })
  console.log('tagsUser', tags)
  async function onSubmit(data: z.infer<typeof assetSchema>) {
    console.log('submit data', data)
    // }
    try {
      //`file[${i}]`
      let imageIds: number[] = []
      // console.log('myImage3', imageUrl)
      for (let i = 0; i < imageUrl.length; i++) {
        if (fileInputRef.current?.files && fileInputRef.current?.files.length > 0) {
          const formData = new FormData()
          const token = Object.fromEntries(document.cookie.split('; ').map((c) => c.split('=')))
          formData.append('file', imageUrl[i])
          console.log('form data', formData)
          const response = await fetch('http://localhost:3001/api/medias', {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: `JWT ${token['payload-token']}`,
            },
          })
            .then((response) => response.json())
            .then(async (result) => {
              imageIds.push(result.doc.id)
              console.log('Image uploaded successfully. Image ID: at', result.doc.id)
            })
            .catch((error) => console.error(error))
        }
      }
      console.log('imageIDs', imageIds)
      console.log('mytags', tags)
      for (let e in tags) {
        if (tags[e].id === undefined) {
          const id = await resolve(
            async ({ mutation }) => {
              const newtag = mutation.createTag({
                data: {
                  name: tags[e].text,
                },
              })
              return newtag?.id
            },
            {
              cachePolicy: 'no-store',
            }
          )
          tags[e].id = id!
        }
        console.log('Tagsri', tags)
        await resolve(
          async ({ mutation }) => {
            const register = mutation.createItem({
              data: {
                name: data.name,
                price: data.fee ? data.fee : 0,
                description: data.description ? data.description : '',
                image: imageIds,
                periodType: Item_periodType_MutationInput.days,
                tags: tags.map(({ id }) => id),
              },
            })
            return register
          },
          {
            cachePolicy: 'no-store',
          }
        )
        toast({
          title: 'Success',
          description: 'Your asset has been registered.',
          success: true,
        })
        console.log('success')
        router.push('/myAssets')
      }
    } catch (e) {
      toast({
        title: 'Not Success',
        description: 'At least one image must be uploaded.',
        error: true,
      })
    }
  }
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
                <div className="flex flex-col w-full lg:w-1/2 gap-1">
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
                  <div className="flex flex-col w-full gap-1">
                    <Typography variant="h5">Rental Fee</Typography>
                    <FormField
                      control={form.control}
                      name="fee"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="0.00"
                              error={!!form.formState.errors.fee}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
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
              <div className="flex flex-col w-full gap-1">
                <Typography variant="h5">Category</Typography>
                {/* <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormControl> */}
                <div className="w-full ">
                  <TagInput
                    // {...field}
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
                {/* </FormControl>
                </FormItem>
              )}
            /> */}
              </div>
              <div className="flex flex-col w-full gap-1">
                <Typography variant="h5">Description</Typography>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col w-full gap-1">
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
                        onClick={() => handleDeleteImage(index)}
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
