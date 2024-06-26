'use client'

import { useEffect } from 'react'

import profile from '@/assets/images/profileLogo.png'
import { Reviews } from '@/components/layout/Reviews'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import Rating from '@mui/material/Rating'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { resolve, useQuery } from '../../../gqty'
import { MyAsset } from './components/MyAsset'

export default function Profile() {
  const router = useRouter()

  const query = useQuery({
    fetchPolicy: 'network-only',
  })

  const user = query.meUser?.user

  const reviewsArray = query.Reviews({
    where: {
      rating: {
        greater_than: 0,
      },
    },
  })

  const itemsArray = query.Items({
    draft: false,
    where: {
      createdBy: {
        equals: user?.id,
      },
    },
  })

  const reviews =
    reviewsArray?.docs
      ?.filter((review) => review?.reviewToUser?.id === user?.id)
      .map((review) => {
        return {
          image: review?.createdBy.profileImage?.url ?? '',
          name: `${review?.createdBy.firstName} ${review?.createdBy.lastName}`,
          date: review?.updatedAt ?? '',
          rating: review?.rating,
          description: review?.description,
        }
      }) ?? []

  useEffect(() => {
    async function fetchData() {
      const { bio, firstName, lastName } = await resolve(({ query }) => {
        return {
          firstName: query.meUser?.user?.firstName,
          lastName: query.meUser?.user?.lastName,
          bio: query.meUser?.user?.bio,
        }
      })
      if (!firstName || !lastName || !bio) {
        router.push('/profile/edit')
      }
    }
    fetchData()
  }, [])

  return (
    <main className="container flex w-full bg-background h-full flex-col items-center py-4 lg:py-12 my-auto gap-6">
      <div className="flex flex-col w-full bg-card rounded-2xl px-6 py-5 gap-4">
        {query.$state.isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Spinner />
          </div>
        ) : (
          <>
            {' '}
            <div className="flex flex-row justify-between max-lg:flex-col">
              <div className="flex flex-row gap-4 items-center">
                <Image
                  className="w-[80px] h-[80px] rounded-full object-cover"
                  src={user?.profileImage?.url ? user?.profileImage?.url : profile}
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
            {user?.bio !== '' && <Typography variant="h6">{user?.bio}</Typography>}
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
          </>
        )}
      </div>
      <MyAsset isLoading={query.$state.isLoading} items={itemsArray} />
      <Reviews reviews={reviews} />
    </main>
  )
}
