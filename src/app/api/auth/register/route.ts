import { NextResponse } from 'next/server';
import { BACKEND_URL } from '@/lib/config';

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  const response = await fetch(`${BACKEND_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
    credentials: 'include',
  });

  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}
