import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { BarChart3, FlaskConical, Leaf, Zap } from "lucide-react";

const solutions = [
  {
    icon: FlaskConical,
    title: "Precision-Engineered Ingredients",
    description:
      "Designed for clean flavor, optimized nutrition, and superior functional performance across modern food systems.",
  },
  {
    icon: Zap,
    title: "Scalable Manufacturing",
    description:
      "From one kilo samples to mass production - our ability scales with your growth.",
  },
  {
    icon: Leaf,
    title: "Reliable Supply Chain",
    description:
      "Consistent ingredient sourcing and manufacturing processes designed for long-term commercial stability.",
  },
  {
    icon: BarChart3,
    title: "Technical Partnership",
    description:
      "Collaborative formulation support from early development through commercial production.",
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
          className="mb-14 max-w-2xl"
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
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
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
