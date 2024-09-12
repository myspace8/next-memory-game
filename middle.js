// /middleware.js
// import { NextResponse } from "next/server";
// import { getToken } from "firebase/auth";

// export async function middleware(req) {
//   const token = await getToken();
  
//   if (!token && req.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }
