import { ReactNode } from 'react'

type OrganizationDashboardLayoutProps = { children: ReactNode }

export default function OrganizationDashboardLayout({
  children,
}: OrganizationDashboardLayoutProps) {
  return <div>{children}</div>
}

// Path: app/(organization-dashboard)/layout.tsx
// Created at: 18:52:31 - 29/04/2024
// Language: Typescript
