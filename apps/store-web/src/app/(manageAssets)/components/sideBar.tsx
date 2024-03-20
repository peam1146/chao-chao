'use client'

import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { CreditCard, Envelope, ListDashes, Megaphone, Tray } from '@phosphor-icons/react'
import { usePathname, useRouter } from 'next/navigation'

export default function SideBar() {
  const router = useRouter()
  const pathname = usePathname()
  console.log('pathname', pathname)
  return (
    <div className="flex flex-col pt-[72px] gap-1 max-lg:hidden">
      <div
        className={cn(
          'flex flex-row w-[200px] gap-4 px-4 py-3 hover:bg-muted cursor-pointer rounded-md',
          pathname === '/myAssets' && 'bg-muted'
        )}
        onClick={() => router.push('/myAssets')}
      >
        <Tray size={24} />
        <Typography>My Assets</Typography>
      </div>
      <div
        className={cn(
          'flex flex-row gap-4 px-4 py-3 hover:bg-muted cursor-pointer rounded-md',
          pathname === '/contracts' && 'bg-muted'
        )}
        onClick={() => router.push('/contracts')}
      >
        <ListDashes size={24} />
        <Typography>My Contracts</Typography>
      </div>
      <div
        className={cn(
          'flex flex-row gap-4 px-4 py-3 hover:bg-muted cursor-pointer rounded-md',
          pathname === '/rentalRequest' && 'bg-muted'
        )}
        onClick={() => router.push('/rentalRequest')}
      >
        <Envelope size={24} />
        <Typography>Rental Requests</Typography>
      </div>
      <div
        className={cn(
          'flex flex-row gap-4 px-4 py-3 hover:bg-muted cursor-pointer rounded-md',
          pathname === '/payment' && 'bg-muted'
        )}
        onClick={() => router.push('/payment')}
      >
        <CreditCard size={24} />
        <Typography>Payment</Typography>
      </div>
      <div
        className={cn(
          'flex flex-row gap-4 px-4 py-3 hover:bg-muted cursor-pointer rounded-md',
          pathname === '/advertising' && 'bg-muted'
        )}
        onClick={() => router.push('/advertising')}
      >
        <Megaphone size={24} />
        <Typography>Advertising</Typography>
      </div>
    </div>
  )
}
