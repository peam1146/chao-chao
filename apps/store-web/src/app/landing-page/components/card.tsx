'use client'

import Typography from '@/components/ui/typography'
import Image from 'next/image'

export default function Card() {
  return (
    <main className="flex flex-col lg:flex-row w-full md:h-338 bg-background rounded-md items-center justify-center gap-5 p-3">
      <div className="flex w-50%">
        <Image src="/product.svg" alt="product picture" width={555} height={306}></Image>
      </div>
      <div className="flex flex-col w-50%">
        <Typography variant="h3" fontWeight="bold">
          เสื้อสตรีท รุ่น APE ดำ-ขาว ลิขสิทธิแท้
        </Typography>
        <div className="text-h6 ">rating</div>
        <Typography variant="h6">
          สิ่งนี้คือรายละเอียด ตอนนี้จะตีหนึ่งแล้ว ยังนั่งทำดีไซน์อยู่เลย อยากไปคอนเสิต olivia
          ข้าวแกงกะหรี่ tokidoki อร่อยสุดๆ อยากให้ทุกคนไปลอง
        </Typography>
        <Typography variant="h6" className="pt-4">
          100฿/วัน
        </Typography>
      </div>
    </main>
  )
}
