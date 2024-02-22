'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { CheckCircle, Warning } from '@phosphor-icons/react'

import Typography from './typography'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        success = false,
        error = false,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="h-fit w-85 flex flex-col">
              {title &&
                (success ? (
                  <ToastTitle className="text-available flex gap-2 items-center">
                    <CheckCircle weight="fill" className="w-4 h-4 " />
                    <Typography variant="h6" fontWeight="bold">
                      {title}
                    </Typography>
                  </ToastTitle>
                ) : error ? (
                  <ToastTitle className="text-unavailable flex gap-2 items-center">
                    <Warning weight="fill" className="w-4 h-4" />
                    <Typography variant="h6" fontWeight="bold">
                      {title}
                    </Typography>
                  </ToastTitle>
                ) : (
                  <ToastTitle>
                    <Typography variant="h6" fontWeight="bold">
                      {title}
                    </Typography>
                  </ToastTitle>
                ))}
              {description && (
                <ToastDescription>
                  <Typography variant="h6">{description}</Typography>
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
