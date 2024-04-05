import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { paintings } from '@/mocks/painting';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  console.log('search param', searchParams);

  return new NextResponse(JSON.stringify(paintings[0]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
