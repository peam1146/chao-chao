import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import RegisterCard from './components/RegisterCard'

export default async function AssetRegist() {
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] justify-center pb-4">
      <div className="flex flex-col w-full pt-5 ">
        <Breadcrumb className="py-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/myAssets">My Assets</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Asset Registration</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <RegisterCard />
      </div>
    </main>
  )
}
