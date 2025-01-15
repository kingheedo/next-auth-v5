import { auth } from "@/auth";
import { NextResponse } from "next/server";

// export const GET = auth(async(req) => {
//   return NextResponse.json({user: req.auth?.user?.name})
// })

export const GET = auth(async({auth}) => {
  return NextResponse.json({user: auth?.user?.name})
})