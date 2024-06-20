import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await axios.get(`${process.env.API_URL}`);
    const data = res.data;

    return NextResponse.json({ data });
  }
  catch (error) {
    return NextResponse.error();
  }
}
