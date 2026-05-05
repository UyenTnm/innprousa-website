"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const concepts = [
  {
    title: "Protein Boost Noodles",
    description:
      "High-protein instant noodles designed for modern consumers seeking healthy convenience.",
    highlights: ["20g Protein", "Plant-Based", "Ready in 3 mins"],
    image: "/images/concepts/noodles.jpeg",
  },
  {
    title: "Protein Coffee",
    description:
      "A functional coffee infused with plant protein for sustained energy without sugar spikes.",
    highlights: ["Coffee + Protein", "No Sugar Crash", "RTD Ready"],
    image: "/images/concepts/protein-coffee.png",
  },
];

export default function ConceptsPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/concepts/hero-application-concepts.jpeg"
            alt="Concept Development"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container max-w-3xl">
          <p className="uppercase text-sm tracking-widest opacity-80">
            Innovation
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Concept Development
          </h1>
          <p className="mt-4 opacity-90">
            Retail-ready product ideas designed to help your brand win on shelf.
          </p>
        </div>
      </section>

      {/* LIST */}
      <section className="py-20">
        <div className="container space-y-20">
          {concepts.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-4 text-muted-foreground">{item.description}</p>

                <div className="mt-6 flex gap-3 flex-wrap">
                  {item.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-green-100 text-green-700 text-sm rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold">Want to bring this to market?</h2>
          <p className="mt-4 text-muted-foreground">
            Contact us to request samples and development support.
          </p>

          <Link
            href="/contact?type=sample"
            className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg"
          >
            Request Sample <ArrowRight className="inline ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
