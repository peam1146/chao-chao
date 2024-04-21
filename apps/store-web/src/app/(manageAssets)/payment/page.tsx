'use client'

import { useEffect } from 'react'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import { PaymentContainer } from './components/PaymentContainer'

export default function PaymentPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()
  useEffect(() => {
    if (me === '') {
      router.push('/signin')
    }
  }, [me])
  return <PaymentContainer />
}
