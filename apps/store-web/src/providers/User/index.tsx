'use client'

import { ReactNode, createContext, useContext, useEffect, useMemo } from 'react'

import { resolve } from '../../../gqty'

interface UserTokenContextType {
  userToken: string
  userId: string
}
const UserTokenContext = createContext<UserTokenContextType>({} as UserTokenContextType)

export const useUserToken = () => useContext(UserTokenContext)

export const UserTokenProvider = ({ children }: { children: ReactNode }) => {
  let userToken = ''
  let userId = ''

  const token = Object.fromEntries(
    document !== undefined ? document.cookie.split('; ').map((c) => c.split('=')) : []
  )
  userToken = token['payload-token'] ? token['payload-token'] : ''
  userId = token['user-id'] ? token['user-id'] : ''

  useEffect(() => {
    async function fetchUser() {
      const user = await resolve((query) => {
        return query.query.meUser?.user?.id
      })
      if (!user) {
        userToken = ''
        userId = ''
      }
    }
    fetchUser()
  }, [userToken, userId])

  const value = useMemo(() => ({ userToken, userId }), [userToken, userId])

  return <UserTokenContext.Provider value={value}>{children}</UserTokenContext.Provider>
}
