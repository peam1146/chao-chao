'use client'

import { ReactNode, createContext, useContext, useMemo } from 'react'

import { useLazyQuery, useQuery } from '../../../gqty'

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

  const query = useQuery({
    fetchPolicy: 'no-cache',
  })

  if (!isLoading && data && !error) {
    userToken = data.token ?? ''
    userId = data.id?.toString() ?? ''
  } else {
    const token = query.meUser?.token
    const id = query.meUser?.user?.id

    userToken = token ?? ''
    userId = id?.toString() ?? ''
  }

  const value = useMemo(() => ({ userToken, userId, loadData }), [userToken, userId, loadData])

  return <UserTokenContext.Provider value={value}>{children}</UserTokenContext.Provider>
}
