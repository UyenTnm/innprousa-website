"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const certifications = [
  "GFSI Certified",
  "Allergen-Free Facility",
  "ISO 22000 Certified",
  "Halal & Kosher Certified",
  "Full Traceability",
  "Organic Certified",
];

export default function ManufacturingSection() {
  return (
    <section className="surface-subtle py-20 md:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-xl"
          >
            {/* BADGE */}
            <p className="inline-block mb-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Manufacturing
            </p>

            {/* TITLE */}
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              Purpose-Built for Plant Protein
            </h2>

            {/* DESC */}
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Designed to support scalable plant protein manufacturing with
              consistent ingredient quality, traceability, and formulation
              reliability.
            </p>

            {/* CERTIFICATIONS */}
            <ul className="grid gap-3 sm:grid-cols-2 mb-8">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border"
                >
                  <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="cta" asChild>
              <Link href="/request-sample">Request Samples & Specs</Link>
            </Button>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            {/* VIDEO */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/images/about/manufacturing.webp"
              className="w-full h-full object-cover"
            >
              <source src="/videos/factory-demo.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm">
              Dong Nai Manufacturing Facility
            </div>
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
