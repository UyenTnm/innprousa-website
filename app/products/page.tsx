"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const products = [
  {
    id: "pea-protein-isolate",
    name: "Pea Protein Isolate",
    protein: "85%+",
    source: "Yellow Pea",
    form: "Fine Powder",
    solubility: "High",
    applications: ["Beverages", "Protein Bars", "Meat Analogues", "RTD Shakes"],
    description:
      "Our flagship isolate with superior solubility, neutral taste, and consistent amino acid profile.",
  },
  {
    id: "rice-protein-concentrate",
    name: "Rice Protein Concentrate",
    protein: "80%+",
    source: "Brown Rice",
    form: "Fine Powder",
    solubility: "Medium",
    applications: ["Baking", "Snacks", "Nutrition Powders", "Cereal Bars"],
    description:
      "Hypoallergenic protein with excellent emulsification properties for dry applications.",
  },
  {
    id: "faba-bean-protein",
    name: "Faba Bean Protein",
    protein: "60%+",
    source: "Faba Bean",
    form: "Powder",
    solubility: "High",
    applications: [
      "Dairy Alternatives",
      "Sauces",
      "Spreads",
      "Fermented Products",
    ],
    description:
      "Emerging protein source with strong foaming and gelation characteristics.",
  },
  {
    id: "oat-milk-powder",
    name: "Oat Milk Powder",
    protein: "N/A",
    source: "Oat",
    form: "Powder",
    solubility: "High",
    applications: ["Beverages", "Coffee", "Dairy Alternatives"],
    description:
      "Oat-based powder designed for plant-based beverages and dairy alternatives.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="max-w-2xl"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-medium">
              Product Catalog
            </p>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Plant Protein Ingredients
            </h1>
            <p className="text-lg text-primary-foreground/80">
              High-purity, functionally engineered proteins for food
              manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20">
        <div className="container space-y-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="grid gap-8 rounded-lg border border-border bg-card p-8 md:grid-cols-3"
            >
              {/* LEFT */}
              <div className="md:col-span-2">
                <div className="mb-1 h-1 w-12 rounded-full bg-accent" />
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                  {product.name}
                </h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* SPECS */}
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <Spec label="Protein" value={product.protein} highlight />
                  <Spec label="Source" value={product.source} />
                  <Spec label="Form" value={product.form} />
                  <Spec label="Solubility" value={product.solubility} />
                </div>

                {/* APPLICATIONS */}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-wider text-caption mb-2">
                    Applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-md bg-accent px-3 py-1 text-xs font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/protein-powder.png"
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <Button variant="cta" className="w-full" asChild>
                  <Link href="/contact">
                    Request Sample <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

/* COMPONENT NHỎ */
function Spec({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-caption">{label}</p>
      <p
        className={`mt-1 ${
          highlight
            ? "font-display text-lg font-bold text-primary"
            : "text-sm font-medium text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
