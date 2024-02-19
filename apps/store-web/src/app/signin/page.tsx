import Image from 'next/image'
import { redirect } from 'next/navigation'

import { resolve } from '../../../gqty'
import SigninForm from './components/SigninForm'

export default async function SignInPage() {
  const user = await resolve(({ query }) => {
    return query.meUser?.user?.id
  })

  if (user) {
    redirect('/')
  }

  return (
    <main className="flex w-full bg-background min-h-screen lg:flex-row flex-col items-center justify-between p-24">
      <div className="flex lg:w-1/2 min-w-[238px] min-h-[295px] h-full justify-center">
        <Image src="/login.svg" alt="Sign in picture" width={497} height={602} />
      </div>
      <div className="flex min-w-216 lg:w-1/2 h-full pr-10 md:pr-0">
        <SigninForm />
      </div>
    </main>
  )
}
