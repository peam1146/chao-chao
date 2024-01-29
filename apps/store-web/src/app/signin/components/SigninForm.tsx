'use client'

import { Key, UserCircle } from '@phosphor-icons/react'

import { Button } from './button'
import { Input } from './input'

export default function SigninForm() {
  return (
    <div className="w-full h-[339px]">
      <form className="w-full h-full">
        <div className="w-full max-w-[449px] h-full flex flex-col lg:justify-center lg:gap-y-12 md:justify-between">
          <div className="w-full flex flex-col items-center lg:justify-center lg:gap-y-12 md:gap-y-4">
            <div className="w-full text-h2 font-bold lg:text-center text-white">Sign in</div>
            <div className="w-full flex flex-col items-center lg:justify-center lg:gap-y-5 md:gap-y-4">
              <div className="w-full relative">
                <div className="absolute h-full flex items-center justify-center ml-2">
                  <UserCircle size={20} color="#7F8EA3" />
                </div>
                <Input type="email" placeholder="Email or Phone number"></Input>
              </div>
              <div className="w-full">
                <div className="w-full relative pb-1">
                  <div className="absolute h-full flex items-center justify-center ml-2">
                    <Key size={20} color="#7F8EA3" />
                  </div>
                  <Input type="password" placeholder="Password"></Input>
                </div>
                <div className="text-h6 font-regular text-white text-start">Forget Password?</div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-white font-regular">
            <Button className="bg-[#FF5E3A] text-h5">Sign In</Button>
            <div className="text-h6">
              Don't have an account? <span className="text-[#FF5E3A]">Sign up</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
