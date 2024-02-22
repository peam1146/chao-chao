'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { resolve } from '../../../../gqty'

const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
})
type LoginValues = z.infer<typeof LoginSchema>
export async function userLogin(data: LoginValues) {
  try {
    const args = {
      email: data.email as string,
      password: data.password as string,
    }
    const { token } = await resolve(
      ({ mutation }) => {
        const loginInfo = mutation.loginUser(args)
        return { token: loginInfo?.token }
      },
      {
        cachePolicy: 'no-store',
      }
    )
    cookies().set('payload-token', token!, { secure: false })
  } catch (error) {
    throw error
  }
  revalidatePath('/')
  redirect('/')
}
