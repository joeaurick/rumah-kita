import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // List of pages that are under development
  const underDevelopmentPaths = [
    "/rumah-dijual",
    "/rumah-disewa",
    "/apartemen-dijual",
    "/apartemen-disewa",
    "/search",
    "/promo",
    "/download",
    "/jual",
    "/login",
    "/panduan",
    "/tips-investasi",
  ]

  // Check if the path is under development
  const isUnderDevelopment = underDevelopmentPaths.some((path) => pathname.startsWith(path))

  if (isUnderDevelopment) {
    // Redirect to a "coming soon" page instead of 404
    const url = request.nextUrl.clone()
    url.pathname = "/coming-soon"
    url.searchParams.set("from", pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
