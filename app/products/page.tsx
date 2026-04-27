"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { products } from "@/lib/data/products";

export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
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
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                id={product.slug}
                variants={fadeUp}
                className="scroll-mt-28 will-change-transform"
              >
                <div className="grid gap-8 rounded-lg border border-border bg-card p-8 md:grid-cols-3 transition hover:shadow-lg cursor-pointer">
                  {/* LEFT */}
                  <div className="md:col-span-2">
                    <div className="mb-1 h-1 w-12 rounded-full bg-accent" />

                    <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-foreground">
                      {product.name}
                    </h2>

                    {product.badge && (
                      <span className="inline-block mt-2 mb-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                        {product.badge}
                      </span>
                    )}

                    <p className="text-lg font-bold text-primary mt-2">
                      {product.protein}
                    </p>

                    <p className="mt-2 text-muted-foreground">
                      {product.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {product.benefits?.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-green-500">✔</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="bg-muted px-2 py-1 rounded">
                        High solubility
                      </span>
                      <span className="bg-muted px-2 py-1 rounded">
                        Neutral taste
                      </span>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-wider mb-2">
                        Applications
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app) => (
                          <span
                            key={app}
                            className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col gap-4">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <Button variant="cta" className="w-full" asChild>
                      <Link href="/contact">Request Sample</Link>
                    </Button>
                    {/* <Button variant="outline" className="w-full" asChild>
                      <Link href="#">Download Specs</Link>
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
