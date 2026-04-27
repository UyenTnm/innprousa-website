"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "PROFECTEIN™ 1.0",
    type: "Pea Protein",
    protein: "High purity",
    benefits: [
      "Neutral taste profile",
      "Excellent functionality",
      "Low sodium content",
    ],
    applications: "Beverages, RTD, dairy alternatives",
  },
  {
    name: "PROFECTEIN™ 1.5",
    type: "Advanced Pea Protein",
    protein: "Enhanced digestibility",
    benefits: [
      "Improved amino acid profile",
      "High PDCAAS score",
      "Consistent performance",
    ],
    applications: "Nutrition, sports, functional foods",
  },
  {
    name: "Oatmilk Powder",
    type: "Non-Dairy Ingredient",
    protein: "Variable",
    benefits: [
      "Excellent solubility",
      "Clean enzymatic process",
      "Gluten-free options",
    ],
    applications: "RTD, coffee, desserts",
  },
  {
    name: "Rice Protein SG-II",
    type: "Rice Protein",
    protein: "Plant-based",
    benefits: [
      "Improved texture",
      "Better suspension",
      "Allergen-friendly option",
    ],
    applications: "Beverages, bars, snacks",
  },
];

export default function ProductPreviewSection() {
  return (
    <section className="surface-subtle py-20 md:py-28">
      <div className="container max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Core Ingredient Platforms
            </p>

            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Powered by PROFECTEIN™ platform
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              Built for consistency, scalability, and real-world formulation
              performance.
            </p>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group rounded-xl border border-border bg-card p-6 flex flex-col justify-between h-full transition hover:shadow-lg hover:-translate-y-1"
            >
              {/* TYPE */}
              <span className="text-[10px] uppercase text-muted-foreground">
                {product.type}
              </span>

              {/* NAME */}
              <h3 className="mt-2 mb-1 font-semibold text-foreground">
                {product.name}
              </h3>

              {/* PROTEIN */}
              <p className="mb-3 text-xl font-bold text-primary tracking-tight">
                {product.protein}
              </p>

              {/* BENEFITS */}
              <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                {product.benefits.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>

              {/* APPLICATION */}
              <p className="text-sm text-muted-foreground">
                {product.applications}
              </p>

              {/* CTA */}
              {/* <p className="mt-4 text-xs font-medium text-primary group-hover:underline">
                View specs →
              </p> */}
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/products">View Technical Product Catalog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
