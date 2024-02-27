import { resolve } from '../../../../gqty'
import Breadcrumb from './components/Breadcrumb'
import Description from './components/Description'
import Details from './components/Details'
import Gallery from './components/Gallery'
import Lessor from './components/Lessor'
import Reviews from './components/Reviews'

const mockData = {
  _status: null,
  createdAt: null,
  createdBy: null,
  description:
    'Mom in japanese is okasan, Mommy in japanese is mama.\nDad in japanese is otosan, Daddy in japanese is Gojo Satoru.',
  image: null,
  name: 'Jujutsu kaisen Vol.4',
  tags: ['หนังสือการ์ตูน', 'พระเครื่อง', 'เครื่องราง/ของขลัง', 'ของเซ่นไหว้'],
  updatedAt: null,
}

const mockLessor = {
  name: 'มายมุมุ หิวข้าว',
  rating: 4.0,
}

export default async function DetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container flex flex-col gap-y-4 py-4 lg:py-12">
      <Breadcrumb previousPages={['Home']} currentPage={mockData.name} />
      <div className="flex flex-col lg:flex-row p-6 gap-10 bg-card rounded-2xl justify-items-center">
        <Gallery />
        <Description
          name={mockData.name}
          price={20}
          tags={mockData.tags}
          rating={4}
          status="Available"
        />
      </div>
      <Lessor name={mockLessor.name} rating={mockLessor.rating} />
      <Details details={mockData.description} />
      <Reviews />
    </div>
  )
}
