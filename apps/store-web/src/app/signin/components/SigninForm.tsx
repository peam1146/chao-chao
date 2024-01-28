'use client'

import { Key, UserCircle } from '@phosphor-icons/react'

import { Button } from './button'
import { Input } from './input'

export default function SigninForm() {
  return (
    <div className="w-[449px] h-[339px]">
      <form className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-full text-h2 font-bold text-center">Sign in</div>
          <div className="w-full h-1/3 flex flex-col items-center justify-between">
            <div className="w-full relative">
              <UserCircle className="absolute ml-3 mt-3" size={20} />
              <Input type="email" placeholder="Email or Phone number"></Input>
            </div>
            <div className="w-full">
              <Input type="password" placeholder="Password"></Input>
              <div className="text-h6 font-regular">Forget Password?</div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <Button>Sign In</Button>
            <div>
              Don't have an account? <span>Sign up</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
