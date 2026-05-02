"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Job = {
  title?: string;
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
    message: "",
  });

  const [cvLink, setCvLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cvLink.startsWith("http")) {
      alert("Please enter a valid CV or portfolio link");
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          linkedin: form.linkedin,
          message: form.message,
          position: job?.title || "General Application",
          cv: cvLink,
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

  // auto close
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  // SUCCESS UI
  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-8 text-center shadow-xl max-w-md w-full">
          <h2 className="text-xl font-bold mb-2">Application received 🎉</h2>
          <p className="text-muted-foreground">
            Thanks for applying. Our team will review your profile and contact
            you shortly.
          </p>
        </div>
      </div>
    );
  }

  // MAIN UI
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Apply to InnPro</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Send us your profile — we’re always looking for great people.
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

          {/* CV LINK */}
          <div className="space-y-2">
            <Input
              type="url"
              placeholder="CV / Portfolio Link * (Google Drive, Notion, Website...)"
              required
              value={cvLink}
              onChange={(e) => setCvLink(e.target.value)}
            />

            <p className="text-xs text-muted-foreground">
              Paste a public link to your CV or portfolio. (Google Drive → set
              “Anyone with the link can view”)
            </p>
          </div>

          {/* Message */}
          <Textarea
            placeholder="Tell us a bit about yourself (optional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          {/* Loading */}
          {loading && (
            <p className="text-sm text-blue-500 text-center">
              Submitting your application...
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
