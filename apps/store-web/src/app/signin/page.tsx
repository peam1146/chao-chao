'use client'

import React from 'react'
import React from 'react'

import Image from 'next/image'

import SigninForm from './components/SigninForm'

export default function SignInPage() {
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
