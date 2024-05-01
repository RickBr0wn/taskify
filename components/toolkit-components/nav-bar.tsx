import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { DarkModeToggle } from './dark-mode-toggle'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="flex justify-end p-2 gap-2 fixed top-0 w-full">
      <DarkModeToggle />
      <SignedIn>
        <div className="flex gap-2">
          <OrganizationSwitcher
            hidePersonal
            afterSelectOrganizationUrl="/dashboard/:id"
            afterCreateOrganizationUrl="/dashboard/:id"
            afterLeaveOrganizationUrl="/select-org"
            appearance={{
              elements: {
                rootBox: {
                  border: '1px hsl(var(--border)) solid',
                  borderRadius: '4px',
                  padding: 0,
                },
              },
            }}
          />
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex gap-2">
          <Link href="/sign-in">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </div>
      </SignedOut>
    </nav>
  )
}

// Path: components/toolkit-components/nav-bar.tsx
// Created at: 17:55:18 - 01/05/2024
// Language: Typescript
