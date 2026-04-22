"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Milk,
  Utensils,
  Dumbbell,
  Cookie,
  Salad,
  Pill,
} from "lucide-react";

import { fadeUp } from "@/lib/animations";

const applications = [
  {
    icon: Milk,
    title: "Beverages & RTD",
    description:
      "High-solubility proteins for clear and opaque beverage formulations with stable suspension.",
    products: ["Pea Protein Isolate", "Custom Blends"],
  },
  {
    icon: Utensils,
    title: "Meat Analogues",
    description:
      "Textured proteins with binding and fibrous characteristics for next-gen meat alternatives.",
    products: ["Pea Protein Isolate", "Faba Bean Protein"],
  },
  {
    icon: Dumbbell,
    title: "Sports Nutrition",
    description:
      "Complete amino acid profiles optimized for muscle recovery and performance supplementation.",
    products: ["Pea Protein Isolate", "Rice Protein Concentrate"],
  },
  {
    icon: Cookie,
    title: "Bakery & Snacks",
    description:
      "Heat-stable proteins that maintain structure and nutrition through baking processes.",
    products: ["Rice Protein Concentrate", "Custom Blends"],
  },
  {
    icon: Salad,
    title: "Dairy Alternatives",
    description:
      "Proteins with foaming and gelation properties suited for yogurt, cheese, and cream analogues.",
    products: ["Faba Bean Protein", "Custom Blends"],
  },
  {
    icon: Pill,
    title: "Nutraceuticals",
    description:
      "Clean-label, allergen-free protein bases for capsules, powders, and functional supplements.",
    products: ["Rice Protein Concentrate", "Pea Protein Isolate"],
  },
];

export default function ApplicationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-medium">
              Applications
            </p>

            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Engineered for Your Application
            </h1>

            <p className="text-lg text-primary-foreground/80">
              Our ingredients are optimized for specific food and nutrition
              applications with documented performance data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="rounded-lg border border-border bg-card p-8 flex flex-col h-full"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft">
                <app.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {app.title}
              </h3>

              <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-grow">
                {app.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {app.products.map((p) => (
                  <span
                    key={p}
                    className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="container text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground">
            Need a Custom Solution?
          </h2>

          <p className="mb-6 text-primary-foreground/80">
            Our R&D team can develop formulations tailored to your application.
          </p>

          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Talk to Our Team <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
