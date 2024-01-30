'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { Key, UserCircle } from '@phosphor-icons/react'
import Link from 'next/link'
import { z } from 'zod'

import { useMutation } from '../../../../gqty'
import { Button } from './button'
import { Input } from './input'

// interface IFormInput {
//   email: string
//   password: string
// }
const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})
type ValidationSchema = z.infer<typeof validationSchema>
export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data)
  // const { register, handleSubmit } = useForm<IFormInput>()
  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <div className="w-full h-[339px]">
      <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
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
                <Input
                  type="text"
                  placeholder="Email or Phone number"
                  {...register('email')}
                ></Input>
              </div>
              {errors.email && (
                <p className="text-xs italic text-red-500 mt-0.5">{errors.email?.message}</p>
              )}
              <div className="w-full">
                <div className="w-full relative pb-1">
                  <div className="absolute h-full flex items-center justify-center ml-3">
                    <Key size={20} className="text-muted-foreground" />
                  </div>
                  <Input type="password" placeholder="Password" {...register('password')}></Input>
                </div>
                {errors.password && (
                  <p className="text-xs italic text-red-500 mt-2">{errors.password?.message}</p>
                )}
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
