import { auth } from "@/auth"
import { NextResponse } from 'next/server'



export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth


  if (nextUrl.pathname === "/dashboard") {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/", nextUrl.origin))
    }
    return NextResponse.next()
  }

  if (nextUrl.pathname === "/" || nextUrl.pathname === "/onboard") {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", nextUrl.origin))
    }
    return NextResponse.next()
  }
  return NextResponse.next()
})

export const config = {
  matcher: ['/', '/dashboard', '/onboard']
}