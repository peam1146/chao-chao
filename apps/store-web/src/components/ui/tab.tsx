'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import * as TabPrimitive from '@radix-ui/react-tabs'

const Tab = TabPrimitive.Root

const TabList = React.forwardRef<
  React.ElementRef<typeof TabPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
))
TabList.displayName = TabPrimitive.List.displayName

const TabTrigger = React.forwardRef<
  React.ElementRef<typeof TabPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className
    )}
    {...props}
  />
))
TabTrigger.displayName = TabPrimitive.Trigger.displayName

const TabContent = React.forwardRef<
  React.ElementRef<typeof TabPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabContent.displayName = TabPrimitive.Content.displayName

export { Tab, TabList, TabTrigger, TabContent }
