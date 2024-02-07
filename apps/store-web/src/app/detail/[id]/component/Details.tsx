import Typography from '@/components/ui/typography'

export default function Details({ details }: { details: string }) {
  return (
    <div className="h-fit w-full p-6 grid gap-4">
      <Typography variant="h4" fontWeight="bold">
        Details
      </Typography>
      <Typography variant="h6">{details}</Typography>
    </div>
  )
}
