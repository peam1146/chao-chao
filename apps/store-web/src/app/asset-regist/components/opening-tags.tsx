import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Typography from '@/components/ui/typography'
import { Heart } from '@phosphor-icons/react'

import usePopover from '../hooks/usePopover'
import useTags from '../hooks/useTags'
import Tag from './tag'
import { OpeningTagsProps } from './types'

export default function OpeningTags({
  availableTags,
  value: tags,
  onChange: setTags,
}: OpeningTagsProps) {
  const { inputValue, filteredTags, onAddTag, onRemoveTag, setInputValue } = useTags(
    availableTags,
    tags,
    setTags
  )
  const { inputEl, isFocus } = usePopover()
  return (
    <Popover open={isFocus}>
      <PopoverTrigger asChild onClick={(e) => e.preventDefault()}>
        <div className="flex flex-wrap flex-2 py-2 px-3 border rounded-md gap-2 shadow-primary relative">
          {tags.map((tag, index) => (
            <div
              key={`${tag.tagId}${index}`}
              className="flex items-center bg-primary-bg text-primary-medium gap-2 px-2 py-1 rounded-sm"
            >
              <Heart onClick={() => onRemoveTag(index)} className="cursor-pointer w-3 h-3" />
              <Typography variant="h6">{tag.tagName}</Typography>
            </div>
          ))}

          <input
            ref={inputEl}
            value={inputValue}
            onChange={(ev) => setInputValue(ev.currentTarget.value)}
            type="text"
            placeholder="เช่น ai, data science, web, robot"
            className="flex-1 active:outline-none focus:outline-none h5 min-w-[120px]"
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                ev.preventDefault()
                onAddTag({ tagName: inputValue, tagId: Math.random() })
              }
            }}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(ev) => ev.preventDefault()}
        onClick={(ev) => {
          ev.preventDefault()
          ev.stopPropagation()
        }}
        asChild
        className="transition-all duration-500 z-50 bg-white shadow-md rounded-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      >
        <div className="flex w-[min(80vw,750px)] flex-col p-4 justify-between gap-4">
          {filteredTags.length !== 0 && (
            <div className="flex flex-wrap gap-2 max-h-[30vh] overflow-auto">
              {filteredTags.map((tag) => (
                // <div>{tag.tagName}</div>
                <div key={tag.tagId} onClick={() => onAddTag(tag)} className="w-fit cursor-pointer">
                  <Tag text={tag.tagName} />
                </div>
                // <Tag
                //   key={tag.tagId}
                //   text={tag.tagName}
                //   // className="w-fit cursor-pointer"
                //   onClick={() => onAddTag(tag)}
                // />
                // <Tag text={tag.tagName} />
              ))}
            </div>
          )}
          {/* <div className="flex gap-2 items-center">
            <Typography variant="h6">หรือสร้างแท็กใหม่</Typography>
            {inputValue && (
              <Tag
                text={inputValue}
                onClick={() => onAddTag({ tagName: inputValue, tagId: Math.random() })}
                className="w-fit cursor-pointer"
              />
            )}
          </div> */}
        </div>
      </PopoverContent>
    </Popover>
  )
}
