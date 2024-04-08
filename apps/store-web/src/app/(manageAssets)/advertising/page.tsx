'use client'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import AdvertisingContainer from './components/AdvertisingContainer'

export default function Page() {
  const router = useRouter()

  const { userToken: me } = useUserToken()

  if (me === '') {
    router.push('/signin')
    return
  }
  return <AdvertisingContainer />
}
