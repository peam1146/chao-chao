import { Sheet, SheetClose, SheetContent } from '@/components/ui/sheet'
import Typography from '@/components/ui/typography'
import { useUserToken } from '@/providers/User'
import {
  Chats,
  CreditCard,
  Envelope,
  House,
  Info,
  ListDashes,
  Megaphone,
  SignIn,
  SignOut,
  Tray,
  UserCircle,
  UserCirclePlus,
} from '@phosphor-icons/react'

import { logout } from '../actions/logout'
import { MenuCard } from './MenuCard'
import { ModeToggle } from './theme-toggle'

interface MenuSheetProps {
  open: boolean
  setOpen: (open: boolean) => void
  pathname: string
}

export function MenuSheet(props: MenuSheetProps) {
  const { open, setOpen, pathname } = props

  const { userToken: id } = useUserToken()

  if (id !== '') {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="border-0 flex flex-col justify-between">
          <div className="grid gap-4">
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
                icon={<Chats width="20px" height="20px" />}
                pathname={pathname}
                title="Chat"
                href="/chat"
              />
            </div>
            <div className="grid gap-2">
              <Typography variant="h5" fontWeight="bold" className="text-primary">
                Manage Assets
              </Typography>
              <MenuCard
                icon={<Tray width="20px" height="20px" />}
                pathname={pathname}
                title="My Assets"
                href="/myAssets"
              />
              <MenuCard
                icon={<ListDashes width="20px" height="20px" />}
                pathname={pathname}
                title="My Contracts"
                href="/contracts"
              />
              <MenuCard
                icon={<Envelope width="20px" height="20px" />}
                pathname={pathname}
                title="Rental Requests"
                href="/rentalRequest"
              />
              <MenuCard
                icon={<CreditCard width="20px" height="20px" />}
                pathname={pathname}
                title="Payment"
                href="/payment"
              />
              <MenuCard
                icon={<Megaphone width="20px" height="20px" />}
                pathname={pathname}
                title="Advertising"
                href="/advertising"
              />
            </div>
            <div className="grid gap-2">
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

              <SheetClose asChild>
                <button
                  className="flex flex-row gap-2 items-stretch p-2"
                  onClick={() => {
                    logout()
                  }}
                >
                  <SignOut width="20px" height="20px" />
                  <Typography variant="h5">Log out</Typography>
                </button>
              </SheetClose>
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
