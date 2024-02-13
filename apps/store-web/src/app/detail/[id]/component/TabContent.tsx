import { Rating } from '@/app/components/rating'
import Typography from '@/components/ui/typography'
import Image, { StaticImageData } from 'next/image'

export default function TabContent({
  reviews,
}: {
  reviews: (
    | {
        image: StaticImageData
        name: string
        date: string
        rating: number
        detail: string
      }
    | undefined
  )[]
}) {
  return (
    <div className="flex flex-col gap-y-4">
      {reviews.map(
        (review, index) =>
          review != undefined && (
            <div className="flex flex-col gap-y-4" key={index}>
              <div className="flex flex-row gap-x-2">
                <Image
                  src={review.image}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                  className="rounded-full h-[50px]"
                />
                <div className="flex flex-col gap-y-2">
                  <div>
                    <div className="flex gap-x-2">
                      <Typography variant="h6">{review.name}</Typography>
                      <Typography variant="tiny" className="text-light">
                        {review.date}
                      </Typography>
                    </div>
                    <div className="text-light flex ">
                      <Rating size="small" value={review.rating} />
                      <Typography variant="tiny" className="pt-0.5">
                        {review.rating.toFixed(1)}
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="h6">{review.detail}</Typography>
                </div>
              </div>
              <hr />
            </div>
          )
      )}
    </div>
  )
}
