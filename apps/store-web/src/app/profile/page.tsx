'use client'

import { useEffect } from 'react'

import profile from '@/assets/images/profileLogo.png'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Rating from '@mui/material/Rating'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useQuery } from '../../../gqty'
import { MyAsset } from './components/MyAsset'
import { Review } from './components/Review'

export default function Profile() {
  const router = useRouter()

  const query = useQuery({
    fetchPolicy: 'no-cache',
  })

  const user = query.meUser?.user

  useEffect(() => {
    if (!user?.bio && !user?.firstName && !user?.lastName && user?.profileImage?.url === '') {
      router.push('/profile/edit')
    }
  }, [user?.bio, user?.firstName, user?.lastName, user?.profileImage?.url])

  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] flex-col items-center py-4 lg:py-12 my-auto gap-6">
      <div className="flex flex-col w-full bg-card rounded-2xl px-6 py-5 gap-4">
        <div className="flex flex-row justify-between max-lg:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              className="w-[80px] h-[80px] rounded-full object-cover"
              src={user?.profileImage?.url === '' ? profile : user?.profileImage?.url ?? ''}
              width="100"
              height="100"
              alt="profile"
            />
            <div className="flex flex-col gap-1">
              {user?.firstName !== '' || user.lastName !== '' ? (
                <Typography variant="h5" fontWeight="bold">
                  {user?.firstName} {user?.lastName}
                </Typography>
              ) : (
                <Typography variant="h5" className="text-light">
                  Please provide your profile
                </Typography>
              )}
              <div className="flex flex-row gap-0.5 ">
                <Rating
                  name="read-only"
                  value={Number(user?.rating)}
                  max={5}
                  readOnly
                  size="small"
                />
                <Typography variant="h6" className="text-light my-auto">
                  {user?.rating ? user?.rating : '0'}.0
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
        {user?.bio !== '' ? (
          <Typography variant="h6">{user?.bio}</Typography>
        ) : (
          <Typography variant="h6" className="text-light"></Typography>
        )}
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
      </div>
      <MyAsset />
      <Review />
    </main>
  )
}
