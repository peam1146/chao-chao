import SideBar from '@/components/layout/SideBar'

import { PaymentContainer } from './components/PaymentContainer'

export default function PaymentPage() {
  return (
    <div className="container">
      <div className="flex flex-row gap-4 mt-10">
        <SideBar />
        <PaymentContainer />
      </div>
    </div>
  )
}
