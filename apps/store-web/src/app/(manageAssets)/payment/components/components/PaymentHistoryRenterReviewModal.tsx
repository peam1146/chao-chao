import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import Typography from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Review_option_MutationInput, resolve } from '../../../../../../gqty'
import { duplicateReviewPayment } from '../../types/types'
import { ReviewRenterContent } from './ReviewRenterContent'

type PaymentHistoryRenterReviewModalProps = {
  reviewToUser?: number
  reviewToItem?: number
  onClick: () => void
}

export default function PaymentHistoryRenterReviewModal(
  props: PaymentHistoryRenterReviewModalProps
) {
  const { reviewToUser, reviewToItem, onClick } = props

  const ReviewSchema = z.object({
    userDescription: z.string(),
    itemDescription: z.string(),
    userRating: z.string(),
    itemRating: z.string(),
    userOption: z.enum(['ITEM', 'USER']),
    itemOption: z.enum(['ITEM', 'USER']),
    reviewToUser: z.number().int().optional(),
    reviewToItem: z.number().int().optional(),
  })

  const reviewForm = useForm<duplicateReviewPayment>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      userDescription: '',
      itemDescription: '',
      userRating: '0',
      itemRating: '0',
      userOption: Review_option_MutationInput.USER,
      itemOption: Review_option_MutationInput.ITEM,
      reviewToUser,
      reviewToItem,
    },
  })

  const onSubmit = (data: duplicateReviewPayment) => {
    try {
      console.log('data:', data)
      resolve(
        async ({ mutation }) => {
          const req1 = mutation.createReview({
            data: {
              description: data.userDescription,
              rating: Number(data.userRating),
              option: data.userOption,
              reviewToUser: data.reviewToUser,
            },
          })
          const req2 = mutation.createReview({
            data: {
              description: data.itemDescription,
              rating: Number(data.itemRating),
              option: data.itemOption,
              reviewToItem: data.reviewToItem,
            },
          })
          return req1 && req2
        },
        {
          cachePolicy: 'no-store',
        }
      )
      toast({
        title: 'Success',
        description: 'Request sent successfully',
        success: true,
      })
    } catch {
      toast({
        title: 'Error',
        description: 'You alreary have a pending request for this item',
        error: true,
      })
    } finally {
      onClick()
    }
  }

  return (
    <Form {...reviewForm}>
      <form onSubmit={reviewForm.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <ReviewRenterContent reviewForm={reviewForm} />
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            type="button"
            size="lg"
            className="w-full lg:w-[108px]"
            onClick={onClick}
          >
            <Typography variant="h5">Cancel</Typography>
          </Button>
          <Button variant="default" type="submit" size="lg" className="w-full lg:w-[108px]">
            <Typography variant="h5">Submit</Typography>
          </Button>
        </div>
      </form>
    </Form>
  )
}
