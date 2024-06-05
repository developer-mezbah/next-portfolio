import { NextResponse } from "next/server";
export const maxDuration = 300;

// Logout Functionality
export async function GET(req, res) {
    const expireDuration = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const response = NextResponse.redirect(new URL('/', req.url))
    response.cookies.set('token', "", {expires: expireDuration})
    return response
  }