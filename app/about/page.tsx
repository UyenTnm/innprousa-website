"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Eye, Lightbulb, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import TeamSection from "@/components/team/TeamSection";

/* =========================
   VALUES (Adjusted to match company tone)
========================= */
const values = [
  {
    icon: Target,
    title: "Quality & Consistency",
    description:
      "We are committed to delivering consistent, high-quality plant protein ingredients that meet strict food manufacturing standards.",
  },
  {
    icon: Eye,
    title: "Transparency & Traceability",
    description:
      "We provide full transparency across our supply chain, ensuring traceability from raw materials to finished products.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Partnership",
    description:
      "We continuously invest in processing technology and collaborate with our partners to develop scalable, functional solutions.",
  },
];

/* =========================
   TIMELINE (Safe + Professional)
========================= */
const timeline = [
  {
    year: "2015",
    event:
      "InnPro was founded with a focus on plant-based ingredient innovation.",
  },
  {
    year: "2016",
    event: "Formation of Innovative Proteins to support business expansion.",
  },
  {
    year: "2017",
    event:
      "Added manufacturing partners for plant proteins and oatmilk products.",
  },
  {
    year: "2018",
    event:
      "Granted U.S. patent for high-digestibility pea protein compositions.",
  },
  {
    year: "2019",
    event: "Commercial launch of oatmilk powder products.",
  },
  {
    year: "2020",
    event: "Acquired manufacturing facility to scale production.",
  },
  {
    year: "2021",
    event: "Granted Canadian patent for plant protein technology.",
  },
  {
    year: "2022",
    event:
      "Expanded into agriculture and grain operations with new facilities.",
  },
  {
    year: "2023",
    event: "Launched PROFECTEIN™ and surpassed $100M in lifetime revenue.",
  },
];

const About = () => (
  <div>
    {/* =========================
        HERO
    ========================= */}
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
  "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/bg-about.png"
          alt="InnPro manufacturing facility"
          fill
          className="object-cover object-center md:object-[center_30%]"
          priority
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 container max-w-3xl text-left">
        <p className="uppercase text-sm tracking-widest opacity-80">
          About InnPro
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-3">
          A Trusted Partner in Plant-Based Protein Ingredients
        </h1>

        <p className="mt-4 opacity-90 max-w-xl leading-relaxed">
          InnPro develops high-performance plant-based protein ingredients
          through advanced processing technologies, supporting food
          manufacturers with reliable, scalable, and consistent solutions.
        </p>
      </div>
    </section>
    {/* =========================
        MISSION / ABOUT CONTENT
    ========================= */}
    <section className="py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Mission
          </p>

          <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
            Supporting Food Innovation with Reliable Plant Protein
          </h2>

          <p className="mb-4 text-muted-foreground leading-relaxed">
            InnPro focuses on the development and manufacturing of plant-based
            protein ingredients for food applications. Our goal is to provide
            consistent, functional ingredients that support product innovation
            and large-scale production.
          </p>

          <div className="border-l-4 border-primary pl-4 italic text-muted-foreground">
            Delivering consistency at scale for global food manufacturers.
          </div>

          <p className="text-muted-foreground leading-relaxed">
            We combine expertise in food science, processing technology, and
            quality control to ensure that every batch meets the technical
            requirements of our customers, from protein content and solubility
            to flavor and color.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
          className="rounded-lg overflow-hidden"
        >
          <Image
            src="/images/manufacturing.png"
            alt="InnPro manufacturing facility"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>

    {/* =========================
        TEAM
    ========================= */}
    <TeamSection />

    {/* =========================
        VALUES
    ========================= */}
    <section className="surface-subtle py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="mb-12 max-w-xl"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Values
          </p>

          <h2 className="font-display text-3xl font-bold text-foreground">
            What Drives Us
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="rounded-lg border border-border bg-card p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft">
                <v.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {v.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* =========================
        TIMELINE
    ========================= */}
    <section className="py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="mb-12 max-w-xl"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Journey
          </p>

          <h2 className="font-display text-3xl font-bold text-foreground">
            Company History
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="flex gap-4 rounded-lg border bg-card p-6 border-l-4 border-primary transition hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-xl font-bold text-primary min-w-[60px]">
                {t.year}
              </span>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.event}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* =========================
        CTA
    ========================= */}
    <section className="hero-gradient py-16">
      <div className="container text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground">
          Start Your Next Product with InnPro
        </h2>

        <p className="mb-6 text-primary-foreground/80">
          Partner with us to develop reliable, high-performance plant protein
          solutions for your products.
        </p>

        <Button variant="hero" size="lg" asChild>
          <Link href="/contact">
            Talk to Our Team <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  </div>
);

export default About;
