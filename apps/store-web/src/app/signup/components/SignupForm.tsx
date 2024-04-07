'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import signupLogo from '@/assets/images/Saly-1.png'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Key, Phone, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

import { User_roles_MutationInput, resolve } from '../../../../gqty'

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

  const { toast } = useToast()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: z.infer<typeof validationSchema>) {
    setIsLoading(true)
    try {
      await resolve(
        async ({ mutation }) => {
          const user = mutation.createUser({
            data: {
              email: data.email,
              password: data.password,
              phone: data.phone,
              roles: [User_roles_MutationInput.User],
            },
          })
          return user
        },
        {
          cachePolicy: 'no-store',
        }
      )
      toast({
        title: 'Sign up Successful',
        success: true,
      })
      setIsLoading(false)
      router.push('/signin')
    } catch (e) {
      toast({
        title: 'This email is already registered.',
        error: true,
      })
      setIsLoading(false)
    }
  }

  return (
    <div className="h-fit w-full flex items-center justify-center flex-col lg:flex-row my-auto">
      <div className="h-[295px] w-[238px] lg:hidden">
        <Image src={signupLogo} width={0} height={0} sizes="100vw" alt="Signup Picture" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-fit w-full flex flex-col items-center gap-24 lg:gap-12 my-auto xl:w-1/2"
          noValidate
        >
          <div className="w-full flex flex-col gap-y-5 ">
            <Typography variant="h3" fontWeight="bold" className="self-start lg:self-center lg:h2">
              Sign up
            </Typography>
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
                      <Input
                        type="email"
                        placeholder="Email"
                        className="pl-9"
                        error={!!form.formState.errors.email}
                        {...field}
                      />
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
                      <Input
                        placeholder="Phone number"
                        type="tel"
                        className="pl-9"
                        error={!!form.formState.errors.phone}
                        {...field}
                      />
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
                      <Input
                        type="password"
                        placeholder="Password"
                        className="pl-9"
                        error={!!form.formState.errors.password}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col items-center gap-y-2 w-full">
            <Button type="submit" className="bg-primary w-full lg:w-[108px]" disabled={isLoading}>
              {isLoading ? <Spinner className="flex justify-center" /> : 'Sign up'}
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

      <div className="w-full xl:w-1/2 hidden lg:flex justify-center items-center">
        <Image src={signupLogo} width={0} height={0} alt="Signup Picture" />
      </div>
    </div>
  )
}
