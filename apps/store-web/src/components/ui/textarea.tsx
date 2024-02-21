import * as React from 'react'

import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

const textAreaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return <textarea className={cn(textAreaVariants({ error }), className)} ref={ref} {...props} />
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
