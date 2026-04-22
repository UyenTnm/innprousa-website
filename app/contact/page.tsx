"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

import { fadeUp } from "@/lib/animations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: sau này call API
    setSubmitted(true);
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
            <p className="mb-2 text-sm font-semibold uppercase text-accent-medium">
              Contact
            </p>

            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Request a Sample
            </h1>

            <p className="text-lg text-primary-foreground/80">
              Tell us about your project and we’ll send relevant samples.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-3">
          {/* FORM */}
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
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 border rounded-lg p-8"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" required />
                  <Input placeholder="Last Name" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email" required />
                  <Input placeholder="Company" required />
                </div>

                <Input placeholder="Your Role" />

                <Textarea placeholder="Tell us about your project..." />

                <Button type="submit" className="w-full">
                  Submit Request
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
                  sales@innpro.com
                </div>

                <div className="flex gap-2">
                  <Phone className="w-4 h-4" />
                  +1 555 234 5678
                </div>

                <div className="flex gap-2">
                  <MapPin className="w-4 h-4" />
                  Netherlands
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
