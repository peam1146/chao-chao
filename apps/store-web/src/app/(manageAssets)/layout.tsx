'use client'

import SideBar from './components/sideBar'

export default function ManageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container max-lg:px-4">
      <div className="flex flex-row gap-4 mt-10">
        <SideBar />
        <div className="flex-1 w-full">{children}</div>
      </div>
    </div>
  )
}
