'use server'

import { cookies } from 'next/headers'

export const getHeaders = () => {
  return cookies()
}
