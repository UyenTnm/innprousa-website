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
      "Commercial quantities available",
      "Reliable across standard formulations",
    ],
    // applications: "Beverages, RTD, dairy alternatives",
  },
  {
    name: "PROFECTEIN™ 1.5",
    type: "Advanced Pea Protein",
    protein: "Enhanced digestibility",
    benefits: [
      // "Improved amino acid profile",
      "High PDCAAS score",
      "Enhance digestibility",
      "Using patented processing",
    ],
    // applications: "Nutrition, sports, functional foods",
  },
  {
    name: "Oatmilk Powder",
    type: "Non-Dairy Ingredient",
    protein: "Variable",
    benefits: [
      "Organic & gluten-free",
      "Adjustable sugar (<3% to >20%)",
      "High solubility & stability",
    ],
    // applications: "RTD, coffee, desserts",
  },
  {
    name: "Rice Protein SG-II",
    type: "Rice Protein",
    protein: "Plant-based",
    benefits: [
      "Enhanced drinkability",
      "Better suspension",
      "Allergen-friendly option",
    ],
    // applications: "Beverages, bars, snacks",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group rounded-2xl border border-border/60 bg-card p-6 
      flex flex-col h-full transition hover:shadow-lg hover:-translate-y-1"
            >
              {/* TOP CONTENT */}
              <div>
                {/* TYPE */}
                <span className="text-[10px] uppercase text-muted-foreground">
                  {product.type}
                </span>

                {/* NAME */}
                <h3
                  className="
            mt-2 
            font-semibold 
            text-foreground
            min-h-[40px]
            flex items-start
          "
                >
                  {product.name}
                </h3>

                {/* PROTEIN */}
                <p className="mb-4 text-xl font-bold text-primary tracking-tight">
                  {product.protein}
                </p>

                {/* BENEFITS */}
                <ul
                  className="
            space-y-2
            text-sm
            text-muted-foreground
            min-h-[120px]
          "
                >
                  {product.benefits.map((b) => (
                    <li key={b} className="flex gap-2 leading-relaxed">
                      <span className="mt-[2px] text-primary">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 text-center">
          <Button
            className="bg-secondary text-white hover:bg-[#5A8E36] border-0"
            asChild
          >
            <Link href="/products">View Technical Product Catalog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
