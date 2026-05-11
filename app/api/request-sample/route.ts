import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzB-BjLFWtjLo6EF5txTM6GH2EItTWHYkWAWFfwWoMffAMtaDdEW39wl4efC2u49bbb/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Gửi sang Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Đọc response dưới dạng text trước
    const text = await response.text();

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      console.error("Apps Script returned invalid JSON:", text);

      return NextResponse.json(
        {
          success: false,
          error: "Google Apps Script did not return valid JSON.",
        },
        { status: 500 },
      );
    }

    // Trả kết quả về frontend
    return NextResponse.json(result);
  } catch (error) {
    console.error("Request Sample API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit request.",
      },
      { status: 500 },
    );
  }
}
