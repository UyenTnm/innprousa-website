"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const certifications = [
  "ISO 22000 Certified",
  "FSSC 22000 Compliant",
  "Allergen-Free Facility",
  "Halal & Kosher Ready",
  "Automated QC Systems",
  "Full Traceability",
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
            <p className="inline-block mb-3 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Manufacturing
            </p>

            {/* TITLE */}
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              Purpose-Built for Plant Protein
            </h2>

            {/* DESC */}
            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Our facility is designed exclusively for plant-based protein
              processing — eliminating cross-contamination risks and ensuring
              consistent, high-performance output at scale.
            </p>

            <div className="flex gap-6 text-sm mb-6">
              <div>
                <p className="font-bold text-primary text-lg">50K MT</p>
                <p className="text-muted-foreground">Annual Capacity</p>
              </div>
              <div>
                <p className="font-bold text-primary text-lg">24/7</p>
                <p className="text-muted-foreground">Production</p>
              </div>
              <div>
                <p className="font-bold text-primary text-lg">100%</p>
                <p className="text-muted-foreground">Traceability</p>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <ul className="grid gap-3 sm:grid-cols-2 mb-8">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border"
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
              <Link href="/about">Request Samples & Specs</Link>
            </Button>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            {/* VIDEO */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/images/manufacturing.png"
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
