import { Sheet, SheetContent } from '@/components/ui/sheet'
import Typography from '@/components/ui/typography'
import {
  Chats,
  HandCoins,
  House,
  Info,
  SignIn,
  SignOut,
  UserCircle,
  UserCirclePlus,
} from '@phosphor-icons/react'

import { MenuCard } from './MenuCard'
import { ModeToggle } from './theme-toggle'

interface MenuSheetProps {
  open: boolean
  setOpen: (open: boolean) => void
  pathname: string
  id: Number
}

export function MenuSheet(props: MenuSheetProps) {
  const { open, setOpen, pathname, id } = props

  if (id) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="border-0 flex flex-col justify-between">
          <div className="grid gap-3">
            <div className="grid gap-2">
              <Typography variant="h5" fontWeight="bold" className="text-primary">
                General
              </Typography>
              <MenuCard
                icon={<House width="20px" height="20px" />}
                pathname={pathname}
                title="Home"
                href="/"
              />
              <MenuCard
                icon={<HandCoins width="20px" height="20px" />}
                pathname={pathname}
                title="Manage assets"
                href="/asset"
              />
              <MenuCard
                icon={<Chats width="20px" height="20px" />}
                pathname={pathname}
                title="Chat"
                href="/chat"
              />
            </div>
            <div className="grid gap-2 py-8">
              <Typography variant="h5" fontWeight="bold" className="text-primary">
                Account
              </Typography>
              <MenuCard
                icon={<UserCircle width="20px" height="20px" />}
                pathname={pathname}
                title="My profile"
                href="/profile"
              />
              <MenuCard
                icon={<Info width="20px" height="20px" />}
                pathname={pathname}
                title="Help Center"
                href="/help"
              />
              <MenuCard
                icon={<SignOut width="20px" height="20px" />}
                pathname={pathname}
                title="Sign out"
                href="/help"
              />
            </div>
          </div>
          <ModeToggle align="start" />
        </SheetContent>
      </Sheet>
    )
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="border-0 flex flex-col justify-between">
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Typography variant="h5" fontWeight="bold" className="text-primary">
              General
            </Typography>
            <MenuCard
              icon={<House width="20px" height="20px" />}
              pathname={pathname}
              title="Home"
              href="/"
            />
          </div>
          <div className="grid gap-2">
            <Typography variant="h5" fontWeight="bold" className="text-primary">
              Account
            </Typography>
            <MenuCard
              icon={<SignIn width="20px" height="20px" />}
              pathname={pathname}
              title="Sign in"
              href="/signin"
            />
            <MenuCard
              icon={<UserCirclePlus width="20px" height="20px" />}
              pathname={pathname}
              title="Sign up"
              href="/signup"
            />
          </div>
        </div>
        <ModeToggle align="start" />
      </SheetContent>
    </Sheet>
  )
}
