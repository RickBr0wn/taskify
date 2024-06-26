import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default async function Home() {
  return (
    <main className="mx-auto max-w-sm sm:max-w-xl text-center mt-24">
      <p className="text-lg font-medium leading-8 text-primary">
        Effortless Task Management for Teams
      </p>
      <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-foreground">
        Empower Your Workflow with{' '}
        <span className="text-primary font-extrabold">Taskify</span>
      </h1>
      <p className="mt-3 text-md leading-relaxed text-muted-foreground">
        Taskify simplifies team collaboration and task organization, providing a
        user-friendly platform for managing projects of any size. From ideation
        to completion, Taskify empowers you to stay organized, prioritize tasks,
        and track progress in real-time. Experience seamless project-management
        like never before with Taskify. Get started today and take your projects
        to new heights.
      </p>

      <div className="flex flex-col gap-2 mt-6">
        <Link href="/sign-in">
          <Button variant="default" className="text-md min-h-12 w-44">
            Get started for free
          </Button>
        </Link>
      </div>
    </main>
  )
}

// Path: app/page.tsx
// Language: Typescript
// Framework: React/Next.js
