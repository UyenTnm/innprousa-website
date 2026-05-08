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
          className="
  overflow-hidden
  cursor-grab
  active:cursor-grabbing
"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-4 md:gap-6

  pl-4 md:pl-0  cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragElastic={0.08}
            dragMomentum={true}
            ref={trackRef}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={() => setIsPaused(false)}
          >
            {loopItems.map((item, i) => (
              <div
                key={i}
                className="
  min-w-[88%]

xs:min-w-[82%]

sm:min-w-[68%]

md:min-w-[360px]

lg:min-w-[380px]

  flex-shrink-0

  snap-start

  rounded-3xl

  border border-border

  bg-white

  p-6 md:p-7

  transition-all duration-300

  hover:shadow-2xl
  hover:-translate-y-2

  hover:border-primary/20
"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl
bg-gradient-to-br from-primary/15 to-primary/5

shadow-inner"
                >
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
