import React, { useState } from 'react'

import bicycle from '@/assets/images/bicycle.svg'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import FileUpload from '@/components/ui/fileUpload'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { useMediaQuery } from '@/hooks/use-media-query'
import { X } from '@phosphor-icons/react/dist/csr/X'
import { Check } from '@phosphor-icons/react/dist/ssr'

import {
  RentalRequestCard,
  RentalRequestCardButton,
  RentalRequestCardContainer,
} from './RentalRequestCard'

export default function RequestReceivedContainer() {
  const isDesktop = useMediaQuery('(min-width: 821px)')
  const [open, setOpen] = useState(true)

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <RentalRequestCard>
          <RentalRequestCardContainer
            title="จักรยานแพะภูเขา"
            requestFrom="มาย มุมุ"
            thumbnail={bicycle}
            startDate={new Date('2024-02-29')}
            endDate={new Date()}
            rentalFee={50}
          />
          <RentalRequestCardButton>
            <Button
              variant="default"
              size={isDesktop ? 'sm' : 'lg'}
              className="flex gap-2 w-full"
              onClick={() => setOpen(true)}
            >
              <Check className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
              <Typography variant={isDesktop ? 'h6' : 'h5'}>Accept</Typography>
            </Button>
            <Button variant="outline" size={isDesktop ? 'sm' : 'lg'} className="flex gap-2 w-full">
              <X className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
              <Typography variant={isDesktop ? 'h6' : 'h5'}>Decline</Typography>
            </Button>
          </RentalRequestCardButton>
        </RentalRequestCard>
        <RentalRequestCard>
          <RentalRequestCardContainer
            title="จักรยานแพะภูเขา"
            requestFrom="มาย มุมุ"
            thumbnail={bicycle}
            startDate={new Date('2024-02-29')}
            endDate={new Date()}
            rentalFee={50}
          />
          <RentalRequestCardButton>
            <Button
              variant="default"
              size={isDesktop ? 'sm' : 'lg'}
              className="flex gap-2 w-full"
              onClick={() => setOpen(true)}
            >
              <Check className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
              <Typography variant={isDesktop ? 'h6' : 'h5'}>Accept</Typography>
            </Button>
            <Button variant="outline" size={isDesktop ? 'sm' : 'lg'} className="flex gap-2 w-full">
              <X className="max-lg:w-5 max-lg:h-5 lg:w-4 lg:h-4" />
              <Typography variant={isDesktop ? 'h6' : 'h5'}>Decline</Typography>
            </Button>
          </RentalRequestCardButton>
        </RentalRequestCard>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden w-[462px] p-0 shadow-lg">
          <form className="flex flex-col p-6 gap-4">
            <div className="flex flex-col gap-3">
              <Typography variant="h4" fontWeight="bold">
                Please fill in the required information.
              </Typography>
              <div className="flex max-lg:flex-col gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <Typography variant="h5">Insurance fee</Typography>
                  <Input placeholder="฿0.00" className="max-lg:w-full w-[200px] bg-card" />
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h5">Delivery fee</Typography>
                  <Input placeholder="฿0.00" className="max-lg:w-full w-[200px] bg-card" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Typography variant="h5">Contract file</Typography>
                <FileUpload uploadText="Drag a file here or " uploadStatus="default" />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                type="button"
                size="lg"
                className="w-full lg:w-[108px]"
                onClick={() => setOpen(false)}
              >
                <Typography variant="h5">Cancel</Typography>
              </Button>
              <Button variant="default" type="submit" size="lg" className="w-full lg:w-[108px]">
                <Typography variant="h5">Submit</Typography>
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
