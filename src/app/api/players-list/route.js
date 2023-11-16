import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  const players = await kv.json.get('players');

  return NextResponse.json(players);
}