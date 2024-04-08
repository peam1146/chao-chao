'use client'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { Rating } from '@mui/material'
import { DotsThreeVertical, PencilSimple, Trash } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { Maybe, Media, resolve } from '../../../../../gqty'

export default function AssetsCard({
  id,
  name,
  image,
  rating,
  price,
  periodType,
  refetch,
}: {
  id: number
  name: string
  image?: Maybe<Media[]>
  rating: number
  price: number
  periodType: string
  refetch: () => void
}) {
  const { toast } = useToast()
  async function handleDelete() {
    try {
      await resolve(async ({ mutation }) => {
        const asset = mutation.deleteItem({
          id: id,
        })
        return asset
      })
      toast({
        title: 'Success',
        description: 'Asset deleted successfully',
        success: true,
      })

      refetch()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Link href={`/detail/${id}`}>
      <div className="flex flex-col h-fit w-full bg-card rounded-2xl p-4 gap-2 border lg:border-2 border-transparent hover:border-primary hover:border-opacity-100">
        <div className="relative">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="w-6 h-6 p-0 bg-background gap-2 absolute right-0 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  e.nativeEvent.preventDefault()
                }}
              >
                <DotsThreeVertical weight="bold" size={24} className="p-1 font-bold" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-fit p-1 mr-44">
              <Link href={`asset/edit/${id}`}>
                <div className="flex flex-row w-[186px] p-2 gap-2 hover:bg-muted text-muted-foreground rounded-md">
                  <PencilSimple size={16} className="my-auto" />
                  <Typography variant="h6">Edit</Typography>
                </div>
              </Link>

              <div
                className="flex flex-row p-2 gap-2 hover:bg-muted text-muted-foreground rounded-md cursor-pointer"
                onClick={(e) => {
                  handleDelete()
                  e.preventDefault()
                }}
              >
                <Trash size={16} className="my-auto" />
                <Typography variant="h6">Delete</Typography>
              </div>
            </PopoverContent>
          </Popover>
          <div className="flex h-[142px] justify-center">
            {image && (
              <Image
                src={image?.[0]?.url ?? ''}
                width={image?.[0]?.width ?? 0}
                height={image?.[0]?.height ?? 0}
                alt="picture"
                className="object-contain rounded-lg"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-fit items-start">
          <div className="lg:gap-2 gap-1">
            <Typography variant="tiny" fontWeight="bold" className="lg:h4 line-clamp-1">
              {name}
            </Typography>
            <div className="flex max-md:flex-col gap-0.5 ">
              <Rating
                name="read-only"
                value={rating}
                size="small"
                max={5}
                readOnly
                sx={{
                  '& .MuiRating-iconEmpty': {
                    color: '#999999',
                  },
                }}
              />
              <Typography variant="h5" className="text-light pt-0.5 ">
                {rating.toFixed(1)}
              </Typography>
            </div>
          </div>
          <Typography variant="h6">
            {price}฿/{periodType}
          </Typography>
        </div>
      </div>
    </Link>
  )
}
