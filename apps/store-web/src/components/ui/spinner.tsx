import { HTMLAttributes } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

const SpinnerVariant = cva(
  [
    'inline-block rounded-full align-[-0.125em]',
    'border-4 border-solid border-current border-r-transparent',
    'animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]',
  ],
  {
    variants: {
      size: {
        xs: 'h-6 w-6',
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
)

type SpinnerProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> &
  VariantProps<typeof SpinnerVariant>

const Spinner = (props: SpinnerProps) => {
  const { className, size, ...prop } = props

  const loadingClassName = SpinnerVariant({ size, className })

  return (
    <span {...prop} className={loadingClassName} role="status">
      <span className="sr-only">Loading...</span>
    </span>
  )
}

export { Spinner }
