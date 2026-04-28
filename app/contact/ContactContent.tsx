"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function ContactContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "contact";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  // reset form sau khi submit
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          role: "",
          message: "",
        });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.firstName + " " + form.lastName,
          email: form.email,
          phone: "",
          company: form.company,
          role: form.role,
          message: form.message,
          type: type, // 🔥 QUAN TRỌNG
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

  return (
    <>
      {/* HERO */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              {type === "sample" ? "Request Sample" : "Contact"}
            </p>

            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              {type === "sample" ? "Request a Sample" : "Contact Us"}
            </h1>

            <p className="text-lg text-primary-foreground/80">
              {type === "sample"
                ? "Tell us what sample you need"
                : "Tell us about your project"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="text-center p-16 border rounded-lg">
                <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
                <h2 className="text-2xl font-bold">Thank You</h2>
                <p className="text-muted-foreground mt-2">
                  We’ll contact you within 24 hours.
                </p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Form will reset automatically...
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 border rounded-lg p-8"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                  <Input
                    name="company"
                    placeholder="Company"
                    required
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  name="role"
                  placeholder="Your Role"
                  value={form.role}
                  onChange={handleChange}
                />

                <Textarea
                  name="message"
                  placeholder={
                    type === "sample"
                      ? "What sample are you looking for?"
                      : "Tell us about your project..."
                  }
                  value={form.message}
                  onChange={handleChange}
                />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading
                    ? "Sending..."
                    : type === "sample"
                      ? "Request Sample"
                      : "Submit"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* INFO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <h3 className="font-semibold mb-3">Contact Info</h3>

              <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                  <Mail className="w-4 h-4" />
                  info@innprousa.com
                </div>

                <div className="flex gap-2">
                  <Phone className="w-4 h-4" />
                  +1 605 206 3467
                </div>

                <div className="flex gap-2">
                  <MapPin className="w-4 h-4" />
                  United States
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
