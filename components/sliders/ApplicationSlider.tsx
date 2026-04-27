"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { Coffee, Droplet, Dumbbell, Leaf } from "lucide-react";

const applications = [
  {
    icon: Coffee,
    title: "Functional Beverages",
    desc: "High solubility, smooth mouthfeel, neutral taste profile",
  },
  {
    icon: Droplet,
    title: "Dairy Alternatives",
    desc: "Stable emulsification, creamy texture, clean label formulation",
  },
  {
    icon: Dumbbell,
    title: "Sports Nutrition",
    desc: "High protein density, fast absorption, excellent mixability",
  },
  {
    icon: Leaf,
    title: "Plant-Based Foods",
    desc: "Strong binding, fibrous texture, heat stability",
  },
];

// duplicate để loop
const loopItems = [...applications, ...applications];

export default function ApplicationSlider() {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // useAnimationFrame(() => {
  //   if (!isPaused) {
  //     let current = x.get();
  //     current -= 0.3;

  //     const width = 320 + 24;
  //     const totalWidth = width * applications.length;

  //     if (current < -totalWidth) {
  //       current = 0;
  //     }

  //     x.set(current);
  //   }
  // });
  useAnimationFrame(() => {
    if (!isPaused && trackRef.current) {
      let current = x.get();

      current -= 0.3;

      const totalWidth = trackRef.current.scrollWidth / 2;

      if (Math.abs(current) >= totalWidth) {
        current = 0;
      }

      x.set(current);
    }
  });

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container">
        {/* HEADER */}
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Applications
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Application-Driven Performance
          </h2>

          <p className="mt-3 text-muted-foreground">
            Designed for real-world food systems.
          </p>
        </div>

        {/* SLIDER */}
        <div
          ref={containerRef}
          className="overflow-hidden sm:overflow-visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          <motion.div
            className="flex gap-4 md:gap-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            ref={trackRef}
            dragConstraints={containerRef}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={() => setIsPaused(false)}
          >
            {loopItems.map((item, i) => (
              <div
                key={i}
                className="min-w-[85%] sm:min-w-[70%] md:min-w-[320px] flex-shrink-0 snap-start rounded-xl border border-border bg-card p-6 transition hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 font-semibold text-lg text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>

                {/* <p className="mt-3 text-xs text-primary font-medium group-hover:underline">
                  View use case →
                </p> */}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
