import { NextRequest, NextResponse, userAgent } from "next/server";
import { cookies } from "next/headers";
export function middleware(request: NextRequest) {
  //   获取cookie
  let isCookieHaveToken = request.cookies.has("token");

  if (isCookieHaveToken) {
    // redirect to dashboard
  }
}
