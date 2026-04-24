"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useState } from "react";
import { Coffee, Droplet, Dumbbell, Leaf } from "lucide-react";

const applications = [
  {
    icon: Coffee,
    title: "Functional Beverages",
    desc: "RTD and protein drinks",
  },
  {
    icon: Droplet,
    title: "Dairy Alternatives",
    desc: "Milk, yogurt, ice cream",
  },
  {
    icon: Dumbbell,
    title: "Sports Nutrition",
    desc: "Protein powders",
  },
  {
    icon: Leaf,
    title: "Plant-Based Foods",
    desc: "Meat alternatives",
  },
];

// duplicate để loop
const loopItems = [...applications, ...applications];

export default function ApplicationSlider() {
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame(() => {
    if (!isPaused) {
      let current = x.get();
      current -= 0.3;

      // reset khi trượt hết 1 nửa
      if (current < -1200) {
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
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div className="flex gap-6" style={{ x }}>
            {loopItems.map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] md:min-w-[320px] flex-shrink-0 rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-2 font-semibold text-lg">{item.title}</h3>

                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
