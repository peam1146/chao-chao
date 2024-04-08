'use client'

import { useUserToken } from '@/providers/User'
import { useRouter } from 'next/navigation'

import ContractsContainer from './components/ContractsContainer'

export default function MyContractsPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()

  if (me === '') {
    router.push('/signin')
  }
  return <ContractsContainer />
}
