'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { resolve } from '../../../../gqty'

export async function logout() {
  const { res } = await resolve(({ mutation }) => {
    const res = mutation.logoutUser
    return { res }
  })

  if (res) {
    cookies().set('payload-token', '', { secure: false })
    redirect('/')
  }
}
