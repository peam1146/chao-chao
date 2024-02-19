'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Key, UserCircle, Warning } from '@phosphor-icons/react'
import Link from 'next/link'
import { z } from 'zod'

// import { LoginSchema, LoginValues, userLogin } from '../actions/userLogin'
import { userLogin } from '../actions/userLogin'

const LoginSchema = z.object({
  email: z.string().min(1, { message: 'An email address must contain a single @' }).email({
    message: 'An email address must contain a single @',
  }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
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

  const onSubmit: SubmitHandler<LoginValues> = async (data) => {
    await userLogin(data)
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
                  <UserCircle size={20} className="text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Email or Phone number"
                  {...register('email')}
                  className="pl-9"
                  required
                />
              </div>
              {errors.email && (
                <Typography variant="tiny" className="self-start">
                  {errors.email?.message}
                </Typography>
              )}
              <div className="w-full">
                <div className="w-full relative pb-1">
                  <div className="absolute h-full flex items-center justify-center ml-3">
                    <Key size={20} className="text-muted-foreground" />
                  </div>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...register('password')}
                    className="pl-9"
                    required
                  />
                </div>
                {errors.password && (
                  <Typography variant="tiny" className="self-start">
                    {errors.password?.message}
                  </Typography>
                )}
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
      <div>
        <CheckCircle size={20}></CheckCircle>
        <Typography variant="h6" fontWeight="bold">
          Sign in Successful
        </Typography>
      </div>
      <div>
        <Warning size={20}></Warning>
        <Typography variant="h6" fontWeight="bold">
          Incorrect email or password
        </Typography>
        <Typography variant="h6">Try entering your information again</Typography>
      </div>
    </div>
  )
}
