'use client'

import React from 'react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Key, UserCircle, Warning } from '@phosphor-icons/react'
import Link from 'next/link'
import { toast } from 'sonner'
import { z } from 'zod'

import { userLogin } from '../actions/userLogin'

const LoginSchema = z.object({
  email: z.string(),
  // email: z.string().min(1, { message: 'An email address must contain a single @' }).email({
  //   message: 'An email address must contain a single @',
  // }),
  password: z.string(),
  // password: z.string().min(0, { message: 'Password must be at least 6 characters.' }),
})
type LoginValues = z.infer<typeof LoginSchema>
export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
  })
  const [error, setError] = useState('')
  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    try {
      await userLogin(data)
    } catch (err) {
      setError('incorrect email or password')
    }
  }
  return (
    <div className="w-full h-[339px]">
      <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full h-full flex flex-col items-center lg:justify-center gap-y-12 justify-between">
          <div className="w-full flex flex-col items-center justify-center lg:gap-y-12 gap-y-4">
            <Typography variant="h3" fontWeight="bold" className="self-start lg:self-center lg:h2">
              Sign in
            </Typography>
            <div className="w-full flex flex-col items-center lg:justify-center lg:gap-y-5 gap-y-4">
              <div className="w-full relative">
                <div className="absolute h-full flex items-center justify-center ml-3">
                  <UserCircle
                    size={20}
                    className="text-muted-foreground"
                    // className={`${errors.email ? 'text-unavailable' : 'text-muted-foreground'}`}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Email or Phone number"
                  {...register('email')}
                  // className="pl-9"
                  className={`pl-9 ${errors.email ? 'border-unavailable text-unavailable' : ''}`}
                  required
                />
              </div>
              {/* {errors.email && (
                <Typography variant="tiny" className="self-start">
                  {errors.email?.message}
                </Typography>
              )} */}
              <div className="w-full">
                <div className="w-full relative pb-1">
                  <div className="absolute h-full flex items-center justify-center ml-3">
                    <Key
                      size={20}
                      className="text-muted-foreground"
                      // className={`${
                      //   errors.password ? 'text-unavailable' : 'text-muted-foreground'
                      // }`}
                    />
                  </div>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                    className="pl-9"
                    // className={`pl-9 ${
                    //   errors.password ? 'border-unavailable text-unavailable' : ''
                    // }`}
                    required
                  />
                </div>
                {/* {errors.password && (
                  <Typography variant="tiny" className="self-start">
                    {errors.password?.message}
                  </Typography>
                )} */}
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
      <div className="hidden">
        {error &&
          toast.error(
            <div>
              <div className="flex flex-row gap-1">
                <Warning size={16} weight="fill" className="text-unavailable" />
                <Typography variant="h6" fontWeight="bold" className="text-unavailable">
                  Incorrect email or password
                </Typography>
              </div>
              <Typography variant="h6" className="text-muted-foreground">
                Try entering your information again
              </Typography>
            </div>,
            {
              id: 0,
            }
          )}
      </div>
    </div>
  )
}
