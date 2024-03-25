'use client'

import { useState } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

import { Maybe, Media } from '../../../../../gqty'

interface GalleryProps {
  imgList?: Maybe<Media[]>
}

export default function Gallery(props: GalleryProps) {
  const { imgList } = props
  const [mainPicIndex, setMainPic] = useState<number>(0)

  const clickPic = (imgIndex: number) => {
    setMainPic(imgIndex)
  }

  return (
    <div className="flex flex-col lg:w-1/2 h-fit gap-4 justify-item-center">
      <div className="h-95 w-full grid px-2">
        <Image
          src={imgList?.at(mainPicIndex)?.url ?? ''}
          width={380}
          height={380}
          alt="Focus Picture"
          className="justify-self-center"
        />
      </div>

      <Carousel className="mx-7 lg:mx-12">
        <CarouselPrevious />
        <CarouselContent>
          {imgList?.map((img, index) => (
            <CarouselItem className="basis-1/3" key={index}>
              <Image
                src={img.url ?? ''}
                width={100}
                height={100}
                alt="Other Picture"
                className="hover:border-primary hover:border-2"
                onClick={() => clickPic(index)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  )
}
