import { Control, FieldErrors } from 'react-hook-form'

// import { CreateOpeningFormValues } from '../../../../hooks/useCreateOpeningForm/types'

export interface CreateOpeningFormValues {
  tags: string[]
}
export interface TagsInputProps {
  control: Control<CreateOpeningFormValues>
  errors: FieldErrors<CreateOpeningFormValues>
}
