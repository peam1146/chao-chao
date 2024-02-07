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
import Typography from '@/components/ui/typography'
import Image from 'next/image'

export default function Gallery() {
  return (
    <div className="flex flex-col h-full w-full gap-4 border justify-item-center">
      <div className="h-full w-full grid">
        <Image
          src={mockPic}
          width={380}
          height={380}
          alt="Focus Picture"
          className="justify-self-center"
        />
      </div>
      <Typography variant="h3" className="flex flex-row my-auto text-primary">
        โอ้ยแม่งงงงง จัดยังไงวะเนี่ยยยย
      </Typography>

      <Carousel className="h-fit w-fit grid">
        <CarouselPrevious />
        <CarouselContent className="">
          <CarouselItem className="basis-1/3 border">
            <Image
              src={mockPic2}
              width={100}
              height={100}
              alt="Other Picture"
              className="justify-self-center"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3 border">
            <Image
              src={mockPic2}
              width={100}
              height={100}
              alt="Other Picture"
              className="justify-self-center"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3 border">
            <Image
              src={mockPic2}
              width={100}
              height={100}
              alt="Other Picture"
              className="justify-self-center"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3 border">
            <Image
              src={mockPic2}
              width={100}
              height={100}
              alt="Other Picture"
              className="justify-self-center"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  )
}
