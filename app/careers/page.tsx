"use client";

import { motion } from "framer-motion";

import { MapPin, Clock, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { jobs } from "@/lib/data/jobs";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
      {/* JOB LIST */}
      <section className="py-20">
        <div className="container space-y-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.slug}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i}
              onClick={() => router.push(`/careers/${job.slug}`)}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 
        sm:flex-row sm:items-center sm:justify-between
        transition-all duration-300 
        hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 
        cursor-pointer"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground transition group-hover:text-primary">
                  {job.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
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

              {/* Button   */}
              <Link
                href={`/careers/${job.slug}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Button variant="cta">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Hear From Our Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Our Team Says
            </h2>
          </div>

          <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                <div className="mt-4 flex items-center gap-3">
                  {/* Avatar */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    {item.name.charAt(0)}
                  </div>

                  {/* Info */}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="surface-subtle py-20">
        <div className="container">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold">
              Why InnPro
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Benefits & Culture
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="rounded-lg border border-border bg-card p-5 text-sm"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {/* {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <ApplyModal onClose={() => setOpen(false)} />
        </div>
      )} */}
    </>
  );
}
