import SideBar from '@/components/layout/SideBar'

import MyAssets from './components/MyAssets'

export default function MyAssetsPage() {
  return (
    <div className="container">
      <div className="flex flex-row gap-4 mt-10">
        <SideBar />

        <MyAssets />
      </div>
    </div>
  )
}
