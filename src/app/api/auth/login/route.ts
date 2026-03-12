import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    await new Promise((r) => setTimeout(r, 500));

    return NextResponse.json({ success: true, message: "Login successful" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
