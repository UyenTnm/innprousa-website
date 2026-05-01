export async function POST(req: Request) {
  const data = await req.json();

  await fetch(
    "https://script.google.com/macros/s/AKfycbwwlEM4JgtKg_8WUtBHownlsISLxPYEUkGhMXK1QsP9VUqVzIYgsDVA8afpbmTw9Gya/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        type: "career",
      }),
    },
  );

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
