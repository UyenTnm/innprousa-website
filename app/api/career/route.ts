export async function POST(req: Request) {
  const data = await req.json();

  await fetch(
    "https://script.google.com/macros/s/AKfycbySMwnLTjNvwkuUFqVXgSx2l1G75e6g4pWPE-GEjSBdkmPsgnw9X_pT_2hztdLKPaVT/exec",
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
