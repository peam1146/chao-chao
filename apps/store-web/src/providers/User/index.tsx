'use client'

import { ReactNode, createContext, useContext, useEffect, useMemo } from 'react'

import { useLazyQuery } from '../../../gqty'

interface UserTokenContextType {
  userToken: string
  userId: string
  loadData: (() => void) | (() => Promise<void>)
}
const UserTokenContext = createContext<UserTokenContextType>({} as UserTokenContextType)

export const useUserToken = () => useContext(UserTokenContext)

export const UserTokenProvider = ({ children }: { children: ReactNode }) => {
  let userToken = ''
  let userId = ''

  const [loadData, { data, error, isLoading }] = useLazyQuery((query) => ({
    id: query.meUser?.user?.id,
    token: query.meUser?.token,
  }))

  if (!isLoading && data && !error) {
    userToken = data.token ?? ''
    userId = data.id?.toString() ?? ''
  }

  useEffect(() => {
    loadData()
  }, [])

  const value = useMemo(() => ({ userToken, userId, loadData }), [userToken, userId, loadData])

  return <UserTokenContext.Provider value={value}>{children}</UserTokenContext.Provider>
}
