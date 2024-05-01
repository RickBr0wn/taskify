import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/board(.*)'])

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && !auth().orgId && isProtectedRoute(req)) {
    return auth().redirectToSignIn()
  }

  if (
    auth().userId &&
    !auth().orgId &&
    req.nextUrl.pathname !== '/select-org'
  ) {
    const url = new URL('/select-org', req.url)
    return NextResponse.rewrite(url)
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

// Path: middleware.ts
// Created at: 17:48:41 - 29/04/2024
// Language: Typescript
