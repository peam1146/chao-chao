'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { resolve } from '../../../../gqty'

export async function userLogin(data: FormData) {
  try {
    const args = {
      email: data.get('email') as string,
      password: data.get('password') as string,
    }
    const { token } = await resolve(({ mutation }) => {
      const loginInfo = mutation.loginUser(args)
      return { token: loginInfo?.token }
    })
    cookies().set('payload-token', token!, { secure: false })
  } catch (e) {
    redirect('/signin')
  }
  revalidatePath('/')
  redirect('/')
}
