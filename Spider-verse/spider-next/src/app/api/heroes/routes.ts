import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/data`);
    const data = res;

    return NextResponse.json({ data });
  }
  catch (error) {
    return NextResponse.error();
  }
}
