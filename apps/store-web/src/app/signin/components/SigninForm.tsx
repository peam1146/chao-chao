'use client'

// import React, { useEffect } from 'react'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Key, UserCircle } from '@phosphor-icons/react'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

import { resolve } from '../../../../gqty'
import { userLogin } from '../actions/userLogin'

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
})
export default function SigninForm() {
  const router = useRouter()

  const { register, handleSubmit } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  })
  const { toast } = useToast()
  // const onSubmit = useCallback(
  //   async (data: z.infer<typeof loginSchema>) => {
  //     try {
  //       const args = {
  //         email: data.email,
  //         password: data.password,
  //       }
  //       console.log(data.email)
  //       console.log(data.password)
  //       const { token } = await resolve(({ mutation }) => {
  //         const loginInfo = mutation.loginUser(args)
  //         return { token: loginInfo?.token }
  //       })
  //       document.cookie = `payload-token=${token};path=/`
  //       toast({
  //         title: 'Sign in Successful',
  //         success: true,
  //       })
  //       router.push('/')
  //       // if (redirect?.current) router.push(redirect.current as string)
  //       // else router.push('/')
  //     } catch (e) {
  //       toast({
  //         title: 'Incorrect email or password',
  //         description: 'Try entering you information again.',
  //         error: true,
  //       })
  //       router.push('/signin')
  //     }
  //     // finally {
  //     //   revalidatePath('/')
  //     // }
  //   },
  //   [router, resolve]
  // )

  // async function onSubmit(data: z.infer<typeof loginSchema>) {
  //   console.log('This is the data that is being sent to the server.')
  //   try {
  //     const args = {
  //       email: data.email,
  //       password: data.password,
  //     }
  //     console.log(data.email)
  //     console.log(data.password)
  //     const { token } = await resolve(({ mutation }) => {
  //       const loginInfo = mutation.loginUser(args)
  //       return { token: loginInfo?.token }
  //     })
  //     console.log(token)
  //     toast({
  //       title: 'Sign in Successful',
  //       success: true,
  //     })
  //     document.cookie = `payload-token=${token};path=/`
  //     // cookies().set('payload-token', token!, { secure: false })
  //     router.push('/')
  //     // document.getElementById('emailID')?.children[0].removeChild
  //     // document.getElementById('passwordID')?.children[0].removeChild
  //     // console.log(document.getElementById('emailID')?.children[0])
  //   } catch (e) {
  //     toast({
  //       title: 'Incorrect email or password',
  //       description: 'Try entering you information again.',
  //       error: true,
  //     })
  //     // redirect('/signin')
  //   }
  //   //revalidatePath('/')
  //   // router.push('/')
  // }
  const [previousData, setPreviousData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  })
  async function onSubmit(data: z.infer<typeof loginSchema>) {
    // if (data.email === previousData.email && data.password === previousData.password) {
    //   toast({
    //     title: 'Incorrect email or password',
    //     description: 'Try entering your information again.',
    //     error: true,
    //   })
    //   return
    // }

    if (await userLogin(data)) {
      console.log('This is the data that is being sent to the server.')
      toast({
        title: 'Sign in Successful',
        success: true,
      })
      router.push('/')
      // revalidatePath('/')
      // redirect('/')
    } else {
      // setPreviousData(data)
      toast({
        title: 'Incorrect email or password',
        description: 'Try entering your information again.',
        error: true,
      })
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
                  <UserCircle size={20} className="text-muted-foreground" />
                </div>
                <Input
                  id="emailID"
                  type="text"
                  placeholder="Email or Phone number"
                  defaultValue=""
                  {...register('email')}
                  className="pl-9"
                  required
                />
              </div>
              <div className="w-full">
                <div className="w-full relative pb-1">
                  <div className="absolute h-full flex items-center justify-center ml-3">
                    <Key size={20} className="text-muted-foreground" />
                  </div>
                  <Input
                    id="passwordID"
                    type="password"
                    placeholder="Password"
                    defaultValue=""
                    {...register('password')}
                    className="pl-9"
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
