// import { isTokenExpired } from "./utils/isTokenExpired";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  const mainURL = new URL("/", request.url);

  // // Verificar se o token está expirado
  // if (token && isTokenExpired(token)) {
  //   return NextResponse.redirect(signInURL);
  // }

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(mainURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
