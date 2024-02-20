'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

import { resolve } from '../../../../gqty'

const validationSchema = z.object({
  email: z.string().email(),
})

type ValidationSchema = z.infer<typeof validationSchema>

export async function handleForgot(dataForm: ValidationSchema) {
  try {
    await resolve(async ({ mutation }) => {
      return mutation.forgotPasswordUser({
        email: dataForm.email,
      })
    })
  } catch (e) {
    redirect('/signup')
  }
  redirect('/')
}
