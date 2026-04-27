"use client";

import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function MapSection() {
  const [openUS, setOpenUS] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
        {/* ================= LEFT CONTENT ================= */}
        {/* <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Global Footprint
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Where We Operate
          </h2>

          <p className="text-muted-foreground mb-6">
            InnPro operates across the United States, Vietnam, and India —
            combining R&D expertise with large-scale manufacturing to support
            global food and nutrition companies.
          </p>

          <div className="space-y-3 text-sm">
            <div>
              🇺🇸 <b>United States</b> — HQ, R&D, Processing
            </div>
            <div>
              🇻🇳 <b>Vietnam</b> — Manufacturing (Dong Nai)
            </div>
            <div>
              🇮🇳 <b>India</b> — Partner Network
            </div>
          </div>
        </div> */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-xl flex flex-col justify-center"
        >
          {/* HEADER */}
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Global Footprint
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">Where We Operate</h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            InnPro operates across the United States, Vietnam, and India —
            combining R&D expertise with large-scale manufacturing to support
            global food and nutrition companies.
          </p>

          {/* CARDS */}
          <div className="mt-8 space-y-4">
            {/* ===== US ===== */}
            <div className="flex gap-4 p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                US
              </div>

              <div>
                <p className="font-semibold text-foreground">United States</p>

                <p className="text-sm text-muted-foreground">
                  HQ, R&D, and processing facilities
                </p>

                <p className="text-xs text-muted-foreground mt-1">
                  Dakota Dunes • Austin / St. Paul • Mooresville
                </p>
              </div>
            </div>

            {/* ===== VIETNAM ===== */}
            <div className="flex gap-4 p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                VN
              </div>

              <div>
                <p className="font-semibold text-foreground">Vietnam</p>

                <p className="text-sm text-green-600 font-medium">
                  Manufacturing – Vietnam Life Science LLC
                </p>

                <p className="text-xs text-muted-foreground mt-1">
                  Dong Nai, Vietnam
                </p>
              </div>
            </div>

            {/* ===== INDIA ===== */}
            <div className="flex gap-4 p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                IN
              </div>

              <div>
                <p className="font-semibold text-foreground">India</p>

                <p className="text-sm text-muted-foreground">
                  Partner manufacturing network
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= MAP ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden bg-white border"
        >
          {/* MAP BG */}
          <Image
            src="/images/world-map-clean.avif"
            alt="Global map"
            fill
            className="object-contain opacity-40"
          />

          {/* ===== SVG LINES ===== */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            {/* US → India */}
            <path
              d="M 33% 42% C 50% 25%, 55% 40%, 58% 60%"
              stroke="#3b82f6"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5 5"
              className="animate-[dash_6s_linear_infinite]"
            />

            {/* India → Vietnam */}
            <path
              d="M 58% 60% C 65% 60%, 68% 60%, 72% 60%"
              stroke="#22c55e"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5 5"
              className="animate-[dash_6s_linear_infinite]"
            />
          </svg>

          {/* ===== US CLUSTER ===== */}
          <div
            onClick={() => setOpenUS(true)}
            className="absolute top-[42%] left-[33%] cursor-pointer"
          >
            <div className="w-3 h-3 bg-blue-600 rounded-full" />
          </div>

          <div className="absolute top-[46%] left-[29%] text-[14px] sm:text-xs">
            <b>United States</b>
          </div>

          {/* ===== INDIA ===== */}
          <div className="absolute top-[60%] left-[58%]">
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
          </div>

          <div className="absolute top-[63%] left-[57%] text-[10px] sm:text-xs">
            India
          </div>

          {/* ===== VIETNAM (FOCUS) ===== */}
          <div className="absolute top-[60%] left-[72%]">
            <span className="absolute inline-flex h-10 w-10 rounded-full bg-green-500/20 animate-ping"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-600"></span>
          </div>

          <div className="absolute top-[65%] left-[70%] text-[10px] sm:text-xs bg-white px-2 py-1 rounded shadow">
            <b>Dong Nai</b>
            <br />
            Manufacturing
          </div>
        </motion.div>
      </div>
      {openUS && (
        <div
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpenUS(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-[90%] max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpenUS(false)}
              className="absolute top-3 right-3 text-sm"
            >
              ✕
            </button>

            {/* TITLE */}
            <h3 className="text-xl font-bold mb-4">United States Operations</h3>

            {/* MAP */}
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/usa-map.svg"
                alt="US Map"
                fill
                className="object-contain"
              />

              {/* Dakota */}
              <div className="absolute top-[55%] left-[38%] text-xs">
                ⭐ Dakota Dunes (HQ)
              </div>

              {/* Austin */}
              <div className="absolute top-[50%] left-[42%] flex items-center gap-1 text-xs">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Austin (R&D)</span>
              </div>

              {/* St Paul */}
              <div className="absolute top-[40%] left-[48%] flex items-center gap-1 text-xs">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                St. Paul (R&D)
              </div>

              {/* Mooresville */}
              <div className="absolute top-[65%] left-[60%] flex items-center gap-1 text-xs">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                <span>Mooresville (Processing)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
