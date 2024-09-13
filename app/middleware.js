
import { NextResponse } from "next/server";
import { verifyIdToken } from "../lib/firebaseAdmin";

export async function middleware(req) {
  const token = req.cookies.get("auth_token"); // Get the auth token from cookies
  
  // If token is missing, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  try {
    // Verify the token with Firebase Admin
    await verifyIdToken(token);
    return NextResponse.next(); // Allow access to the route
  } catch (error) {
    // If the token is invalid or expired, redirect to login page
    console.error("Token verification failed:", error);
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
}

// Define the routes that will be protected by middleware
export const config = {
  matcher: ["/profile", "/leaderboard", "/game", "/protected-route"],
};
