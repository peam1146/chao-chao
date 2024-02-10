'use client'

import Landingpic from '@/assets/images/Saly-13.svg'
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
    <div className="flex w-full flex flex-col lg:flex-row items-center">
      <div className="h-[367px] w-[277px] lg:hidden">
        <Image src={Landingpic} width={0} height={0} sizes="100vw" alt="Landing-page picture" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10 lg:gap-6">
          <div>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-x-2">
              <Typography variant="h1" fontWeight="bold" className="text-primary text-center">
                เช่าที่ไหนดี
              </Typography>
              <Typography variant="h1" fontWeight="bold" className="text-primary text-center">
                มาเช่านี่มา
              </Typography>
            </div>
            <Typography variant="h5" className="lg:h3 text-muted-foreground text-center">
              Rent Anything From Anyone
            </Typography>
          </div>
          <div className="flex gap-2 flex-wrap justify-center ">
            {ListforBadge.map((item, index) => (
              <Badge variant="outline" key={index} className="py-1 px-3 ">
                <Typography variant="h6">{item}</Typography>
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-center items-center">
        <Image src={Landingpic} width={0} height={0} sizes="100vw" alt="Landing-page picture" />
      </div>
    </div>
  )
}
