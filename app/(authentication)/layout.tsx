import { ReactNode } from 'react'

type AuthenticationLayoutProps = { children: ReactNode }

export default function AuthenticationLayout({
  children,
}: AuthenticationLayoutProps) {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  )
}

// Path: app/(authentication)/layout.tsx
// Created at: 09:52:43 - 30/04/2024
// Language: Typescript
