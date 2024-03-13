import React from 'react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import Typography from '@/components/ui/typography'

import { type Tag as TagType } from './tag-input'

type AutocompleteProps = {
  tags: TagType[]
  setTags: React.Dispatch<React.SetStateAction<TagType[]>>
  autocompleteOptions: TagType[]
  onTagAdd?: (tag: string) => void
  allowDuplicates: boolean
  showbelow: boolean
  children: React.ReactNode
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  tags,
  setTags,
  autocompleteOptions,
  onTagAdd,
  allowDuplicates,
  showbelow,
  children,
}) => {
  return (
    <Command className="border">
      {children}
      {showbelow && (
        <CommandList>
          <CommandEmpty>
            <Typography>No results found.</Typography>
          </CommandEmpty>
          <CommandGroup heading="Suggestions">
            {autocompleteOptions.map((option) => (
              <CommandItem key={option.id}>
                <div
                  className="w-full"
                  onClick={() => {
                    if (!allowDuplicates && tags.some((tag) => tag.text === option.text)) return
                    setTags([...tags, option])
                    onTagAdd?.(option.text)
                  }}
                >
                  {option.text}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  )
}
