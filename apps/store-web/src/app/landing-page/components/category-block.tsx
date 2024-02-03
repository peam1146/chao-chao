'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'

export default function CategoryBlock() {
  return (
    <main className="flex w-full bg-background items-center justify-center ">
      <div className="flex flex-col w-437 ">
        <Typography variant="h1" fontWeight="bold" className="text-[#FF5E3A]">
          เช่าที่ไหนดี มาเช่านี่มา
        </Typography>
        <Typography
          variant="body1"
          className="flex w-full text-body1 justify-center text-[#7F8EA3] "
        >
          Rent Anything From Anyone
        </Typography>
        <div className="flex gap-2 pt-6 justify-center">
          <Button variant="outline">หนังสือนิยาย/มังงะ</Button>
          <Button variant="outline">บ้าน</Button>
        </div>
      </div>
      <Image src="/landing-page.svg" alt="Landing-page picture" width={441} height={583}></Image>
    </main>
  )
}
