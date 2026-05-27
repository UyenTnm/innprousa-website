import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { Beaker, Factory, ShieldCheck } from "lucide-react";

const problems = [
  {
    icon: Beaker,
    title: "Poor Organoleptics",
    description:
      "Clean flavor, texture, and mouthfeel remain major limitations in many plant protein systems.",
  },
  {
    icon: ShieldCheck,
    title: "Lacking Nutritional Equivalency",
    description:
      "Many plant proteins struggle to match the nutritional balance, protein density, and functional performance expected from dairy-based systems.",
  },
  {
    icon: Factory,
    title: "Scaling Challenges",
    description:
      "Moving from pilot to full production requires a partner with proven manufacturing infrastructure.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            The Challenge
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Why Most Protein Plant Protein Ingredients Fall Short
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
              className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              {/* </div> */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <item.icon className="h-5 w-5 text-primary-foreground" />
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
    </section>
  );
}
