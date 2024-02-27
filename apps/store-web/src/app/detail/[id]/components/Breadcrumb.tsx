'use client'

import Typography from '@/components/ui/typography'
import { ArrowLeft, CaretRight } from '@phosphor-icons/react'

export default function Breadcrumb({
  previousPages,
  currentPage,
}: {
  previousPages: Array<string>
  currentPage: string
}) {
  return (
    <div className="flex flex-row h-[48px] gap-x-1">
      <ArrowLeft size={32} className="my-auto text-primary-foreground" />
      {previousPages.map((page, index) => (
        <Typography variant="h6" className="flex flex-row my-auto text-light gap-x-1" key={index}>
          {page}
          <CaretRight size={16} />
        </Typography>
      ))}
      <Typography variant="h6" className="flex flex-row my-auto text-primary">
        {currentPage}
      </Typography>
    </div>
  )
}
