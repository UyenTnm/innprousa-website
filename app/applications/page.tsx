"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowRight, Milk, Dumbbell, Cookie, Salad, Pill } from "lucide-react";

import { fadeUp } from "@/lib/animations";
import Image from "next/image";

const applications = [
  {
    icon: Milk,
    title: "Whey Protein Replacement",
    description:
      "One-to-one replacement for whey protein and whey protein concentrate.",
    products: ["Pea Protein Isolate", "Rice Protein Concentrate"],
  },

  {
    icon: Milk,
    title: "Beverages & RTD",
    description:
      "High solubility and varying viscosities for beverage formulations with stable suspension.",
    products: ["Pea Protein Isolate", "Custom Blends"],
  },

  {
    icon: Dumbbell,
    title: "Sports Nutrition",
    description:
      "Allergen-free and high protein content for muscle recovery and performance supplementation.",
    products: ["Pea Protein Isolate", "Rice Protein Concentrate"],
  },
  {
    icon: Cookie,
    title: "Bakery, Snacks & Extrusion",
    description: "Proteins can support a wide range of application use.",
    products: ["Rice Protein Concentrate", "Custom Blends"],
  },
  {
    icon: Salad,
    title: "Dairy Alternatives",
    description:
      "Our ultra-clean flavor and smooth texture allow for a one-to-one replacement in many dairy formulations, saving money and improving supply chain stability.",
    products: ["Pea Protein Isolate", "Custom Blends"],
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
      <section
        className="
    relative
    min-h-[55vh]
    sm:min-h-[60vh]
    md:min-h-[65vh]
    lg:min-h-[70vh]
    flex items-center
    text-white
    overflow-hidden
    bg-[#111]
  "
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/applications/bg-applications.webp"
            alt="Applications of plant protein"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-center md:object-[center_60%]"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 container max-w-3xl text-left">
          <p className="uppercase text-sm tracking-widest opacity-80">
            Applications
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Engineered for Your Application
          </h1>

          <p className="mt-4 opacity-90 max-w-xl leading-relaxed">
            Our plant-based protein ingredients are designed to perform across a
            wide range of food and beverage applications, delivering consistent
            texture, taste, and nutritional value.
          </p>
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
              className="rounded-2xl border border-border bg-card p-8 flex flex-col h-full transition-all duration-300 hover:-transalte-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft">
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
                    className="rounded-md bg-secondary/90 px-2 py-1 text-xs font-medium text-secondary-foreground"
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
              Speak with a Formulation Expert{" "}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
