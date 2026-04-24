"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Amy Claren",
    role: "CEO",
    image: "/images/teams/AmyClaren-Ceo.png",
    bio: `Amy Claren started with InnPro at its inception in 2015 as the Office Manager. Her “team player” attitude and ability to wear multiple hats has helped InnPro grow to where it is today. Amy has moved her way up in InnPro from the Office Manager to Director of Operations to VP of Operations and in early 2024 became the CEO. Amy’s attention to detail, organization, communication, and leadership skills have proven valuable in managing the daily activities to keep InnPro running smoothly. Amy leads a team focused on growing revenue and enhancing the food industry with innovative products by developing and implementing solutions that push boundaries and provide efficiencies company-wide. Amy earned her AAS degree from University of WI-Fox Valley followed later by an AS-Nursing degree from WITCC in Sioux City, IA. Outside of work, Amy enjoys spending time with her animals and cooking for her family.`,
  },
  {
    name: "Seth Foster",
    role: "President of Innovation & Business Development",
    image: "/images/teams/Seth-President.png",
    bio: `Seth plays an integral role in transitioning from concept to profitability, generating millions in revenue annually. He leads innovation efforts and manages all sales operations. He holds a Bachelor of Science in Business Marketing and certifications in fitness and nutrition. Seth promotes natural products that are “good for the body, mind, and planet”.`,
  },
  {
    name: "Don Crank",
    role: "Guru of Research & Technology",
    image: "/images/teams/Don-Guruofresearch.png",
    bio: `Don has 40 years of experience crafting plant-based proteins for food and industrial uses. He specializes in process design and innovation with multiple patents. He holds a degree in Chemical Engineering`,
  },
  {
    name: "Tim Foster",
    role: "Guru of Engineering",
    image: "/images/teams/Tim-Guruofengineer.png",
    bio: `Tim has extensive experience in engineering, project management, and corporate leadership. He holds three U.S. paten`,
  },
];

export default function TeamSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      {/* INTRO */}
      <section className="pt-20">
        <div className="container max-w-4xl text-center">
          <p className="font-display text-3xl md:text-4xl font-bold text-primary">
            Meet Our Leadership
          </p>

          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the people driving innovation at InnPro.
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
                <div className="relative aspect-[4/5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-xl overflow-hidden relative max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-50 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
              {/* IMAGE */}
              <div className="relative h-[220px] md:h-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover object-top md:object-center"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 overflow-y-auto scroll-smooth">
                <h3 className="text-xl font-bold">{selected.name}</h3>
                <p className="text-primary mb-4">{selected.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
