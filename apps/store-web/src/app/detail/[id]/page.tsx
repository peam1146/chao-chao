import Breadcrumb from './component/Breadcrumb'
import Description from './component/Description'
import Details from './component/Details'
import Gallery from './component/Gallery'
import Lessor from './component/Lessor'
import Reviews from './component/Reviews'

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

export default function DetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container">
      <Breadcrumb previousPages={['Home']} currentPage={mockData.name} />
      <div className="flex flex-row p-6 gap-10 bg-card">
        <Gallery />
        <Description
          name={mockData.name}
          price={20}
          tags={mockData.tags}
          startDate="30/01/67"
          endDate="30/02/67"
        />
      </div>
      <Lessor name={mockLessor.name} rating={mockLessor.rating} />
      <Details details={mockData.description} />
      <Reviews />
    </div>
  )
}
