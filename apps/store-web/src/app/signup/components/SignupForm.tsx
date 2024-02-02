'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import signupLogo from '@/assets/images/Saly-1.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { Key, Phone, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'

import { createUser } from './actions'

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  phone: z.string(),
  password: z.string().min(6, { message: 'Password must be atleast 6 characters' }),
})

type ValidationSchema = z.infer<typeof validationSchema>

export default function SignupForm() {
  const { register, handleSubmit } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    const result = await createUser(data)
    // console.log(data)
    // console.log(result)
  }

  return (
    <div className="h-fit w-fit flex items-center flex-col md:flex-row md:pl-10 my-auto">
      <div className="h-[295px] w-[238px] md:hidden">
        <Image src={signupLogo} width={0} height={0} sizes="100vw" alt="Signup Picture" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-fit w-fit flex flex-col items-center gap-4 md:gap-12 my-auto"
      >
        <Typography variant="h3" fontWeight="bold" className="self-start md:self-center md:h2">
          Sign up
        </Typography>

        <div className="w-full flex flex-col gap-y-5">
          <div className="w-full relative">
            <div className="absolute h-full flex items-center justify-center ml-3">
              <UserCircle size={20} className="text-muted-foreground" />
            </div>
            <Input type="email" placeholder="Email" className="pl-9" {...register('email')} />
          </div>
          <div className="w-full relative">
            <div className="absolute h-full flex items-center justify-center ml-3">
              <Phone size={20} className="text-muted-foreground" />
            </div>
            <Input type="tel" placeholder="Phone number" className="pl-9" {...register('phone')} />
          </div>
          <div className="w-full relative">
            <div className="absolute h-full flex items-center justify-center ml-3">
              <Key size={20} className="text-muted-foreground" />
            </div>
            <Input
              type="password"
              placeholder="Password"
              className="pl-9"
              {...register('password')}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <Button type="submit" className="bg-primary w-[100%] md:w-[108px]">
            Sign up
          </Button>
          <div className="text-h6 flex flex-row gap-x-1">
            <Typography variant="h6"> Already have an account?</Typography>
            <Link href="../signin" className="text-primary">
              Sign in
            </Link>
          </div>
        </div>
      </form>

      <div className="h-[602px] w-[497px] hidden md:block">
        <Image src={signupLogo} width={0} height={0} sizes="100vw" alt="Signup Picture" />
      </div>
    </div>
  )
}
