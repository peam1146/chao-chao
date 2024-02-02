'use client'

import React from 'react'

import Typography from '@/components/ui/typography'
import { Key, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'

import { userLogin } from '../actions/userLogin'
import { Button } from './button'
import { Input } from './input'

export default function SigninForm() {
  return (
    <div className="w-full h-[339px]">
      <form className="w-full h-full" action={userLogin}>
        <div className="w-full max-w-[449px] h-full flex flex-col lg:justify-center gap-y-12 justify-between">
          <div className="w-full flex flex-col items-center justify-center lg:gap-y-12 gap-y-4">
            <Typography variant="h3" fontWeight="bold" className="self-start lg:self-center lg:h2">
              Sign in
            </Typography>
            <div className="w-full flex flex-col items-center lg:justify-center lg:gap-y-5 gap-y-4">
              <div className="w-full relative">
                <div className="absolute h-full flex items-center justify-center ml-3">
                  <UserCircle size={20} className="text-muted-foreground" />
                </div>
                <Input type="text" placeholder="Email or Phone number" name="email"></Input>
              </div>
              <div className="w-full">
                <div className="w-full relative pb-1">
                  <div className="absolute h-full flex items-center justify-center ml-3">
                    <Key size={20} className="text-muted-foreground" />
                  </div>
                  <Input type="password" placeholder="Password" name="password"></Input>
                </div>
                <Link href="/" className="text-h6 font-regular text-white text-start">
                  Forget Password?
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-white font-regular gap-y-2">
            <Button type="submit" className="text-h5 w-[100%] lg:w-[108px]">
              Sign In
            </Button>
            <Typography variant="h6" fontWeight="regular">
              Don't have an account?
              <Link href="/" className="text-primary pl-1">
                Sign up
              </Link>
            </Typography>
          </div>
        </div>
      </form>
    </div>
  )
}
