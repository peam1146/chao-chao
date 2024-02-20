'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import profile from '@/assets/images/profileLogo.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Typography from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'

import { EditProfileValues, editProfile, editProfileSchema } from './actions/editProfile'

export default function ProfileEdit() {
  const { register, handleSubmit } = useForm<EditProfileValues>({
    resolver: zodResolver(editProfileSchema),
  })

  const onSubmit: SubmitHandler<EditProfileValues> = async (data) => {
    await editProfile(data)
  }
  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] flex-col items-center py-4 lg:py-12 gap-4 my-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
        <div className="flex flex-row gap-1 self-start">
          <UserCircle className="w-6 h-6" />
          <Typography variant="h4" fontWeight="bold">
            Edit Profile
          </Typography>
        </div>
        <div className="flex flex-col w-full bg-card rounded-2xl p-6 gap-4">
          <div className="flex flex-row gap-8 max-lg:flex-col">
            <Image
              className="w-[150px] h-[150px] flex-none max-lg:self-center"
              src={profile}
              alt="profile"
            />
            <div className="flex flex-col gap-4 flex-1 items-center">
              <div className="flex flex-row gap-10 w-full max-lg:flex-col max-lg:gap-[10px]">
                <div className="flex flex-col gap-[10px] w-full">
                  <>
                    <Typography variant="h5">First name</Typography>
                    <Input placeholder="First name" {...register('firstName')} />
                  </>
                  <>
                    <Typography variant="h5">Province</Typography>
                    <Input placeholder="Province" {...register('province')} />
                  </>
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                  <Typography variant="h5">Last name</Typography>
                  <Input placeholder="Last name" {...register('lastName')} />
                </div>
              </div>
              <div className="flex flex-col gap-[10px] w-full">
                <Typography variant="h5">Short bio</Typography>
                <Textarea placeholder="Tell us about you" {...register('bio')} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 self-center">
          <Button type="button" variant="secondary" className="min-w-[130px] max-lg:w-1/2">
            Cancel
          </Button>
          <Button type="submit" className="min-w-[130px] max-lg:w-1/2">
            Save
          </Button>
        </div>
      </form>
    </main>
  )
}
