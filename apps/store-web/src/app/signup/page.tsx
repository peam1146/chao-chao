import { redirect } from 'next/navigation'

import { resolve } from '../../../gqty'
import SignupForm from './components/SignupForm'

export default async function SignupPage() {
  const user = await resolve(({ query }) => {
    return query.meUser?.user?.id
  })

  if (user) {
    redirect('/')
  }
  return (
    <div className="container min-h-[calc(100vh-64px)] min-w-screen bg-background justify-items-center my-auto grid">
      <SignupForm />
    </div>
  )
}
