import { Controller } from 'react-hook-form'

import Typography from '@/components/ui/typography'

// import { apiOpeningClient } from '@/common/libs/apiClient'
import OpeningTags from '../components/opening-tags'
import { TagsInputProps } from './types'

const TagsInput = ({ control, errors }: TagsInputProps) => {
  //   const { data } = apiOpeningClient.common.getTags.useQuery(
  //     ['opening-tags'],
  //     {},
  //     { cacheTime: 600000, staleTime: 600000 }
  //   )
  const data = { body: ['tag1', 'tag2', 'tag3'] }
  return (
    <div className="flex flex-col gap-1">
      <Typography variant="h5">แท็ก</Typography>
      <Controller
        control={control}
        name="tags"
        render={({ field }) => <OpeningTags availableTags={data?.body || []} {...field} />}
      />
      {/* {errors.tags?.message && (
        <Typography variant="body3" className="text-system-error">
          {errors.tags?.message}
        </Typography>
      )} */}
    </div>
  )
}

export default TagsInput
