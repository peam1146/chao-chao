'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { Key, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'

import { userLogin } from '../actions/userLogin'

export default function SigninForm() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  // const [login, { isLoading }] = useMutation((mutation, { username, password }) => {
  //   return mutation.loginUser()
  // })
  return (
    <div className="w-full h-[339px]">
      <form className="w-full h-full" action={userLogin}>
        <div className="w-full h-full flex flex-col items-center lg:justify-center gap-y-12 justify-between">
          <div className="w-full flex flex-col items-center justify-center lg:gap-y-12 gap-y-4">
            <Typography variant="h3" fontWeight="bold" className="self-start lg:self-center lg:h2">
              Sign in
            </Typography>
            <div className="w-full flex flex-col items-center lg:justify-center lg:gap-y-5 gap-y-4">
              <div className="w-full relative">
                <div className="absolute h-full flex items-center justify-center ml-3">
                  <UserCircle size={20} className="text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Email or Phone number"
                  name="email"
                  className="pl-8"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-xs italic text-red-500 mt-0.5">{errors.email?.message}</p>
              )}
              <div className="w-full">
                <div className="w-full relative pb-1">
                  <div className="absolute h-full flex items-center justify-center ml-3">
                    <Key size={20} className="text-muted-foreground" />
                  </div>
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="pl-8"
                    required
                  />
                </div>
                <Link href="/forget" className="text-h6 font-regular text-start">
                  Forget Password?
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-y-2">
            <Button type="submit" className="w-full lg:w-[108px]">
              Sign In
            </Button>
            <Typography variant="h6" className="flex gap-1">
              Don't have an account?
              <Link href="/signup" className="text-primary">
                Sign up
              </Link>
            </Typography>
          </div>
        </div>
      </form>
    </div>
  )
}
