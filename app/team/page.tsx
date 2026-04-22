"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

import { fadeUp } from "@/lib/animations";

const teamMembers = [
  {
    name: "Amy Claren",
    role: "CEO",
    image: "/images/teams/amy.jpg",
    bio: `Amy Claren started with InnPro at its inception in 2015...`,
  },
  {
    name: "Seth Foster",
    role: "President of Innovation & Business Development",
    image: "/images/teams/seth.jpg",
    bio: `Seth plays an integral role in transitioning from concept to profitability...`,
  },
  {
    name: "Don Crank",
    role: "Guru of Research & Technology",
    image: "/images/teams/don.jpg",
    bio: `Don has 40 years of experience crafting plant-based proteins...`,
  },
  {
    name: "Tim Foster",
    role: "Guru of Engineering",
    image: "/images/teams/tim.jpg",
    bio: `Tim has extensive experience in engineering...`,
  },
];

export default function TeamPage() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

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
              Our Team
            </p>

            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Leadership Team
            </h1>

            <p className="text-lg text-primary-foreground/80">
              Meet the people driving innovation, quality, and scale at InnPro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pt-20">
        <div className="container max-w-4xl text-center">
          <p className="font-display text-3xl md:text-4xl font-bold text-primary">
            Experienced leadership driving innovation and scalable food
            solutions.
          </p>

          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team combines expertise in food science, manufacturing, and
            commercial strategy.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                onClick={() => setSelected(member)}
                className="group cursor-pointer rounded-xl border border-border bg-card overflow-hidden transition hover:shadow-lg hover:-translate-y-1"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>

                  <p className="text-sm text-primary font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-xl shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2">
              {/* IMAGE */}
              <div className="relative h-[400px]">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 overflow-y-auto max-h-[80vh]">
                <h3 className="text-xl font-bold mb-1">{selected.name}</h3>

                <p className="text-primary font-medium mb-4">{selected.role}</p>

                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {selected.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
