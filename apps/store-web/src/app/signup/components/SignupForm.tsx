'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import signupLogo from '@/assets/images/Saly-1.png'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { Key, Phone, UserCircle, Warning } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'
import { z } from 'zod'

import { createUser } from './actions'

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'An email address must contain a single @',
  }),
  phone: z
    .string()
    .regex(
      new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/),
      'An phone number must contain 10 characters.'
    ),
  password: z.string().min(6, { message: 'An password must contain at least 6 characters.' }),
})

type ValidationSchema = z.infer<typeof validationSchema>

export default function SignupForm() {
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const [error, setError] = useState('')

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      await createUser(data)
    } catch (e) {
      setError('This email is already registered.')
      console.log(error)
    }
  }

  return (
    <div className="h-fit w-fit flex items-center flex-col md:flex-row md:pl-10 my-auto">
      <div className="h-[295px] w-[238px] md:hidden">
        <Image src={signupLogo} width={0} height={0} sizes="100vw" alt="Signup Picture" />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full relative">
                    <div className="absolute h-full flex items-center justify-center ml-3">
                      <UserCircle size={20} className="text-muted-foreground" />
                    </div>
                    <Input placeholder="email" className="pl-9" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full relative">
                    <div className="absolute h-full flex items-center justify-center ml-3">
                      <Phone size={20} className="text-muted-foreground" />
                    </div>
                    <Input type="tel" placeholder="Phone number" className="pl-9" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="w-full relative">
                    <div className="absolute h-full flex items-center justify-center ml-3">
                      <Key size={20} className="text-muted-foreground" />
                    </div>
                    <Input type="password" placeholder="Password" className="pl-9" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
      </Form>
      <div className="h-[602px] w-[497px] hidden md:block">
        <Image src={signupLogo} width={0} height={0} sizes="100vw" alt="Signup Picture" />
      </div>
      <div className="hidden">
        {error &&
          toast.error(
            <div>
              <div className="flex flex-row gap-1">
                <Warning size={16} weight="fill" className="text-unavailable" />
                <Typography variant="h6" fontWeight="bold" className="text-unavailable">
                  This email is already registered.
                </Typography>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}
