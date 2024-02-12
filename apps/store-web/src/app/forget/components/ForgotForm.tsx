'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import forgotLogo from '@/assets/images/Saly-3.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'

import { handleForgot } from './action'

const validationSchema = z.object({
  email: z.string().email(),
})

type ValidationSchema = z.infer<typeof validationSchema>

export default function ForgotForm() {
  const { register, handleSubmit } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    await handleForgot(data)
  }

  return (
    <div className="h-fit w-full flex items-center justify-center flex-col lg:flex-row my-auto">
      <div className="h-[295px] w-[238px] lg:hidden">
        <Image src={forgotLogo} width={0} height={0} sizes="100vw" alt="Forgot Picture" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-fit w-full flex flex-col items-center gap-24 lg:gap-12 my-auto xl:w-1/2"
      >
        <div className="w-full flex flex-col gap-y-12 max-lg:gap-y-4">
          <Typography
            variant="h3"
            fontWeight="bold"
            className="text-center max-lg:self-start lg:h2"
          >
            Forgot Password
          </Typography>
          <div className="flex flex-col gap-6 items-center">
            <Typography variant="h6" className="lg:hidden">
              Enter the email address and We will send you a link to reset your password.
            </Typography>
            <Typography variant="h5" className="max-lg:hidden text-center">
              Enter the email address and We will send you a link to reset your password.
            </Typography>
            <div className="w-full relative">
              <div className="absolute h-full flex items-center justify-center ml-3">
                <UserCircle size={20} className="text-muted-foreground" />
              </div>
              <Input type="email" placeholder="Email" className="pl-9" {...register('email')} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2 w-full">
          <Button type="submit" className="bg-primary w-full lg:w-[108px]">
            Send
          </Button>
          <div className="text-h6 flex flex-row gap-x-1">
            <Typography variant="h6">Don’t have an account?</Typography>
            <Link href="../signup" className="text-primary">
              Sign up
            </Link>
          </div>
        </div>
      </form>
      <div className="w-full xl:w-1/2 hidden lg:flex justify-center items-center">
        <Image src={forgotLogo} width={0} height={0} alt="Forgot Picture" />
      </div>
    </div>
  )
}
