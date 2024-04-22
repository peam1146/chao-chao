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
      const reviewUserList = [
        ...review.map((r: string | Review) => (typeof r === 'object' ? r.id : r)),
        id,
      ]

      const rating = Math.ceil(
        // @ts-ignore
        (review.reduce((acc, r) => acc + (typeof r === 'object' ? r.rating : 0), 0) + doc.rating) /
          (review.length + 1)
      )

      await req.payload.update({
        collection: 'users',
        id: reviewToUserID,
        data: {
          review: reviewUserList,
          rating: Number(rating),
        },
      })
    } else {
      await req.payload.update({
        collection: 'users',
        id: reviewToUserID,
        data: {
          review: [id],
          rating: Number(doc.rating),
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
      const reviewItemList = [
        ...review.map((r: string | Review) => (typeof r === 'object' ? r.id : r)),
        id,
      ]

      const rating = Math.ceil(
        // @ts-ignore
        (review.reduce((acc, r) => acc + (typeof r === 'object' ? r.rating : 0), 0) + doc.rating) /
          (review.length + 1)
      )

      await req.payload.update({
        collection: 'items',
        id: reviewToItemID,
        data: {
          review: reviewItemList,
          rating: Number(rating),
        },
      })
    } else {
      await req.payload.update({
        collection: 'items',
        id: reviewToItemID,
        data: {
          review: [id],
          rating: Number(doc.rating),
        },
      })
    }
  }
}
