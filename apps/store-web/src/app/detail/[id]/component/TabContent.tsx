import Typography from '@/components/ui/typography'
import Rating from '@mui/material/Rating'
import Image from 'next/image'

export default function TabContent({ reviews }: { reviews: Array<Object> }) {
  return (
    <div className="flex flex-col gap-y-4">
      {reviews.map((review) => (
        <div className="flex flex-col gap-y-4" key={review.id}>
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
                <Typography variant="tiny" className="text-light flex">
                  <Rating name="read-only" size="small" value={review.rating} readOnly />
                  {review.rating.toFixed(1)}
                </Typography>
              </div>
              <Typography variant="h6">{review.detail}</Typography>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}
