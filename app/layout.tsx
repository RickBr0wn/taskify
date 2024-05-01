import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import { cn } from '~/lib/utils'
import ScreenSizeIndicator from '~/components/toolkit-components/screen-size-indicator'
import NavBar from '~/components/toolkit-components/nav-bar'
import { siteConfigData } from '~/config/site'
import { ReactNode } from 'react'
import Providers from '~/components/toolkit-components/providers'
import { ThemeProvider } from '~/components/toolkit-components/theme-provider'

// const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: siteConfigData.name,
    template: `%s | ${siteConfigData.name}`,
  },
  description: siteConfigData.description,
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <ScreenSizeIndicator />
            <NavBar />
            <div>{children}</div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}

// Path: app/layout.tsx
// Created at: 17:26:54 - 29/04/2024
// Language: Typescript
