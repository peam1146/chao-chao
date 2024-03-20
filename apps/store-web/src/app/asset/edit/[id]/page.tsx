import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

import EditCard from './components/EditCard'

export default async function AssetEdit() {
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] justify-center pb-4">
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
        <EditCard item_id={10} />
      </div>
    </main>
  )
}
