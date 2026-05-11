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
    bio: `Amy Claren started with InnPro at its inception in 2015 as the Office Manager. Her “team player” attitude and ability to wear multiple hats has helped InnPro grow to where it is today.

Amy has moved her way up in InnPro from the Office Manager to Director of Operations to VP of Operations and in early 2024 became the CEO.

Amy’s attention to detail, organization, communication, and leadership skills have proven valuable in managing the daily activities to keep InnPro running smoothly.

Amy leads a team focused on growing revenue and enhancing the food industry with innovative products by developing and implementing solutions that push boundaries and provide efficiencies company-wide.

Amy earned her AAS degree from University of WI-Fox Valley followed later by an AS-Nursing degree from WITCC in Sioux City, IA. Prior to earning her AS-Nursing degree, Amy worked in the food manufacturing space for nearly 5 years for a food ingredient company that had Annual Sales of more than $30M.

Outside of work, Amy enjoys spending time with her animals on her hobby farm and cooking for her family and friends.`,
  },
  {
    name: "Seth Foster",
    role: "President of Innovation & Business Development",
    image: "/images/teams/Seth-President.png",
    bio: `Seth plays an integral role in successfully transitioning from concept, to startup, to near immediate profitability, with revenue conversion in the millions of dollars per year with positive cash flow. He is a current patent holder with several others waiting to be awarded and filed.

Seth coordinates most day-to-day operations, leads the team’s innovation efforts, as well as management of all sales efforts.

He earned a Bachelor of Science in Business Marketing from the University of Phoenix; along with accreditations as a Certified Fitness Trainer (CFT) and Certified Sports Performance Nutritionist (CSPN).

Seth's passion for a healthy lifestyle propels him to develop and promote natural and organic products that are, “good for the body, mind, and planet”.`,
  },
  {
    name: "Don Crank",
    role: "Guru of Research & Technology",
    image: "/images/teams/Don-Guruofresearch.png",
    bio: `Don has 40 years’ experience crafting plant-based proteins for food, animal, and industrial uses, including soy, whey, milk, yeast, peas, hempseed, pumpkin, watermelon, sunflower, and other proteins derived from oilseeds, grains, pulses, legumes, and ancient grains.

He has a background in process design, product development, and plant engineering coupled with practical business knowledge which enables him to translate technical processes into financial and operational models with real-time control systems.

Don is responsible for pioneering innovative production methods in the food industry, including 3 patents with others pending.

He holds a degree in Chemical Engineering from the University of Missouri Rolla.`,
  },
  {
    name: "Tim Foster",
    role: "Guru of Engineering",
    image: "/images/teams/Tim-Guruofengineer.png",
    bio: `Tim has multiple experiences in manufacturing and professional settings, including Active Corporate Founder and VP of Engineering, Project Management, Strategic Planning and Implementation Management, Corporate Engineering, Information Technology Management, and was the Director of Public Works for the Municipal Government.

He holds three U.S. patents, one of which is the result of product package design.

Tim studied Mechanical Engineering at Milwaukee School of Engineering.`,
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                  className="object-cover object-top md:object-center"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 overflow-y-auto scroll-smooth">
                <h3 className="text-xl font-bold">{selected.name}</h3>
                <p className="text-primary mb-4">{selected.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
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
