'use client'

import React from 'react'
import { useEffect } from 'react'

import { CommandInput } from '@/components/ui/command'

import { Autocomplete } from './autocomplete'
import { TagList } from './tag-list'

export enum Delimiter {
  Comma = ',',
  Enter = 'Enter',
}

type OmittedInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value'>

export type Tag = {
  id: number
  text: string
}

export interface TagInputProps extends OmittedInputProps {
  placeholder?: string
  tags: Tag[]
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>
  enableAutocomplete?: boolean
  autocompleteOptions?: Tag[]
  onTagAdd?: (tag: string) => void
  onTagRemove?: (tag: string) => void
  allowDuplicates?: boolean
  delimiter?: Delimiter
  sortTags?: boolean
  delimiterList?: string[]
  value?: string | number | readonly string[] | { id: string; text: string }[]
  autocompleteFilter?: (option: string) => boolean
  direction?: 'row' | 'column'
  onInputChange?: (value: string) => void
  onTagClick?: (tag: Tag) => void
  inputFieldPostion?: 'bottom' | 'top' | 'inline'
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const TagInput = React.forwardRef<HTMLInputElement, TagInputProps>((props, ref) => {
  const {
    id,
    placeholder,
    tags,
    setTags,
    autocompleteOptions,
    delimiter = Delimiter.Comma,
    onTagAdd,
    onTagRemove,
    allowDuplicates,
    sortTags,
    delimiterList,
    autocompleteFilter,
    direction = 'row',
    onInputChange,
    onTagClick,
    inputFieldPostion = 'bottom',
  } = props

  const [inputValue, setInputValue] = React.useState('')
  const [showlist, setShowList] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  useEffect(() => {
    const handleFocus = () => {
      if (document.activeElement === inputRef.current) {
        setShowList(true)
      } else {
        setShowList(false)
      }
    }

    document.addEventListener('click', handleFocus)

    return () => {
      document.removeEventListener('click', handleFocus)
    }
  }, [])
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onInputChange?.(newValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      delimiterList
        ? delimiterList.includes(e.key)
        : e.key === delimiter || e.key === Delimiter.Enter
    ) {
      e.preventDefault()
      const newTagText = inputValue.trim()
      const newTagId = undefined
      if (newTagText && (allowDuplicates || !tags.some((tag) => tag.text === newTagText))) {
        setTags([...tags, { id: newTagId, text: newTagText }])
        onTagAdd?.(newTagText)
      }
      setInputValue('')
    }
  }

  const removeTag = (idToRemove: string) => {
    setTags(tags.filter((tag) => tag.id !== idToRemove))
    onTagRemove?.(tags.find((tag) => tag.id === idToRemove)?.text || '')
  }

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setTags((currentTags) => {
      const newTags = [...currentTags]
      const [removedTag] = newTags.splice(oldIndex, 1)
      newTags.splice(newIndex, 0, removedTag)
      return newTags
    })
  }

  const filteredAutocompleteOptions = autocompleteFilter
    ? autocompleteOptions?.filter((option) => autocompleteFilter(option.text))
    : autocompleteOptions

  const displayedTags = sortTags ? [...tags].sort() : tags
  return (
    <div
      className={`w-full flex gap-2 ${
        inputFieldPostion === 'bottom'
          ? 'flex-col'
          : inputFieldPostion === 'top'
            ? 'flex-col-reverse'
            : 'flex-row'
      }`}
    >
      <TagList
        tags={displayedTags}
        onTagClick={onTagClick}
        onSortEnd={onSortEnd}
        onRemoveTag={removeTag}
        direction={direction}
      />
      <div className="w-full">
        <Autocomplete
          tags={tags}
          setTags={setTags}
          autocompleteOptions={filteredAutocompleteOptions as Tag[]}
          onTagAdd={onTagAdd}
          allowDuplicates={allowDuplicates ?? false}
          showbelow={showlist}
        >
          <CommandInput
            placeholder={placeholder}
            ref={inputRef}
            value={inputValue}
            onChangeCapture={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </Autocomplete>
      </div>
    </div>
  )
})
TagInput.displayName = 'TagInput'

export { TagInput }
