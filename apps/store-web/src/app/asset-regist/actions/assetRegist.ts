'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { mutation, resolve } from '../../../../gqty'

export const AssetSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(1, {
      message: 'Name is required.',
    }),
  fee: z.string(),
  category: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    })
  ),
  description: z.string(),
  profileImg: z.string().url(),
})
type RegistValues = z.infer<typeof AssetSchema>
export async function assetRegist(data: RegistValues) {
  try {
    const args = {
      name: data.name as string,
      fee: data.fee as string,
      category: data.category as { id: string; text: string }[],
      description: data.description as string,
      profileImg: data.profileImg as string,
    }
    // const assetInfo = mutation.createAsset(args)
    // return assetInfo
  } catch (error) {
    throw error
  }
  revalidatePath('/')
  redirect('/')
}
