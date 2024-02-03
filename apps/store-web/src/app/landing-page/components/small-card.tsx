'use client'

import Typography from '@/components/ui/typography'
import Image from 'next/image'

import RecommendBadge from './recommend-badge'

export default function SmallCard() {
  return (
    <main className="flex flex-col max-w-332 h-444 bg-[#121212] rounded-md items-center justify-center gap-5 p-3">
      <div className="flex w-300 h-300">
        <RecommendBadge />
        <Image src="/samsung.svg" alt="product picture" width={300} height={300}></Image>
      </div>
      <div className="flex flex-col">
        <Typography variant="h3" fontWeight="bold">
          เสื้อสตรีท รุ่น APE ดำ-ขาว ลิขสิทธิแท้
        </Typography>
        <div className="text-h6 ">rating</div>
        <Typography variant="h6" className="pt-4">
          100฿/วัน
        </Typography>
      </div>
    </main>
  )
}
