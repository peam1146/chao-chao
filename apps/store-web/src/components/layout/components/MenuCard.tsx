import { SheetClose } from '@/components/ui/sheet'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface MenuCardProps {
  href: string
  title: string
  icon: React.ReactNode
  pathname: string
}
export function MenuCard(props: MenuCardProps) {
  const { pathname, icon, title, href } = props
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          'flex flex-row gap-2 items-stretch p-2',
          pathname === href && 'rounded-md bg-muted'
        )}
      >
        {icon}
        <Typography variant="h5">{title}</Typography>
      </Link>
    </SheetClose>
  )
}
