"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function WheyReplacementSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-white">
      <div className="container max-w-[1400px]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-xl"
          >
            {/* LABEL */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Whey Protein Replacement
            </p>

            {/* LOGO */}
            <div className="mb-6">
              <Image
                src="/images/pro1.png"
                alt="Profectein"
                width={240}
                height={80}
                className="h-auto w-[200px] md:w-[240px]"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
              One-to-one replacement for whey protein and whey protein
              concentrate.
            </h2>

            {/* DESC */}
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Designed for clean flavor, optimized nutrition, and scalable
              commercial food formulation across beverage, dairy alternative,
              and nutrition systems.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="
                  inline-flex items-center
                  rounded-xl
                  bg-primary
                  px-6 py-3
                  text-sm font-medium text-white
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:opacity-90
                "
              >
                Request Technical Information
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="
              relative overflow-hidden
              rounded-3xl
              border border-border
              bg-muted
              shadow-xl
            "
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-[280px] md:h-[420px] w-full object-cover"
            >
              <source src="/videos/RTD-protein-shakee.mp4" type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
