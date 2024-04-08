'use client'

import chatDark from '@/assets/images/chatDark.png'
import chatLight from '@/assets/images/chatLight.png'
import Typography from '@/components/ui/typography'
import { useUserToken } from '@/providers/User'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ChatPage() {
  const { theme } = useTheme()

  const router = useRouter()

  const { userToken: me } = useUserToken()

  if (me === '') {
    router.push('/signin')
  }

  return (
    <div className="h-full flex flex-col justify-center items-center gap-2.5">
      <Image
        src={theme === 'dark' ? chatDark : chatLight}
        alt="Select Chat Dark"
        width={186}
        height={186}
      />

      <Typography variant="h6">Select the chat on the left bar</Typography>
    </div>
  )
}
