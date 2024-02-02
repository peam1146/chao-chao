'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { resolve } from '../../../../gqty'

export async function userLogin(data: FormData) {
  console.log(data)
  try {
    const { token } = await resolve(({ mutation }) => {
      const loginInfo = mutation.loginUser({
        email: data.get('email') as string,
        password: data.get('password') as string,
      })
      return { token: loginInfo?.token }
    })

    cookies().set('payload-token', token!, { secure: false })
  } catch (e) {
    console.error('Login failed:', e)
    redirect('/signin')
  }
  redirect('/')
}
