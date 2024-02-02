import { Sheet, SheetContent } from '@/components/ui/sheet'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface MenuSheetProps {
  open: boolean
  setOpen: (open: boolean) => void
  pathname: string
}

export function MenuSheet(props: MenuSheetProps) {
  const { open, setOpen, pathname } = props
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left">
        <div className="grid gap-2 py-8">
          <Link
            href="/signin"
            className={cn(
              'flex flex-row gap-0.5 items-center p-2',
              pathname === '/signin' && 'rounded-md border'
            )}
          >
            <Typography variant="h5">Sign in</Typography>
          </Link>
          <Link
            href="/signup"
            className={cn(
              'flex flex-row gap-0.5 items-center p-2',
              pathname === '/signup' && 'rounded-md border'
            )}
          >
            <Typography variant="h5">Sign up</Typography>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}