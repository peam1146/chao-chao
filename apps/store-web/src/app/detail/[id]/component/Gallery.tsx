'use client'

import mockPic2 from '@/assets/images/mockPic2.png'
import mockPic from '@/assets/images/mockPic.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const mockListPics = [mockPic, mockPic2, mockPic2, mockPic2, mockPic]

export default function Gallery() {
  return (
    <div className="flex flex-col w-1/2 h-fit gap-4 justify-item-center">
      <div className="h-95 w-full grid px-2">
        <Image
          src={mockPic}
          width={380}
          height={380}
          alt="Focus Picture"
          className="justify-self-center"
        />
      </div>

      <Carousel className="mx-12">
        <CarouselPrevious />
        <CarouselContent className="h-25">
          {mockListPics.map((pic, index) => (
            <CarouselItem className="basis-1/3" key={index}>
              <Image
                src={pic}
                width={100}
                height={100}
                alt="Other Picture"
                className="hover:border-primary hover:border-2"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  )
}
