'use client'

import { TooltipProvider } from '@radix-ui/react-tooltip'
import { useTheme } from 'next-themes'
import { ReactNode } from 'react'
import ClerkProvider from './clerk-provider'
import { Toaster } from '~/components/ui/toaster'

type ProvidersProps = { children: ReactNode }

export default function Providers({ children }: ProvidersProps) {
  const { resolvedTheme } = useTheme()

  return (
    <ClerkProvider theme={resolvedTheme as string}>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster />
    </ClerkProvider>
  )
}

// Path: components/toolkit-components/providers.tsx
// Created at: 17:29:55 - 29/04/2024
// Language: Typescript
