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
      "One-to-one whey protein replacement",
      "Neutral taste profile",
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
      "Enhanced digestibility",
      "Produced using patented processing",
    ],
    // applications: "Nutrition, sports, functional foods",
  },
  {
    name: "Oatmilk Powder",
    type: "Non-Dairy Ingredient",
    protein: "Wide application use",
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
    protein: "Specialty Rice Protein",
    benefits: [
      "Enhanced drinkability",
      "Better suspension and solubility",
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
              Designed for clean flavor, optimized nutrition, and scalable
              commercial food formulation.
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
    space-y-3
    text-sm
    text-muted-foreground
    min-h-[140px]
  "
                >
                  {product.benefits.map((b) => (
                    <li
                      key={b}
                      className="
    flex
    items-start
    gap-3
    leading-relaxed
  "
                    >
                      {/* Bullet được đẩy lên nhẹ để thẳng với dòng đầu tiên */}
                      <span
                        className="
      shrink-0
      text-primary
      text-base
      leading-none
      mt-[0.22em]
    "
                      >
                        •
                      </span>

                      {/* Nội dung */}
                      <span className="flex-1">{b}</span>
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
