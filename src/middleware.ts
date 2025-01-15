import { auth, BASE_PATH } from '@/auth';
import { MiddlewareConfig, NextResponse } from "next/server";

export const config:MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

export default auth((req) => {
  const reqUrl = new URL(req.url);
  
  if(!req.auth && reqUrl.pathname !== '/'){
    return NextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`,
        req.url
      )
    )
  }
})
