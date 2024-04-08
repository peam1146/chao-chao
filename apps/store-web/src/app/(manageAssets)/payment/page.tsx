'use client'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import { PaymentContainer } from './components/PaymentContainer'

export default function PaymentPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()

  if (me === '') {
    router.push('/signin')
  }
  return <PaymentContainer />
}
