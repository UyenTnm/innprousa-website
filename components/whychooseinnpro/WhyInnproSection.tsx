"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Beaker, Factory, Settings, Leaf } from "lucide-react";

const items = [
  {
    icon: Beaker,
    title: "Process, Not Commodity",
    desc: "Clean-label ingredients without sacrificing performance. No unnecessary additives or fillers.",
  },
  {
    icon: Factory,
    title: "Control Across Value Chain",
    desc: "From sourcing to production, ensuring consistency and reliability.",
  },
  {
    icon: Settings,
    title: "Built for Real Formulation",
    desc: "Designed for real food systems - not just lab specs.",
  },
  {
    icon: Leaf,
    title: "Clean Label Without Compromise",
    desc: "Delivering performance while meeting clean label expectations.",
  },
];

export default function WhyInnproSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-lg"
          >
            <p className="inline-block mb-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Why InnPro
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Not All Plant Proteins Are Built the Same
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              We don’t just supply ingredients — we engineer performance at
              every stage of the value chain, from raw material selection to
              final application.
            </p>

            {/* BIG HIGHLIGHT */}
            <div className="mt-10 rounded-2xl bg-primary text-white p-8 shadow-xl">
              <p className="text-sm uppercase tracking-wide text-white/70">
                Our Philosophy
              </p>
              <p className="mt-2 text-xl font-semibold leading-snug">
                “Engineered for performance, built for real-world food systems.”
              </p>
            </div>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                {/* TOP */}
                <div>
                  {/* ICON */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition">
                    <item.icon className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>

                  {/* TITLE (fix chiều cao) */}
                  <h3 className="mb-2 font-semibold text-lg min-h-[48px]">
                    {item.title}
                  </h3>
                </div>

                {/* DESC (luôn ở dưới) */}
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {item.desc}
                </p>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
