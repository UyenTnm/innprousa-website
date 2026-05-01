"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Job = {
  title: string;
};

export default function ApplyModal({
  job,
  onClose,
}: {
  job?: Job;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    company: "",
    message: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ✅ validate file
  const handleFileChange = (file: File | null) => {
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF or DOC files are allowed");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("File must be under 5MB");
      return;
    }

    setFile(file);
  };

  // ✅ upload Cloudinary
  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "innpro-cv-upload");
    formData.append("resource_type", "raw");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkyg9lnnd/raw/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    console.log("Cloudinary response:", data);

    if (!data.secure_url) {
      console.error("Cloudinary FULL ERROR:", data); // 👈 QUAN TRỌNG
      throw new Error(data.error?.message || "Upload failed");
    }

    const url = data.secure_url.replace("/upload/", "/upload/fl_attachment/");
    return url;
  };

  // submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload your CV");
      return;
    }

    setLoading(true);

    try {
      // 👉 upload CV trước
      const cvUrl = await uploadToCloudinary(file);

      // 👉 gửi data
      await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          position: job?.title,
          cv: cvUrl,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ✅ auto close (optional nhưng xịn)
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  // ✅ SUCCESS UI
  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 text-center shadow-xl max-w-md w-full">
          <h2 className="text-xl font-bold mb-2">Application received 🎉</h2>

          <p className="text-muted-foreground">
            Our team will review your profile and contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  // ✅ MAIN UI
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            Apply for {job?.title || "this position"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Takes less than 1 minute. Our team will review and get back to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Full Name *"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <Input
              type="email"
              placeholder="Email *"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Phone */}
          <Input
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          {/* LinkedIn */}
          <Input
            placeholder="LinkedIn (optional)"
            value={form.linkedin}
            onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
          />

          {/* Company */}
          <Input
            placeholder="Current Company (optional)"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />

          {/* Message */}
          <Textarea
            placeholder="What interests you about this role? (optional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          {/* Upload */}
          <div className="border-2 border-dashed rounded-xl p-5 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Upload your CV (PDF, DOC)
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
            />

            {file ? (
              <p className="text-sm mt-2 text-green-600">
                ✓ {file.name} ready to upload
              </p>
            ) : (
              <p className="text-sm mt-2 text-muted-foreground">
                No file selected
              </p>
            )}
          </div>

          {/* Loading hint */}
          {loading && (
            <p className="text-sm text-blue-500 text-center">
              Uploading CV & submitting...
            </p>
          )}

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-11 text-base font-semibold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Apply Now"}
          </Button>
        </form>
      </div>
    </div>
  );
}
