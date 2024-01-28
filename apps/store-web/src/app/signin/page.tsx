'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Button } from './components/button'
import { Input } from './components/input'

export default function SignInPage() {
  return (
    <main className="flex bg-[#030711] min-h-screen flex-col items-center justify-between p-24">
      {/* <Form>
        <form className="space-y-8">
          <FormField
            name="username"
            // render={({ field }) => (
            //   <FormItem>
            //     <FormLabel>Username</FormLabel>
            //     <FormControl>
            //       <Input placeholder="shadcn" {...field} />
            //     </FormControl>
            //     <FormDescription>This is your public display name.</FormDescription>
            //     <FormMessage />
            //   </FormItem>
            // )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form> */}
      <div className="flex-col items-center justify-center">
        <Input type="email" placeholder="Email or Phone number"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Button>Sign In</Button>
      </div>
    </main>
  )
}
