'use server'

import { cookies } from 'next/headers'
import { z } from 'zod'

import { resolve } from '../../../../gqty'

const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
})
type LoginValues = z.infer<typeof LoginSchema>
export async function userLogin(data: LoginValues) {
  const args = {
    email: data.email as string,
    password: data.password as string,
  }
  const { token, id } = await resolve(
    ({ mutation }) => {
      const loginInfo = mutation.loginUser(args)
      return { token: loginInfo?.token, id: loginInfo?.user?.id }
    },
    {
      cachePolicy: 'no-store',
    }
  )

  cookies().set('payload-token', token!, { secure: false, priority: 'high' })
  cookies().set('user-id', id ? id.toString() : '', { secure: false, priority: 'high' })

  return { token, id }
}
