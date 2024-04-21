'use client'

import { Reviews } from '@/components/layout/Reviews'
import { Spinner } from '@/components/ui/spinner'
import { useUserToken } from '@/providers/User'
import { ArrowLeft } from '@phosphor-icons/react'
import { useParams, useRouter } from 'next/navigation'

import { useQuery } from '../../../../gqty'
import Description from './components/Description'
import Details from './components/Details'
import Gallery from './components/Gallery'
import Lessor from './components/Lessor'

export default function DetailPage() {
  const router = useRouter()

  const { id } = useParams<{ id: string }>()

  const { userId, userToken } = useUserToken()

  if (userToken === '') {
    router.push('/signin')
  }

  const query = useQuery({
    fetchPolicy: 'network-only',
  })

  const item = query.Item({
    id: Number(id),
  })

  const reviewsArray = query.Reviews({
    where: {
      rating: {
        greater_than: 0,
      },
    },
  })

  const reviews =
    reviewsArray?.docs
      ?.filter((review) => review?.reviewToItem?.id === Number(id))
      .map((review) => {
        return {
          image: review?.createdBy.profileImage?.url ?? '',
          name: `${review?.createdBy.firstName} ${review?.createdBy.lastName}`,
          date: review?.updatedAt ?? '',
          rating: review?.rating,
          description: review?.description,
        }
      }) ?? []

  return (
    <div className="container flex flex-col gap-y-4 py-4 lg:py-12">
      <ArrowLeft onClick={() => router.back()} className="cursor-pointer w-8 h-5">
        Back
      </ArrowLeft>
      <div className="flex flex-col lg:flex-row p-6 gap-10 bg-card rounded-2xl justify-center">
        {query.$state.isLoading ? (
          <div className="flex justify-center items-center min-h-[500px]">
            <Spinner />
          </div>
        ) : (
          <>
            <Gallery imgList={item?.image} />
            <Description isSelf={item?.createdBy?.id === Number(userId)} item={item} />
          </>
        )}
      </div>
      <Lessor isSelf={item?.createdBy?.id === Number(userId)} user={item?.createdBy} />
      {!(item?.createdBy?.id === Number(userId)) && <Details details={item?.description} />}
      <Reviews reviews={reviews} />
    </div>
  )
}
