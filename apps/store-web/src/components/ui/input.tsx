import * as React from 'react'

import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const inputVariants = cva(
  'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      error: {
        default: '',
        true: 'border border-unavailable text-unavailable placeholder:text-unavailable focus-visible:ring-unavailable focus-visible:ring-offset-2',
      },
    },
    defaultVariants: {
      error: 'default',
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input type={type} className={cn(inputVariants({ error }), className)} ref={ref} {...props} />
    )
  }
)
Input.displayName = 'Input'

export { Input }
