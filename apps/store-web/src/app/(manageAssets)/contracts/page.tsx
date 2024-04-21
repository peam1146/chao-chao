'use client'

import { useEffect } from 'react'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import ContractsContainer from './components/ContractsContainer'

export default function MyContractsPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()
  useEffect(() => {
    if (me === '') {
      router.push('/signin')
    }
  }, [me])
  return <ContractsContainer />
}
