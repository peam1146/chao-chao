import { Controller } from 'react-hook-form'

import Typography from '@/components/ui/typography'

// import { apiOpeningClient } from '@/common/libs/apiClient'
import OpeningTags from '../components/opening-tags'
import { TagsInputProps } from './types'

export default function TagsInput({ control, errors }: TagsInputProps) {
  // const { data } = apiOpeningClient.common.getTags.useQuery(
  //   ['opening-tags'],
  //   {},
  //   { cacheTime: 600000, staleTime: 600000 }
  // )
  const data = {
    body: [
      {
        tagName: 'tag1',
        tagId: 1,
      },
      {
        tagName: 'tag2',
        tagId: 2,
      },
      {
        tagName: 'tag3',
        tagId: 3,
      },
      {
        tagName: 'tag4',
        tagId: 4,
      },
      {
        tagName: 'tag5',
        tagId: 5,
      },
    ],
  }
  return (
    <div className="flex flex-col gap-1">
      <Typography variant="h5">แท็ก</Typography>
      <Controller
        control={control}
        name="tags"
        render={({ field }) => <OpeningTags availableTags={data?.body || []} {...field} />}
      />
      {errors.tags?.message && (
        <Typography variant="body3" className="text-system-error">
          {errors.tags?.message}
        </Typography>
      )}
    </div>
  )
}
