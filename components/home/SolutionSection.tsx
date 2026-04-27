import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { BarChart3, FlaskConical, Leaf, Zap } from "lucide-react";

const solutions = [
  {
    icon: FlaskConical,
    title: "Precision-Engineered Ingredients",
    description:
      "Every batch meets strict protein content, solubility, and functionality specifications.",
  },
  {
    icon: Zap,
    title: "Scalable Manufacturing",
    description:
      "From 100kg samples to 50,000 MT annually - our facility scales with your growth.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description:
      "Traceable supply chains with verified sustainability credentials at every stage.",
  },
  {
    icon: BarChart3,
    title: "Technical Partnership",
    description:
      "Dedicated R&D support from concept through commercialization for every customer.",
  },
];

export default function SolutionSection() {
  return (
    <section className="surface-subtle py-20 md:py-28">
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
    </section>
  );
}
