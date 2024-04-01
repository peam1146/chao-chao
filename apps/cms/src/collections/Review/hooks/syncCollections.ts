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

      await req.payload.update({
        collection: 'users',
        id: reviewToUserID,
        data: {
          review: reviewUserList,
        },
      })
    } else {
      await req.payload.update({
        collection: 'users',
        id: reviewToUserID,
        data: {
          review: [id],
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

      await req.payload.update({
        collection: 'items',
        id: reviewToItemID,
        data: {
          review: reviewItemList,
        },
      })
    } else {
      await req.payload.update({
        collection: 'items',
        id: reviewToItemID,
        data: {
          review: [id],
        },
      })
    }
  }
}
