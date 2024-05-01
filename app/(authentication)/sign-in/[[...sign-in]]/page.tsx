import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn path="/sign-in" forceRedirectUrl={'/select-org'} />
}

// Path: app/sign-in/[[...sign-in]]/page.tsx
// Created at: 09:48:14 - 30/04/2024
// Language: Typescript
