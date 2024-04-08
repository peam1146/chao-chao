'use client'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import { RentalRequestContainer } from './components/RentalRequestContainer'

export default function RentalRequestPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()

  if (me === '') {
    router.push('/signin')
  }
  return <RentalRequestContainer />
}
