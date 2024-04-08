'use client'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import MyAssets from './components/MyAssets'

export default function MyAssetsPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()

  if (me === '') {
    router.push('/signin')
  }
  return <MyAssets />
}
