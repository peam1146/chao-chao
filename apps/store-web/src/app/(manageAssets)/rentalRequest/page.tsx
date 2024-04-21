'use client'

import { useEffect } from 'react'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import { RentalRequestContainer } from './components/RentalRequestContainer'

export default function RentalRequestPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()

  useEffect(() => {
    if (me === '') {
      router.push('/signin')
    }
  }, [me])
  return <RentalRequestContainer />
}
