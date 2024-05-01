import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("session");

  if (cookie?.value) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/login", request.url));
}
