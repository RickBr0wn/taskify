import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp path="/sign-up" forceRedirectUrl="/select-org" />
}

// Path: app/sign-up/[[...sign-up]]/page.tsx
// Created at: 09:47:36 - 30/04/2024
// Language: Typescript
