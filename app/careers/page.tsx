"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { fadeUp } from "@/lib/animations";

import ApplyModal from "@/components/careers/ApplyModal";

const openings = [
  {
    title: "Senior Food Scientist",
    department: "R&D",
    location: "Netherlands",
    type: "Full-Time",
  },
  {
    title: "Process Engineer",
    department: "Manufacturing",
    location: "Netherlands",
    type: "Full-Time",
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Remote (EU)",
    type: "Full-Time",
  },
  {
    title: "Supply Chain Coordinator",
    department: "Operations",
    location: "Netherlands",
    type: "Full-Time",
  },
];

const benefits = [
  "401k",
  "401k Matching",
  "Vision / Dental Insurance",
  "Health Insurance",
  "Health Savings Account",
  "Life Insurance",
  "Paid Time Off (PTO)",
  "Referral Program",
];

const testimonials = [
  {
    name: "Kelsey B.",
    role: "Production Team",
    quote:
      "InnPro is a great place to work. The environment is friendly, positive, and supportive.",
  },
  {
    name: "Laura H.",
    role: "Operations",
    quote:
      "I’m proud to work at InnPro. The team is collaborative, and the work is meaningful.",
  },
  {
    name: "Hallie S.",
    role: "Finance",
    quote:
      "I’ve grown professionally every day. Being part of a fast-growing company is exciting.",
  },
  {
    name: "Gary W.",
    role: "Engineering",
    quote:
      "The leadership supports growth and innovation. It’s a great place to build a career.",
  },
  {
    name: "Deidra M.",
    role: "Engineering",
    quote:
      "I love working here. The team is supportive, collaborative, and genuinely positive.",
  },
  {
    name: "Bobby H.",
    role: "Operations",
    quote:
      "I’m proud to work at InnPro. The team is collaborative, and the work is meaningful.",
  },
  {
    name: "Harley T.",
    role: "Finance",
    quote:
      "I’ve grown professionally every day. Being part of a fast-growing company is exciting.",
  },
  {
    name: "Lucia A.",
    role: "Sale Solution",
    quote:
      "The leadership supports growth and innovation. It’s a great place to build a career.",
  },
];

export default function CareersPage() {
  const [open, setOpen] = useState(false);

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
              Careers
            </p>

            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Build the Future of Plant Protein
            </h1>

            <p className="text-lg text-primary-foreground/80">
              Join a team solving real problems in food technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="py-20">
        <div className="container space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.title}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 sm:flex-row sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {job.title}
                </h3>

                <div className="mt-1 flex gap-3 text-sm text-muted-foreground">
                  <span className="bg-secondary px-2 py-0.5 text-xs text-secondary-foreground rounded">
                    {job.department}
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {job.type}
                  </span>
                </div>
              </div>

              <Button variant="cta" onClick={() => setOpen(true)}>
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="text-sm text-muted-foreground">“{item.quote}”</p>

              <div className="mt-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="surface-subtle py-20">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b}
              className="rounded-lg border border-border bg-card p-5 text-sm"
            >
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {open && <ApplyModal onClose={() => setOpen(false)} />}
    </>
  );
}
