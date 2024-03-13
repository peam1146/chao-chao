import React from 'react'

import { cn } from '@/lib/utils'

import { Tag, TagProps } from './tag'
import { type Tag as TagType } from './tag-input'

export type TagListProps = {
  tags: TagType[]
  direction?: TagProps['direction']
  onSortEnd: (oldIndex: number, newIndex: number) => void
} & Omit<TagProps, 'tagObj'>

export const TagList: React.FC<TagListProps> = ({
  tags,
  direction,
  onSortEnd,
  ...tagListProps
}) => {
  return (
    <div
      className={cn('rounded-md w-full', {
        'flex flex-wrap gap-2': direction === 'row',
        'flex flex-col gap-2': direction === 'column',
      })}
    >
      {tags.map((tagObj) => (
        <Tag key={tagObj.id} tagObj={tagObj} {...tagListProps} />
      ))}
    </div>
  )
}
