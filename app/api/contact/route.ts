// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  await fetch(
    "https://script.google.com/macros/s/AKfycbzdXRBWtCCQC1i0Wxz7m1LqYk-ekHReLre8xqzDohSkauyuOnOG4kMiEZSNkDCpuAMv/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  return NextResponse.json({ ok: true });
}
