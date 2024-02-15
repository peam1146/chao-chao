import profile from '@/assets/images/profileLogo.png'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Rating from '@mui/material/Rating'
import { List, MagnifyingGlass } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { resolve } from '../../../gqty'

export default async function Profile() {
  const { bio, firstName, lastName } = await resolve(({ query }) => {
    return {
      firstName: query.meUser?.user?.firstName,
      lastName: query.meUser?.user?.lastName,
      bio: query.meUser?.user?.bio,
    }
  })

  // const mutation = await resolve(({ mutation }) => {
  //   return mutation.updateUser({
  //     id: 1,
  //     data: {
  //       firstName: 'มายมุมุ',
  //       lastName: 'หิวข้าว',
  //       bio: 'อิอิ',
  //     },
  //   })
  // })
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] flex-col items-center py-4 lg:py-12 my-auto">
      <div className="flex flex-col w-full bg-card rounded-2xl px-6 py-5 gap-4">
        <div className="flex flex-row justify-between max-lg:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image className="w-[80px] h-[80px]" src={profile} alt="profile" />
            <div className="flex flex-col gap-1">
              {firstName || lastName ? (
                <Typography variant="h5" fontWeight="bold">
                  {firstName} {lastName}
                </Typography>
              ) : (
                <Typography variant="h5" className="text-light">
                  Please provide your profile
                </Typography>
              )}
              <div className="flex flex-row gap-0.5 ">
                <Rating name="read-only" value={4} max={5} readOnly />
                <Typography variant="h6" className="text-light my-auto">
                  4.0
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/chat">
              <Button size="sm" className="w-full max-lg:hidden">
                Chat
              </Button>
            </Link>
            <Link href="/profile/edit">
              <Button variant="secondary" size="sm" className="w-full max-lg:hidden">
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
        {bio ? (
          <Typography variant="h6">{bio}</Typography>
        ) : (
          <Typography variant="h6" className="text-light"></Typography>
        )}
      </div>
      <div className="flex flex-row gap-3 w-full">
        <Link href="/chat" className="w-full">
          <Button className="w-full lg:hidden">Chat</Button>
        </Link>
        <Link href="/profile/edit" className="w-full">
          <Button variant="secondary" className="w-full lg:hidden">
            Edit Profile
          </Button>
        </Link>
      </div>
    </main>
  )
}
