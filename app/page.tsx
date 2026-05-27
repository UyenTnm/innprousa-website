"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import div from "@/components/layout/div";
// import {
//   Beaker,
//   Factory,
//   ShieldCheck,
//   Zap,
//   ArrowRight,
//   Leaf,
//   FlaskConical,
//   BarChart3,
// } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { useEffect, useState } from "react";
// import Image from "next/image";
import ApplicationSlider from "@/components/sliders/ApplicationSlider";
import WhyInnproSection from "@/components/whychooseinnpro/WhyInnproSection";
import ManufacturingSection from "@/components/manufacturing/ManufacturingSection";
import MapSection from "@/components/MapSection/MapSection";
import HeroSection from "@/components/heroSection/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import TechnologySection from "@/components/home/TechnologySection";
import ProductPreviewSection from "@/components/home/ProductPreviewSection";
import WheyReplacementSection from "@/components/home/WheyReplacementSection";

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

      {/* Whey Replacement */}
      <WheyReplacementSection />

      {/* Problem */}
      <ProblemSection />

      {/* Solution */}
      <SolutionSection />

      {/* BRANDING SECTION */}
      <TechnologySection />

      {/* Products Preview */}
      <ProductPreviewSection />

      {/* Application Sliders */}
      <ApplicationSlider />

      {/* Why InnPro Section */}
      <WhyInnproSection />

      {/* Manufacturing */}
      <ManufacturingSection />

      {/* Map */}
      <MapSection />

      {/* CTA */}
      <section className="hero-gradient py-16 md:py-24">
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
              Accelerate Your Next Food Innovation
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Connect with InnPro’s technical team to explore scalable plant
              protein solutions engineered for modern food and beverage
              formulation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/request-sample">
                  Request Samples & Specifications
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/contact">Speak with a Formulation Expert</Link>
              </Button>
              {/* <p className="mt-6 text-sm text-primary-foreground/60">
                Trusted by global food and nutrition manufacturers
              </p> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
