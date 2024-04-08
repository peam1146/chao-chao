'use client'

import { ReactNode, createContext, useContext, useMemo } from 'react'

interface UserTokenContextType {
  userToken: string
  userId: string
}
const UserTokenContext = createContext<UserTokenContextType>({} as UserTokenContextType)

export const useUserToken = () => useContext(UserTokenContext)

export const UserTokenProvider = ({ children }: { children: ReactNode }) => {
  let userToken = ''
  let userId = ''
  if (typeof window !== 'undefined') {
    const token = Object.fromEntries(document.cookie.split('; ').map((c) => c.split('=')))
    userToken = token['payload-token']
    userId = token['user-id']
  }

  const value = useMemo(() => ({ userToken, userId }), [userToken, userId])

  return <UserTokenContext.Provider value={value}>{children}</UserTokenContext.Provider>
}
