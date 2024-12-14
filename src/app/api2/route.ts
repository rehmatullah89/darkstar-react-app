import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ text: "Hello" });
}

// http://localhost:3000/api hit this route to print hello
