import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

export const Rating = ({
  value,
  max,
  className,
  size = 'base',
}: {
  value: number
  max: number
  className: string
  size?: 'small' | 'base'
}) => {
  return (
    <div className={cn('flex flex-row gap-0.5 items-center', className)}>
      {Array.from({ length: max }, (_, i) => {
        const color = i < value ? '#faaf00' : '#D4D4D4'
        return <Star color={color} fill={color} size={size === 'small' ? 14 : 20} key={i} />
      })}
    </div>
  )
}
