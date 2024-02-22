'use server'

import { toast } from '@/components/ui/use-toast'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { resolve } from '../../../../gqty'

// export async function userLogin(data: FormData) {
//   try {
//     const args = {
//       email: data.get('email') as string,
//       password: data.get('password') as string,
//     }
//     const { token } = await resolve(({ mutation }) => {
//       const loginInfo = mutation.loginUser(args)
//       return { token: loginInfo?.token }
//     })
//     toast({
//       title: 'Sign in Successful',
//       success: true,
//     })
//     cookies().set('payload-token', token!, { secure: false })
//   } catch (e) {
//     toast({
//       title: 'Incorrect email or password',
//       description: 'Try entering you information again.',
//       error: true,
//     })
//     redirect('/signin')
//   }
//   revalidatePath('/')
//   redirect('/')
// }
const LoginSchema = z.object({
  email: z.string(),
  // email: z.string().min(1, { message: 'An email address must contain a single @' }).email({
  //   message: 'An email address must contain a single @',
  // }),
  password: z.string(),
  // password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
})
type LoginValues = z.infer<typeof LoginSchema>
export async function userLogin(data: LoginValues) {
  try {
    const args = {
      email: data.email as string,
      password: data.password as string,
    }
    const { token } = await resolve(({ mutation }) => {
      const loginInfo = mutation.loginUser(args)
      return { token: loginInfo?.token }
    })
    cookies().set('payload-token', token!, { secure: false })
    // revalidatePath('/')
    // redirect('/')
  } catch (error) {
    throw error
    // redirect('/signin')
  }
  revalidatePath('/')
  redirect('/')
}
