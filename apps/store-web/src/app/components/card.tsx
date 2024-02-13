'use client'

import product from '@/assets/images/product.png'
import Typography from '@/components/ui/typography'
import Image from 'next/image'

import { Rating } from './rating'

export default function Card() {
  return (
    <main className="flex flex-col lg:flex-row w-full bg-card rounded-md items-start lg:items-center justify-center lg:gap-x-8 p-4 gap-2 ">
      <div className="flex lg:w-1/2 lg:h-[306px] justify-center">
        <Image src={product} alt="Product picture" width={0} height={0} className="rounded-md" />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 lg:gap-8 gap-2">
        <div className="flex flex-col gap-2">
          <Typography variant="h5" fontWeight="bold" className="lg:h3">
            เสื้อสตรีท รุ่น APE ดำ-ขาว ลิขสิทธิแท้
          </Typography>
          <div className="flex flex-row gap-0.5 ">
            <Rating value={4} max={5} />
            <Typography variant="h6" className="text-light my-auto">
              4.0
            </Typography>
          </div>
          <Typography variant="h6" className="text-light">
            สิ่งนี้คือรายละเอียด ตอนนี้จะตีหนึ่งแล้ว ยังนั่งทำดีไซน์อยู่เลย อยากไปคอนเสิต olivia
            ข้าวแกงกะหรี่ tokidoki อร่อยสุดๆ อยากให้ทุกคนไปลอง
          </Typography>
        </div>
        <Typography variant="h5" className="lg:h4">
          100฿/วัน
        </Typography>
      </div>
    </main>
  )
}
