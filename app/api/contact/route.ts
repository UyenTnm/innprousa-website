// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  await fetch(
    "https://script.google.com/macros/s/AKfycby4hANKKFg6Qcgk3X2oXER-DvS1l2PZWwUBq_JDWWFBcqBFFemBHTb4xEFfThH3kHay/exec",
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
