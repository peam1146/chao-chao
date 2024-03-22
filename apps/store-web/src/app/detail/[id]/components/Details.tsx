import Typography from '@/components/ui/typography'

import { Maybe } from '../../../../../gqty'

export default function Details({ details }: { details: Maybe<string | undefined> }) {
  return (
    <div className="h-fit w-full p-6 grid gap-4 bg-card rounded-2xl">
      <Typography variant="h4" fontWeight="bold">
        Details
      </Typography>
      <Typography variant="h6">{details ? details : 'No details'}</Typography>
    </div>
  )
}
