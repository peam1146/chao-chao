'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

import { resolve } from '../../../../../gqty'

export const editProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  bio: z.string(),
  province: z.string(),
})

export type EditProfileValues = z.infer<typeof editProfileSchema>

export async function editProfile(data: EditProfileValues) {
  const id = await resolve(({ query }) => {
    return query.meUser?.user?.id!
  })
  await resolve(({ mutation }) => {
    return mutation.updateUser({
      data: {
        bio: data.bio,
        firstName: data.firstName,
        lastName: data.lastName,
        province: data.province,
      },
      id: id,
      autosave: true,
    })
  })
  redirect('/profile')
}
