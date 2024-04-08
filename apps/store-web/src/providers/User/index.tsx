'use client'

import { ReactNode, createContext, useContext, useMemo } from 'react'

interface UserTokenContextType {
  userToken: string
}
const UserTokenContext = createContext<UserTokenContextType>({} as UserTokenContextType)

export const useUserToken = () => useContext(UserTokenContext)

export const UserTokenProvider = ({ children }: { children: ReactNode }) => {
  let userToken = ''
  if (typeof window !== 'undefined') {
    const token = Object.fromEntries(document.cookie.split('; ').map((c) => c.split('=')))
    userToken = token['payload-token']
  }

  const value = useMemo(() => ({ userToken }), [userToken])

  return <UserTokenContext.Provider value={value}>{children}</UserTokenContext.Provider>
}
