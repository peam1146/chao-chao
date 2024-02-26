// import { OpeningTag } from '@/common/types/opening'

interface OpeningTag {
  tagName: string
  tagId: number
}
export interface OpeningTagsProps {
  availableTags: OpeningTag[]
  value: OpeningTag[]
  onChange: (tags: OpeningTag[]) => void
}
