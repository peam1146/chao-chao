'use client'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { CloudArrowUp, Paperclip, Trash } from '@phosphor-icons/react'
import { z } from 'zod'

import { RentingUpdate_status_MutationInput, resolve } from '../../../../../gqty'

interface RequestAcceptModalProps {
  onClose: (open: boolean) => void
  requestId?: number
  refetch: () => void
}

const submitAcceptRequestSchema = z.object({
  insuranceFee: z.string().min(0, {
    message: 'Insurance Fee is required.',
  }),
  deliveryFee: z.string().min(0, {
    message: 'Delivery Fee is required.',
  }),
})

export function RequestAcceptModal({ onClose, requestId, refetch }: RequestAcceptModalProps) {
  const form = useForm<z.infer<typeof submitAcceptRequestSchema>>({
    resolver: zodResolver(submitAcceptRequestSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const [file, setFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const selectedFile = event.dataTransfer.files[0]
    if (selectedFile) {
      if (fileInputRef.current) {
        fileInputRef.current.files = event.dataTransfer.files
        setFile(selectedFile)
      }
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      setFile(file)
      if (!file) return
    }
  }

  async function onSubmit(data: z.infer<typeof submitAcceptRequestSchema>) {
    setIsLoading(true)

    try {
      let fileId: number
      if (file) {
        const data = new FormData()
        const token = Object.fromEntries(document.cookie.split('; ').map((c) => c.split('=')))
        data.append('file', file)
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/medias`, {
          method: 'POST',
          body: data,
          headers: {
            Authorization: `JWT ${token['payload-token']}`,
          },
        })
          .then((response) => response.json())
          .then(async (result) => {
            fileId = result.doc.id
          })
          .catch((error) => console.error(error))
      }

      await resolve(
        async ({ mutation }) => {
          const request = mutation.updateRenting({
            data: {
              insuranceFee: Number(data.insuranceFee),
              deliveryFee: Number(data.deliveryFee),
              file: fileId,
              status: RentingUpdate_status_MutationInput.PROCESSING,
            },
            id: Number(requestId),
            autosave: true,
          })
          return request
        },
        {
          cachePolicy: 'no-store',
        }
      )
      toast({
        title: 'Success',
        description: 'Accept request successfully',
        success: true,
      })
      refetch()
      setIsLoading(false)
      onClose(false)
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        error: true,
      })
      setIsLoading(false)
    }
  }

  const FileUpload = () => {
    return (
      <div
        className="flex items-center justify-center w-full h-fit border border-primary border-dashed rounded-md px-3 py-10"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-row items-center justify-center gap-2 max-lg:flex-col">
          <div className="flex flex-row gap-2">
            <CloudArrowUp className="w-5 h-5 text-primary" />
            <Typography variant="h5" className="text-primary">
              Drag a file here or
            </Typography>
          </div>
          <input type="file" accept=".pdf" hidden ref={fileInputRef} onChange={handleFileChange} />
          <Button onClick={handleButtonClick}>Click here to upload file</Button>
        </div>
      </div>
    )
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 break-words">
        <div className="flex flex-col gap-3">
          <Typography variant="h4" fontWeight="bold">
            Please fill in the required information.
          </Typography>
          <div className="flex max-lg:flex-col gap-4 w-full">
            <div className="w-1/2 flex flex-col gap-1">
              <FormField
                control={form.control}
                name="insuranceFee"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="h5">Insurance fee</Typography>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="฿0.00"
                        error={!!form.formState.errors.insuranceFee}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-1">
              <FormField
                control={form.control}
                name="deliveryFee"
                render={({ field }) => (
                  <FormItem>
                    <Typography variant="h5">Delivery fee</Typography>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="฿0.00"
                        error={!!form.formState.errors.deliveryFee}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="h5">Contract file</Typography>
            {!file ? (
              <FileUpload />
            ) : (
              <div className="flex px-3 py-2 justify-between rounded-lg border border-muted-foreground items-center">
                <div className="flex gap-1">
                  <Paperclip className="w-4 h-4" />
                  <Typography variant="h6">{file.name}</Typography>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setFile(null)
                  }}
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button
            variant="outline"
            type="button"
            size="lg"
            className="w-full lg:w-[108px]"
            onClick={() => onClose(false)}
          >
            <Typography variant="h5">Cancel</Typography>
          </Button>
          <Button variant="default" type="submit" size="lg" className="w-full lg:w-[108px] ">
            <Typography variant="h5">
              {isLoading ? <Spinner className="flex justify-center" /> : 'Submit'}
            </Typography>
          </Button>
        </div>
      </form>
    </Form>
  )
}
