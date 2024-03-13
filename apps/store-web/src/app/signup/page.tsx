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
    <div className="container min-w-screen bg-background items-center justify-items-center py-24 my-auto grid">
      <SignupForm />
    </div>
  )
}
