import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default async function Page() {
  const user = await currentUser()
  const { userId, orgId } = auth()

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-6xl">🔓</h1>
      <h1 className="font-red-500 text-xl mb-6">{`/dashboard/${orgId}`}</h1>
      <div className="text-center">
        <p className="text-2xl font-bold mb-4">{user?.fullName}</p>
        <p className="font-extralight text-slate-600">{userId}</p>
        <p className="font-light text-slate-600">{orgId}</p>
      </div>
      <Link href="/">
        <Button variant="default" className="mt-6 min-w-64">
          HOME
        </Button>
      </Link>
    </div>
  )
}

// Path: app/(organization-dashboard)/organization/organizationId/page.tsx
// Created at: 10:23:36 - 30/04/2024
// Language: Typescript
