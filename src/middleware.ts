import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
const protectedRoutes = ['/profile']
const publicRoutes = ['/auth', '/']

export default async function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const jwt_token = request.cookies.get('jwt')?.value;

  if (isProtectedRoute && !jwt_token) {
    return NextResponse.redirect(new URL('/auth', request.nextUrl))
  }

  if (
    isPublicRoute &&
    jwt_token &&
    !request.nextUrl.pathname.startsWith('/profile')
  ) {
    return NextResponse.redirect(new URL('/profile', request.nextUrl))
  }

  return NextResponse.next();
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}