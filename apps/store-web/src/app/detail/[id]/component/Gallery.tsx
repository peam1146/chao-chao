'use client'

import { useState } from 'react'

import mockPic2 from '@/assets/images/mockPic2.png'
import mockPic3 from '@/assets/images/mockPic3.jpg'
import mockPic4 from '@/assets/images/mockPic4.jpg'
import mockPic5 from '@/assets/images/mockPic5.jpg'
import mockPic from '@/assets/images/mockPic.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image, { StaticImageData } from 'next/image'

const mockListPics = [mockPic, mockPic2, mockPic3, mockPic4, mockPic5]

export default function Gallery() {
  const [mainPic, setMainPic] = useState<StaticImageData>(mockListPics[0])

  const clickPic = (img: StaticImageData) => {
    setMainPic(img)
  }

  return (
    <div className="flex flex-col lg:w-1/2 h-fit gap-4 justify-item-center">
      <div className="h-95 w-full grid px-2">
        <Image
          src={mainPic}
          width={380}
          height={380}
          alt="Focus Picture"
          className="justify-self-center"
        />
      </div>

      <Carousel className="mx-7 lg:mx-12">
        <CarouselPrevious />
        <CarouselContent>
          {mockListPics.map((img, index) => (
            <CarouselItem className="basis-1/3" key={index}>
              <Image
                src={img}
                width={100}
                height={100}
                alt="Other Picture"
                className="hover:border-primary hover:border-2"
                onClick={() => clickPic(img)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  )
}
