import { OrganizationList } from '@clerk/nextjs'

export default function SelectOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/dashboard/:id"
      afterCreateOrganizationUrl="/dashboard/:id"
    />
  )
}

// Path: app/(authentication)/select-org/[[...select-org]]/page.tsx
// Created at: 17:48:32 - 01/05/2024
// Language: Typescript
