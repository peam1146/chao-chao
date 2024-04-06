import { Review_option_MutationInput } from '../../../../../gqty'

export type ReviewPayment = {
  description: string
  rating: string
  option: Review_option_MutationInput
  reviewToUser?: number
  reviewToItem?: number
}

export type duplicateReviewPayment = {
  userDescription: string
  itemDescription: string
  userRating: string
  itemRating: string
  userOption: Review_option_MutationInput
  itemOption: Review_option_MutationInput
  reviewToUser?: number
  reviewToItem?: number
}
