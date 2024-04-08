'use server'

import { cookies } from 'next/headers'

export async function logout() {
  try {
    const req = await fetch('http://localhost:3001/api/users/logout', {
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
