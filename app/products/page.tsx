"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { products } from "@/lib/data/products";
import { Clock3 } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      <section
        className="relative 
  min-h-[72vh]
sm:min-h-[95vh]
md:min-h-[70vh]
lg:min-h-[70vh] 
  flex items-center
  text-white 
  overflow-hidden"
      >
        {/* 🟢 BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/images/products/bg-products.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 🟢 OVERLAY để giữ text rõ */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 🟢 LOGO */}
        <div className="absolute top-5 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-10">
          <Image
            src="/images/profectein-logo.png"
            alt="Profectin Logo"
            width={180}
            height={180}
            className="
      w-30 
      sm:w-28 
      md:w-36 
      lg:w-44
      h-auto 
      object-contain
    "
            priority
          />
        </div>

        {/* 🟢 CONTENT */}
        <div
          className="
    relative z-10 
    container max-w-3xl text-left
    pt-24
    sm:pt-28
    md:pt-36
    lg:pt-40
  "
        >
          {" "}
          <p className="uppercase text-sm tracking-widest opacity-80">
            Product Catalog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            PROFECTEIN™ Protein Platform
          </h1>
          <p className="mt-4 opacity-90">
            High purity, functionally engineered proteins, designed for modern
            food formulations.
            <br />
            One-to-one replacement for whey protein and dairy protein.
          </p>
          {/* CTA */}
          <div
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-stretch
max-w-sm sm:max-w-md"
          >
            <a
              href="/brochure-innprousa.pdf"
              target="_blank"
              className="
      w-full sm:flex-1
      text-center
      px-6 py-3 
      bg-white text-foreground
      rounded-lg text-sm font-medium
      transition-all duration-300
      hover:bg-primary hover:text-primary-foreground
      hover:shadow-lg hover:-translate-y-0.5
    "
            >
              Download Brochure
            </a>

            <Link
              href="/request-sample"
              className="
      w-full sm:flex-1
      text-center
      px-6 py-3 
      border border-white text-white
      rounded-lg text-sm
      transition-all duration-300
      hover:bg-secondary hover:border-secondary hover:text-secondary-foreground
      hover:shadow-lg hover:-translate-y-0.5
    "
            >
              Request Sample
            </Link>
          </div>
        </div>
      </section>

      {/* <TechnologySection variant="products" /> */}

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
                          key={item.text}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-green-500">✔</span>
                          <span
                            className={
                              item.highlight
                                ? "font-semibold text-green-700 bg-green-100 px-2 py-1 rounded"
                                : "text-muted-foreground"
                            }
                          >
                            {item.text}
                          </span>
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
                      <span className="bg-muted px-2 py-1 rounded">
                        Enhanced mouthfeel & texture
                      </span>
                      <span className="bg-muted px-2 py-1 rounded">
                        Extrusion
                      </span>
                      <span className="bg-muted px-2 py-1 rounded">
                        Ready-To-Mix
                      </span>
                      <span className="bg-muted px-2 py-1 rounded">
                        Non-GMO, vegan, allergen-free
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

                    {product.name === "PROFECTEIN™ 1.5" ? (
                      <Button
                        className="
    w-full
    rounded-xl
    border border-amber-200
    bg-amber-50
    text-amber-700
    font-medium
    cursor-not-allowed
    hover:bg-amber-50
    hover:text-amber-700
    shadow-sm
    transition-none
  "
                        disabled
                      >
                        <Clock3 className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    ) : (
                      <Button variant="cta" className="w-full" asChild>
                        <Link href={`/contact?product=${product.slug}`}>
                          Request Sample
                        </Link>
                      </Button>
                    )}
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
