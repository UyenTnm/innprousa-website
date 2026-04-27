import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { Beaker, Factory, ShieldCheck } from "lucide-react";

const problems = [
  {
    icon: Beaker,
    title: "Inconsistent Protein Quality",
    description:
      "Batch-to-batch variation disrupts your formulation timelines and final product consistency.",
  },
  {
    icon: Factory,
    title: "Scaling Challenges",
    description:
      "Moving from pilot to full production requires a partner with proven manufacturing infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Complexity",
    description:
      "Navigating global food safety certifications demands deep technical and regulatory expertise.",
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
    </section>
  );
}
