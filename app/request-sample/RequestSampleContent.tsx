"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { fadeUp } from "@/lib/animations";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  product: string;
  quantity: string;
  application: string;
  message: string;
};

export default function RequestSampleContent() {
  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormType>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    application: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          ...form,
          type: "sample",
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
      <section className="relative min-h-[65vh] flex items-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/request-sample.webp"
            alt="Request Sample"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm opacity-80">
            Product Samples
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Request a Sample
          </h1>

          <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl">
            Tell us about your application and protein needs. Our team will
            recommend suitable ingredients and prepare sample materials for
            evaluation.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="container mb-14">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-secondary font-medium">
              Sample Request Form
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Tell Us About Your Product Requirements
            </h2>

            <p className="m-4 text-muted-foreground leading-relaxed">
              Share your application goals, preferred protein solutions, and
              estimated quantities. Our specialists will recommend suitable
              ingredients and arrange sample delivery for testing and
              evaluation.
            </p>
          </div>
        </div>
        <div className="container grid lg:grid-cols-3 gap-12 items-start">
          {/* FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="border rounded-2xl p-12 text-center">
                <CheckCircle className="mx-auto h-14 w-14 text-green-500" />

                <h2 className="mt-6 text-3xl font-bold">
                  Sample Request Submitted
                </h2>

                <p className="mt-4 text-muted-foreground">
                  Our team will review your request and contact you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border rounded-2xl p-8 md:p-10 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                  />

                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Business Email"
                    value={form.email}
                    onChange={handleChange}
                  />

                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    name="product"
                    placeholder="Product Interested In"
                    value={form.product}
                    onChange={handleChange}
                  />

                  <Input
                    name="quantity"
                    placeholder="Estimated Quantity"
                    value={form.quantity}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  name="application"
                  placeholder="Application Type (Beverage, Bakery, Snacks...)"
                  value={form.application}
                  onChange={handleChange}
                />

                <Textarea
                  name="message"
                  placeholder="Tell us more about your product goals or sample requirements..."
                  value={form.message}
                  onChange={handleChange}
                  className="min-h-[140px]"
                />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Request Sample"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  info@innprousa.com
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  +1 605 206 3467
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  United States
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <h4 className="font-semibold mb-3">What Happens Next?</h4>

              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Our specialists review your request</li>
                <li>• We recommend suitable ingredients</li>
                <li>• Samples are prepared and shipped</li>
                <li>• Technical support is provided</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
