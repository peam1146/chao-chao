import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Review_option_MutationInput, resolve } from '../../../../../../gqty'
import { ReviewPayment } from '../../types/types'
import { ReviewContent } from './ReviewContent'

type PaymentHistoryLessorReviewModalProps = {
  reviewToUser?: number
  onClick: () => void
}

export default function PaymentHistoryLessorReviewModal(
  props: PaymentHistoryLessorReviewModalProps
) {
  const { reviewToUser, onClick } = props

  const ReviewSchema = z.object({
    description: z.string(),
    rating: z.string(),
    option: z.enum(['ITEM', 'USER']),
    reviewToUser: z.number().int().optional(),
    reviewToItem: z.number().int().optional(),
  })

  const reviewForm = useForm<ReviewPayment>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      description: '',
      rating: '0',
      option: Review_option_MutationInput.USER,
      reviewToUser: reviewToUser,
    },
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data: ReviewPayment) => {
    setIsLoading(true)
    try {
      resolve(
        async ({ mutation }) => {
          const request = await mutation.createReview({
            data: {
              description: data.description,
              rating: Number(data.rating),
              option: data.option,
              reviewToUser: data.reviewToUser,
            },
          })
          return request
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
      setIsLoading(false)
      onClick()
    }
  }

  return (
    <Form {...reviewForm}>
      <form onSubmit={reviewForm.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <ReviewContent name="renter" reviewForm={reviewForm} />
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
          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full lg:w-[108px]"
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner className="flex justify-center" />
            ) : (
              <Typography variant="h5">Submit</Typography>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
