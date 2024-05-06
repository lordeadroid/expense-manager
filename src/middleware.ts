import { NextRequest, NextResponse } from "next/server";
import { PATH } from "./constants";

export default async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("session");
  const session = cookie?.value;

  const url = new URL(request.url);
  const urlPath = url.pathname;

  if ((urlPath === PATH.login || urlPath === PATH.signup) && session) {
    return NextResponse.redirect(new URL(PATH.home, request.url));
  }

  if (urlPath === PATH.home && !session) {
    return NextResponse.redirect(new URL(PATH.login, request.url));
  }

  return NextResponse.next();
}
