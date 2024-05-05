import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("session");

  const url = new URL(request.url);

  if (url.pathname === "/signup") {
    return NextResponse.next();
  }

  if (cookie?.value) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/",
};
