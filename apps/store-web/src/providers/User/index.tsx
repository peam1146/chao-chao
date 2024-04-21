'use client'

import { ReactNode, createContext, useContext, useMemo } from 'react'

import { Spinner } from '@/components/ui/spinner'

import { useLazyQuery, useTransactionQuery } from '../../../gqty'

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

  const { data: dataMe, isLoading: isLoadingMe } = useTransactionQuery(
    (query) => ({
      id: query.meUser?.user?.id,
      token: query.meUser?.token,
    }),
    {
      skip: false,
    }
  )

  if (!isLoading && data && !error) {
    userToken = data.token ?? ''
    userId = data.id?.toString() ?? ''
  } else if (!isLoadingMe && dataMe) {
    userToken = dataMe.token ?? ''
    userId = dataMe.id?.toString() ?? ''
  }

  const value = useMemo(() => ({ userToken, userId, loadData }), [userToken, userId, loadData])

  if (isLoading || isLoadingMe)
    return (
      <div className="min-h-screen max-w-screen flex flex-col bg-background">
        <div className="flex-1 flex-col flex relative w-full justify-center items-center">
          <Spinner size="lg" className="flex justify-center items-center" />
        </div>
      </div>
    )
  return <UserTokenContext.Provider value={value}>{children}</UserTokenContext.Provider>
}
