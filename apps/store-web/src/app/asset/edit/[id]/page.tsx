'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useUserToken } from '@/providers/User'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import EditCard from './components/EditCard'

export default function AssetEdit() {
  const router = useRouter()

  const { userToken: me } = useUserToken()

  if (me === '') {
    router.push('/signin')
  }
  return (
    <main className="container flex w-full bg-background h-full justify-center pb-4">
      <div className="flex flex-col w-full pt-5 ">
        <Breadcrumb className="py-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/myAssets">
                <BreadcrumbLink>My Assets</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Asset</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <EditCard />
      </div>
    </main>
  )
}
