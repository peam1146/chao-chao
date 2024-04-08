'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import profile from '@/assets/images/profileLogo.png'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Textarea } from '@/components/ui/textarea'
import Typography from '@/components/ui/typography'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Camera, UserCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

import { resolve } from '../../../../gqty'

export const editProfileSchema = z.object({
  firstName: z.string().min(1, {
    message: 'First name is required.',
  }),
  lastName: z.string().min(1, {
    message: 'Last name is required.',
  }),
  bio: z
    .string()
    .min(10, {
      message: 'Short bio must be at least 10 characters.',
    })
    .max(150, {
      message: 'Short bio must not exceed 150 characters.',
    }),
  province: z.string().min(1, {
    message: 'Province is required.',
  }),
  profileImg: z.string().nullable(),
})

export default function ProfileEdit() {
  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
  })

  const { toast } = useToast()

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imageUrl, setImageUrl] = useState('')
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { firstName, bio, lastName, province, profileImg } = await resolve(({ query }) => {
          return {
            firstName: query.meUser?.user?.firstName,
            bio: query.meUser?.user?.bio,
            lastName: query.meUser?.user?.lastName,
            province: query.meUser?.user?.province,
            profileImg: query.meUser?.user?.profileImage?.url,
          }
        })
        form.reset({
          bio: bio ?? '',
          firstName: firstName ?? '',
          lastName: lastName ?? '',
          province: province ?? '',
          profileImg: profileImg ?? '',
        })
        setImageUrl(profileImg ?? '')
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [form])

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: z.infer<typeof editProfileSchema>) {
    setIsLoading(true)
    const { userId } = await resolve(({ query }) => {
      return {
        userId: query.meUser?.user?.id!,
      }
    })
    try {
      let imageId: number
      if (fileInputRef.current?.files && fileInputRef.current?.files.length > 0) {
        const data = new FormData()
        const token = Object.fromEntries(document.cookie.split('; ').map((c) => c.split('=')))
        data.append('file', fileInputRef.current.files[0])
        await fetch('http://localhost:3001/api/medias', {
          method: 'POST',
          body: data,
          headers: {
            Authorization: `JWT ${token['payload-token']}`,
          },
        })
          .then((response) => response.json())
          .then(async (result) => {
            imageId = result.doc.id
          })
          .catch((error) => console.error(error))
      }

      await resolve(
        async ({ mutation }) => {
          const user = mutation.updateUser({
            data: {
              bio: data.bio,
              firstName: data.firstName,
              lastName: data.lastName,
              province: data.province,
              profileImage: imageId,
            },
            id: userId,
            autosave: true,
          })
          return user
        },
        {
          cachePolicy: 'no-store',
        }
      )
      toast({
        title: 'Success',
        description: 'Profile updated successfully',
        success: true,
      })
      router.push('/profile')
      setIsLoading(false)
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        error: true,
      })
      setIsLoading(false)
    }
  }

  return (
    <main className="container flex w-full bg-background min-h-[calc(100vh-64px)] flex-col items-center py-4 lg:py-12 gap-4 my-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
          <div className="flex flex-row gap-1 self-start">
            <UserCircle className="w-6 h-6" />
            <Typography variant="h4" fontWeight="bold">
              Edit Profile
            </Typography>
          </div>
          <div className="flex flex-col w-full bg-card rounded-2xl p-6 gap-4">
            <div className="flex flex-row gap-8 max-lg:flex-col">
              <div className="relative h-fit max-lg:self-center">
                <Image
                  className="w-[150px] h-[150px] flex-none max-lg:self-center rounded-full object-cover"
                  src={imageUrl !== '' ? imageUrl : profile}
                  alt="profile"
                  width={150}
                  height={150}
                />
                <p
                  className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <Camera className="w-6 h-6" />
                </p>
                <Input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const file = e.target.files[0]
                      if (!file) return
                      const url = URL.createObjectURL(file)
                      setImageUrl(url)
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-4 flex-1 items-center">
                <div className="flex flex-row gap-10 w-full max-lg:flex-col max-lg:gap-[10px]">
                  <div className="flex flex-col gap-[10px] w-full">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <Typography variant="h5">First name</Typography>
                          <FormControl>
                            <Input
                              placeholder="First name"
                              error={!!form.formState.errors.firstName}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="province"
                      render={({ field }) => (
                        <FormItem>
                          <Typography variant="h5">Province</Typography>
                          <FormControl>
                            <Input
                              placeholder="Province"
                              error={!!form.formState.errors.province}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] w-full">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <Typography variant="h5">Last name</Typography>
                          <FormControl>
                            <Input
                              placeholder="Last name"
                              error={!!form.formState.errors.lastName}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <Typography variant="h5">Short bio</Typography>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about you"
                            error={!!form.formState.errors.bio}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 self-center max-md:w-full">
            <Link href="/profile" className="max-lg:w-1/2">
              <Button type="button" variant="secondary" className="min-w-[130px] w-full">
                Cancel
              </Button>
            </Link>
            <Button type="submit" className="min-w-[130px] max-lg:w-1/2">
              {isLoading ? <Spinner /> : 'Save'}
            </Button>
          </div>
        </form>
      </Form>
    </main>
  )
}
