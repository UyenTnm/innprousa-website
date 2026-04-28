"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import div from "@/components/layout/div";
import {
  Beaker,
  Factory,
  ShieldCheck,
  Zap,
  ArrowRight,
  Leaf,
  FlaskConical,
  BarChart3,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { useEffect, useState } from "react";
import Image from "next/image";
import ApplicationSlider from "@/components/sliders/ApplicationSlider";
import WhyInnproSection from "@/components/whychooseinnpro/WhyInnproSection";
import ManufacturingSection from "@/components/manufacturing/ManufacturingSection";
import MapSection from "@/components/MapSection/MapSection";
import HeroSection from "@/components/heroSection/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import TechnologySection from "@/components/home/TechnologySection";
import ProductPreviewSection from "@/components/home/ProductPreviewSection";

const slides = [
  {
    image: "/images/hero/hero1.webp",
    title: "Engineered for Performance. Built for Scale.",
    desc: "High-purity plant protein ingredients for B2B manufacturers.",
  },
  {
    image: "/images/hero/hero2.jpg",
    title: "Consistent Quality at Commercial Scale.",
    desc: "Reliable supply and performance for food production.",
  },
  {
    image: "/images/hero/hero3.jpeg",
    title: "Science-Driven Ingredient Solutions.",
    desc: "Advanced filtration technology for better results.",
  },
];

// const stats = [
//   { value: "15+", label: "Years in Plant Protein" },
//   { value: "200+", label: "Formulations Delivered" },
//   { value: "50K", label: "MT Annual Capacity" },
//   { value: "98.5%", label: "Batch Consistency" },
// ];

// const products = [
//   {
//     name: "Pea Protein Isolate",
//     protein: "85%+",
//     applications: "Beverages, Bars, Meat Analogues",
//   },
//   {
//     name: "Rice Protein Concentrate",
//     protein: "80%+",
//     applications: "Baking, Snacks, Nutrition Powders",
//   },
//   {
//     name: "Faba Bean Protein",
//     protein: "60%+",
//     applications: "Dairy Alternatives, Sauces",
//   },
//   {
//     name: "Blended Systems",
//     protein: "Custom",
//     applications: "Tailored for Your Application",
//   },
//   {
//     name: "Profectein® Isolate",
//     protein: "90%",
//     applications: "Beverages, Nutrition",
//     benefits: ["High solubility", "Neutral taste", "Low viscosity"],
//   },
// ];

const Index = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Hero */}
      <HeroSection />
      {/* <section className=" relative overflow-hidden min-h-[80vh] flex items-center">

        <div className="absolute inset-0">
          <Image
            key={index}
            src={slides[index].image}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-xl md:max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              Plant Protein Ingredients
            </p>

            <h1 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {slides[index].title}
            </h1>

            <p className="mb-8 text-lg text-white/80 md:text-xl">
              {slides[index].desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link href="/contact">Request a Sample</Link>
              </Button>

              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section> */}

      {/* Stats */}
      {/* <section className="border-b border-border bg-card">
        <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center"
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Problem */}
      {/* <section className="py-20 md:py-28">
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
              The Challenge
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Why Most Protein Ingredients Fall Short
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="rounded-lg border border-border bg-card p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-soft">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <ProblemSection />

      {/* Solution */}
      {/* <section className="surface-subtle py-20 md:py-28">
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
              Our Approach
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Science-Driven Ingredients You Can Rely On
            </h2>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <SolutionSection />

      {/* Profectein Technology */}
      {/* <section className="relative py-20 md:py-28 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/videos/protein-platform-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px]" />

        <div className="relative z-10 container text-center max-w-3xl text-gray-900">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/pro1.png"
              alt="Profectein"
              width={220}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          <h2 className="mb-6 text-3xl md:text-4xl font-bold leading-tight">
            Pea Protein Platform Engineered for Performance
          </h2>

          <p className="mb-10 max-w-2xl mx-auto text-gray-700 leading-relaxed">
            Developed using proprietary processing technologies, delivering
            superior solubility, clean taste profile, and scalable performance
            across diverse food and beverage applications.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "High Functionality",
              "Clean Sensory Profile",
              "Optimized Nutrition",
              "Formulation Versatility",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-white/80 px-5 py-3 text-sm font-medium border border-gray-200 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <TechnologySection />

      {/* Application Sliders */}
      <ApplicationSlider />

      {/* Products Preview */}
      {/* <section className="surface-subtle py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Powered by PROFECTEIN™ platform
              </p>

              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                High-Performance Protein Ingredients
              </h2>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-accent" />

                <h3 className="mb-1 font-display text-base font-semibold text-foreground">
                  {product.name}
                </h3>

                <p className="mb-3 text-2xl font-bold text-primary">
                  {product.protein}
                </p>
                <ul className="mb-3 space-y-1 text-xs text-muted-foreground">
                  {product.benefits?.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <p className="text-xs text-muted-foreground">
                  {product.applications}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/products">View Full Product Catalog</Link>
            </Button>
          </div>
        </div>
      </section> */}
      <ProductPreviewSection />

      {/* Why InnPro Section */}
      <WhyInnproSection />

      {/* Manufacturing */}
      <ManufacturingSection />

      {/* Map */}
      <MapSection />

      {/* CTA */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="mx-auto max-w-2xl"
          >
            <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Start Your Next Formulation with Confidence
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Get samples, detailed specifications, and direct support from our
              formulation experts to accelerate your product development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/contact?type=sample">Request a Sample</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
              <p className="mt-6 text-sm text-primary-foreground/60">
                Trusted by global food and nutrition manufacturers
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
