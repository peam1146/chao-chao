'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { type VariantProps, cva } from 'class-variance-authority'

const TabsTriggerVariants = cva(
  `h-full px-4 inline-flex items-center justify-center whitespace-nowrap text-light transition-all
focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50
data-[state=active]:font-bold data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary`,
  {
    variants: {
      size: {
        default: 'py-3 font-size-h5',
        sm: 'py-2 font-size-h4',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>,
    VariantProps<typeof TabsTriggerVariants> {}

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn('inline-flex h-fit items-center justify-center bg-transparent p-1', className)}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof TabsTriggerVariants>
>(({ className, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(TabsTriggerVariants({ size, className }))}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
