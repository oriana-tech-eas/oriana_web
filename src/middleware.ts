import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) { 
  const { pathname } = request.nextUrl;

  if (pathname === '/login' || pathname === '/register') {
    const authServiceUrl = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL;
    
    if (!authServiceUrl) {
      console.error('Authentication service URL is not defined');
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    const redirectUrl = `${authServiceUrl}${pathname}`;
    
    return NextResponse.redirect(redirectUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/register'],
};