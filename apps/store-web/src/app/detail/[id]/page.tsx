'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useParams, useRouter } from 'next/navigation'

import { useQuery } from '../../../../gqty'
import Description from './components/Description'
import Details from './components/Details'
import Gallery from './components/Gallery'
import Lessor from './components/Lessor'
import Reviews from './components/Reviews'

export default function DetailPage() {
  const router = useRouter()

  const { id } = useParams<{ id: string }>()

  const query = useQuery({
    fetchPolicy: 'network-only',
  })

  const item = query.Item({
    id: Number(id),
  })

  const userId = query.meUser?.user?.id

  return (
    <div className="container flex flex-col gap-y-4 py-4 lg:py-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => router.back()}>Back</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{item?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col lg:flex-row p-6 gap-10 bg-card rounded-2xl justify-items-center">
        <Gallery imgList={item?.image} />
        <Description isSelf={item?.createdBy?.id === userId} item={item} />
      </div>
      <Lessor isSelf={item?.createdBy?.id === userId} user={item?.createdBy} />
      {!(item?.createdBy?.id === userId) && <Details details={item?.description} />}
      <Reviews />
    </div>
  )
}
