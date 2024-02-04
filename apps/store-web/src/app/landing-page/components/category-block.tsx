'use client'

import { Badge } from '@/components/ui/badge'
import Typography from '@/components/ui/typography'
import Image from 'next/image'

export default function CategoryBlock() {
  const ListforBadge = [
    'หนังสือนิยาย/มังงะ',
    'บ้าน',
    'เสื้อผ้า',
    'คอนโดและหอพัก',
    'พระเครื่อง',
    'รถยนต์',
    'สินสอด',
    'ชุดแฟนซีและพร๊อบถ่ายรูป',
    'ไอดีเกม',
    'กล้องถ่ายรูป',
    'พร๊อบงานแต่ง',
    'โทรศัพท์',
    'นาฬิกาข้อมือ',
  ]
  return (
    <div className="flex w-full">
      <div className="flex flex-col items-center justify-center">
        <Typography variant="h1" fontWeight="bold" className="text-primary text-center">
          เช่าที่ไหนดี มาเช่านี่มา
        </Typography>
        <Typography variant="h3" fontWeight="regular" className="text-muted-foreground text-center">
          Rent Anything From Anyone
        </Typography>
        <div className="flex gap-2 flex-wrap justify-center pt-6">
          {ListforBadge.map((item, index) => (
            <Badge variant="outline" key={index} className="py-1 px-3 ">
              <Typography variant="h6" fontWeight="regular">
                {item}
              </Typography>
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <Image src="/landing-page.svg" width={441} height={583} alt="Landing-page picture" />
      </div>
    </div>
  )
}
