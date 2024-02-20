'use server'

import { throws } from 'assert'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { User_roles_MutationInput, resolve } from '../../../../gqty'

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'An email address must contain a single @',
  }),
  phone: z.string(),
  password: z.string().min(6, { message: 'An password must contain at least 6 characters.' }),
})

type ValidationSchema = z.infer<typeof validationSchema>

export async function createUser(dataForm: ValidationSchema) {
  try {
    await resolve(async ({ mutation }) => {
      return mutation.createUser({
        data: {
          email: dataForm.email,
          password: dataForm.password,
          phone: dataForm.phone,
          roles: [User_roles_MutationInput.User],
        },
      })
    })
  } catch (e) {
    throw e
  }
  redirect('/signin')
}
