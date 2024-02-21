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
            <div className="grid gap-1">
              {title &&
                (success ? (
                  <ToastTitle className="text-available flex gap-2 items-center">
                    <CheckCircle weight="fill" className="w-4 h-4 " />
                    {title}
                  </ToastTitle>
                ) : error ? (
                  <ToastTitle className="text-unavailable flex gap-2 items-center">
                    <Warning weight="fill" className="w-4 h-4" />
                    {title}
                  </ToastTitle>
                ) : (
                  <ToastTitle>{title}</ToastTitle>
                ))}
              {description && <ToastDescription>{description}</ToastDescription>}
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
