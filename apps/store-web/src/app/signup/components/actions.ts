'use server'

// import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { User_roles_MutationInput, resolve } from '../../../../gqty'

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  phone: z.string(),
  password: z.string().min(6, { message: 'Password must be atleast 6 characters' }),
})

type ValidationSchema = z.infer<typeof validationSchema>

export async function createUser(dataForm: ValidationSchema) {
  try {
    await resolve(({ mutation }) => {
      const data = mutation.createUser({
        data: {
          email: dataForm.email,
          password: dataForm.password,
          phone: dataForm.phone,
          roles: [User_roles_MutationInput.User],
        },
      })
      return { ...data }
    })
    console.log(`Signup Success`)
    // revalidatePath('/signup')
    // revalidateTag('signup')
    redirect('/signin')
  } catch (e) {
    console.log(e)
    redirect(`/signin?error=${e.message}`)
  }
}
