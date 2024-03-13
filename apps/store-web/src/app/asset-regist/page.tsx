import Breadcrumb from '../detail/[id]/component/Breadcrumb'
import RegistCard from './components/regist-card'

export default async function AssetRegist() {
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] justify-center pb-4">
      <div className="flex flex-col w-full pt-5 ">
        <Breadcrumb previousPages={['My Assets']} currentPage="Asset Registration" />
        <RegistCard />
      </div>
    </main>
  )
}
