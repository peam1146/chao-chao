'use server'

import { cookies } from 'next/headers'

export async function logout() {
  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (req) {
      cookies().set('payload-token', '', { secure: false, priority: 'high' })
      cookies().set('user-id', '', { secure: false, priority: 'high' })
    }
  } catch (err) {
    console.log(err)
  }
}
