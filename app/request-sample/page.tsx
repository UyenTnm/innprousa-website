"use client";

import { Suspense } from "react";
import RequestSampleContent from "./RequestSampleContent";

export default function RequestSamplePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RequestSampleContent />
    </Suspense>
  );
}
