import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { X } from '@phosphor-icons/react'

import { TagInputProps, type Tag as TagType } from './tag-input'

export type TagProps = {
  tagObj: TagType
  onRemoveTag: (id: number) => void
} & Pick<TagInputProps, 'direction' | 'onTagClick'>

export const Tag: React.FC<TagProps> = ({ tagObj, onTagClick, onRemoveTag }) => {
  return (
    <span
      key={tagObj.id}
      className="border inline-flex items-center px-3 py-1 text-secondary rounded-full gap-1 border-muted-foreground "
      onClick={() => onTagClick?.(tagObj)}
    >
      <Typography variant="h6" className="max-w-[160px] text-secondary line-clamp-1 break-words">
        {tagObj.text}
      </Typography>
      <Button
        type="button"
        variant="ghost"
        onClick={(e) => {
          e.stopPropagation()
          onRemoveTag(tagObj.id)
        }}
        className={cn('py-1 px-1 h-full')}
      >
        <X className="w-4 h-4 text-secondary" />
      </Button>
    </span>
  )
}
