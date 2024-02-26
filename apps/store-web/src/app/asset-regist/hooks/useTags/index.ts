import { useCallback, useMemo, useState } from 'react'

// import { OpeningTag } from '@/common/types/opening'
interface OpeningTag {
  tagName: string
  tagId: number
}
const useTags = (
  availableTags: OpeningTag[],
  tags: OpeningTag[],
  setTags: (tags: OpeningTag[]) => void
) => {
  const [inputValue, setInputValue] = useState('')

  const filteredTags = useMemo(() => {
    return availableTags.filter((tag) => {
      if (
        !tags.reduce(
          (acc, cur) => acc && tag.tagName.toLowerCase() !== cur.tagName.toLowerCase(),
          true
        )
      )
        return false

      if (!inputValue) return true

      return tag.tagName.toLowerCase().includes(inputValue.toLowerCase())
    })
  }, [availableTags, inputValue, tags])

  const onAddTag = useCallback(
    (tag: OpeningTag) => {
      if (tag) {
        if (
          tags.reduce(
            (acc, cur) => acc && tag.tagName.toLowerCase() !== cur.tagName.toLowerCase(),
            true
          )
        )
          setTags([...tags, tag])
        setInputValue('')
      }
    },
    [setTags, tags]
  )

  const onRemoveTag = useCallback(
    (index: number) => {
      setTags(tags.filter((_, i) => i !== index))
    },
    [setTags, tags]
  )

  return { inputValue, setInputValue, tags, onAddTag, onRemoveTag, filteredTags }
}

export default useTags
