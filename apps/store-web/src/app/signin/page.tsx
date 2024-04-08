'use client'

import { useUserToken } from '@/providers/User'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SignInNoSSR = dynamic(() => import('./components/SigninForm'), { ssr: false })

export default function SignInPage() {
  const router = useRouter()

  const { userToken: me } = useUserToken()

  if (me !== '') {
    router.push('/')
  }

  return (
    <main className="container flex w-full bg-background h-full lg:flex-row flex-col items-center py-24 justify-center">
      <div className="flex lg:w-1/2 max-lg:h-[295px] aspect-auto justify-center">
        <Image src="/login.svg" alt="Sign in picture" width={497} height={602} />
      </div>
      <div className="flex w-full lg:w-1/2 h-full items-center">
        <SignInNoSSR />
      </div>
    </main>
  )
}
