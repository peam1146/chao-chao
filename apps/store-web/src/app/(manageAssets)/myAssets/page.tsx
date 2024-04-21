'use client'

import { useEffect } from 'react'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import MyAssets from './components/MyAssets'

export default function MyAssetsPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()
  useEffect(() => {
    if (me === '') {
      router.push('/signin')
    }
  }, [me])
  return <MyAssets />
}
