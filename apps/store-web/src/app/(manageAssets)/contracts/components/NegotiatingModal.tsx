import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import Typography from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'
import { UseQueryReturnValue } from '@gqty/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { CloudArrowUp, Paperclip, Trash } from '@phosphor-icons/react'
import { z } from 'zod'

import { GeneratedSchema, Maybe, Media, Renting, resolve } from '../../../../../gqty'

const validationSchema = z.object({
  insuranceFee: z.coerce.number().min(0, 'Insurance fee must be greater than 0').optional(),
  deliveryFee: z.coerce.number().min(0, 'Delivery fee must be greater than 0').optional(),
})

type ValidationSchema = z.infer<typeof validationSchema>

interface NegotiatingModalProps {
  setIsOpen: (value: boolean) => void
  oldFile?: Maybe<Media>
  request: Maybe<Renting>
  query: UseQueryReturnValue<GeneratedSchema>
}

export function NegotiatingModal(props: NegotiatingModalProps) {
  const { setIsOpen, oldFile, request, query } = props
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })
  const [file, setFile] = useState<File | Maybe<Media>>()

  useEffect(() => {
    setFile(oldFile)
  }, [oldFile])

  useEffect(() => {
    if (request) {
      form.setValue('insuranceFee', Number(request.insuranceFee))
      form.setValue('deliveryFee', Number(request.deliveryFee))
    }
  }, [request])

  const [isLoading, setIsLoading] = useState(false)
  const [isOldFileSelect, setIsOldFileSelect] = useState(true)

  async function onSubmit(data: z.infer<typeof validationSchema>) {
    setIsLoading(true)
    try {
      let fileId: number = Number(request?.file?.id)
      if (file instanceof File) {
        const data = new FormData()
        const token = Object.fromEntries(document.cookie.split('; ').map((c) => c.split('=')))
        data.append('file', file)
        await fetch(`https://api.chaochao.vishnu20.com/api/medias`, {
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
      } else if (isOldFileSelect) {
        fileId = Number(oldFile?.id)
      } else {
        toast({
          title: 'Error',
          description: 'No file selected. Please upload a file.',
          error: true,
        })
        setIsLoading(false)
        return
      }
      await resolve(
        async ({ mutation }) => {
          const user = mutation.updateRenting({
            data: {
              insuranceFee: Number(data.insuranceFee),
              deliveryFee: Number(data.deliveryFee),
              file: fileId,
            },
            id: Number(request?.id),
            autosave: true,
          })
          return user
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
      query.$refetch()
      setIsLoading(false)
      setIsOpen(false)
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        error: true,
      })
      setIsLoading(false)
    }
  }
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-fit w-full flex flex-col gap-4">
        <Typography variant="h4" fontWeight="bold" className="self-start">
          Please fill in the required information.
        </Typography>
        <div className="flex flex-row gap-4 w-full ">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="insuranceFee"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-1 ">
                      <Typography variant="h5" fontWeight="regular">
                        Insurance fee (฿)
                      </Typography>
                      <Input type="number" placeholder="฿0.00" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="deliveryFee"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-1">
                      <Typography variant="h5" fontWeight="regular">
                        Delivery fee (฿)
                      </Typography>
                      <Input type="number" placeholder="฿0.00" {...field} />
                    </div>
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
                <Typography variant="h6">{file.name ? file.name : oldFile?.filename}</Typography>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setIsOldFileSelect(false)
                  setFile(undefined)
                }}
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
        <div className="w-full flex flex-row justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button type="submit">
            {' '}
            {isLoading ? <Spinner className="flex justify-center" /> : 'Submit'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
