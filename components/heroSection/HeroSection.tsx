"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    type: "video",
    image: "/videos/factory-demo.mp4",
    title: "One-to-One Whey Protein Replacement for Modern Food Formulation",
    desc: "High-purity functional plant proteins engineered for clean flavor, optimized nutrition, and commercial-scale manufacturing.",
  },
  {
    type: "image",
    image: "/images/hero/hero2.jpg",
    title: "Consistent Functional Performance at Commercial Scale",
    desc: "Reliable supply and functional performance across every batch.",
  },
  {
    type: "image",

    image: "/images/hero/hero3.jpeg",
    title: "Advanced Processing for Superior Sensory Performance",
    desc: "Advanced processing technologies delivering improved solubility, clean flavor, and functional performance.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[75vh] md:min-h-[85vh] flex items-center">
        {/* BG */}
        <div className="absolute inset-0">
          {slides[index].type === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={slides[index].image} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={slides[index].image}
              alt=""
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover"
            />
          )}

          {/* FADE OVERLAY LAYER */}
          <motion.div
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-black"
          />
          <div
            className="absolute inset-0 z-10 
  bg-gradient-to-r 
  from-black/60 
  via-black/30 
  to-transparent"
          />
        </div>

        {/* CONTENT */}
        <div className="container relative z-10 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="max-w-xl md:max-w-2xl"
            className="max-w-3xl"
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="text-sm font-semibold tracking-wide text-white">
                  15+ Years Experience
                </span>
              </div>

              <div className="rounded-full border border-[#6fa13e]/70 bg-white/90 px-4 py-2 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#6fa13e]">
                  Plant Protein Ingredients
                </p>
              </div>
            </div>

            <h1 className="mb-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {slides[index].title}
            </h1>

            <p className="mb-8 text-base sm:text-lg md:text-xl text-white/80">
              {slides[index].desc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link href="/request-sample">Request Samples</Link>
              </Button>

              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
