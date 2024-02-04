'use client'

import React from 'react'

import Image from 'next/image'

import SigninForm from './components/SigninForm'

export default function SignInPage() {
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] lg:flex-row flex-col items-center justify-center">
      <div className="flex lg:w-1/2 max-lg:h-[295px] aspect-auto justify-center">
        <Image src="/login.svg" alt="Sign in picture" width={497} height={602} />
      </div>
      <div className="flex w-full lg:w-1/2 h-full items-center">
        <SigninForm />
      </div>
    </main>
  )
}
