import type { AfterChangeHook } from 'payload/dist/collections/config/types'

import type { Item, Review, User } from '../../../payload-types'

export const syncCollections: AfterChangeHook<Review> = async ({ req, doc }) => {
  const { reviewToItem, reviewToUser, option, id } = doc

  if (option === 'USER') {
    const reviewToUserID = typeof reviewToUser === 'object' ? reviewToUser.id : reviewToUser

    const userReview: User = await req.payload.findByID({
      collection: 'users',
      id: reviewToUserID,
    })

    const { review } = userReview

    if (review && review.length > 0) {
      const reviewUserList = [...review.map((r) => (typeof r === 'object' ? r.id : r)), id]
      const rating = Math.floor(
        (review.reduce((acc, r: Review) => acc + r.rating, 0) + doc.rating) / (review.length + 1)
      )

      await req.payload.update({
        collection: 'users',
        id: reviewToUserID,
        data: {
          review: reviewUserList,
          rating: rating,
        },
      })
    } else {
      await req.payload.update({
        collection: 'users',
        id: reviewToUserID,
        data: {
          review: [id],
          rating: doc.rating,
        },
      })
    }
  }
  if (option === 'ITEM') {
    const reviewToItemID = typeof reviewToItem === 'object' ? reviewToItem.id : reviewToItem

    const itemReview: Item = await req.payload.findByID({
      collection: 'items',
      id: reviewToItemID,
    })

    const { review } = itemReview
    if (review && review.length > 0) {
      const reviewItemList = [...review.map((r) => (typeof r === 'object' ? r.id : r)), id]

      const rating = Math.floor(
        (review.reduce((acc, r: Review) => acc + r.rating, 0) + doc.rating) / (review.length + 1)
      )

      await req.payload.update({
        collection: 'items',
        id: reviewToItemID,
        data: {
          review: reviewItemList,
          rating: rating,
        },
      })
    } else {
      await req.payload.update({
        collection: 'items',
        id: reviewToItemID,
        data: {
          review: [id],
          rating: doc.rating,
        },
      })
    }
  }
}
