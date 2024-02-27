import SideBar from '../components/sideBar'
import MyAssets from './components/myAssets'

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
