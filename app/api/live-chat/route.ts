import { NextResponse } from "next/server";

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbyQFXEGqu7G46zLpXWkOQq-EsN0GZCb_1cRXVGJ9xjbxDxMlovQRtdJMKDz_1Q5DMh8fQ/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    });

    const data = await response.text();

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
