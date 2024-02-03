'use client'

import { Text } from 'lucide-react'
import Image from 'next/image'

import { Button } from './button'

export default function CategoryBlock() {
  return (
    <main className="flex w-full h-583 bg-background min-h-screen items-center justify-center">
      <div className="flex flex-col w-437 ">
        <div className="flex w-full text-h2 justify-center text-[#FF5E3A] ">
          เช่าที่ไหนดี มาเช่านี่มา
        </div>
        <div className="flex w-full text-body1 justify-center text-[#7F8EA3] ">
          Rent Anything From Anyone
        </div>
        <div className="flex gap-2 pt-6">
          <Button variant="outline">หนังสือนิยาย/มังงะ</Button>
          <Button variant="outline">บ้าน</Button>
        </div>
      </div>
      <Image src="/landing-page.svg" alt="Landing-page picture" width={441} height={583}></Image>
    </main>
  )
}
