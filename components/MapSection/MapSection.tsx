"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Globe, Building2, Users, ShieldCheck } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-xl"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Global Footprint
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Where We Operate</h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            InnPro operates across the United States, Vietnam, and India,
            combining R&D expertise with large-scale manufacturing to support
            global food and nutrition companies.
          </p>

          {/* CARDS */}
          <div className="mt-8 space-y-4">
            {/* US */}
            <div className="flex gap-4 p-5 rounded-xl border bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                US
              </div>
              <div>
                <p className="font-semibold">United States</p>
                <p className="text-sm text-muted-foreground">
                  HQ, R&D, and processing facilities
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Dakota Dunes • Austin / St. Paul • Mooresville
                </p>
              </div>
            </div>

            {/* VN */}
            <div className="flex gap-4 p-5 rounded-xl border bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                VN
              </div>
              <div>
                <p className="font-semibold">Vietnam</p>
                <p className="text-sm text-green-600 font-medium">
                  Manufacturing – Vietnam Life Science LLC
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Dong Nai, Vietnam
                </p>
              </div>
            </div>

            {/* INDIA */}
            <div className="flex gap-4 p-5 rounded-xl border bg-white shadow-sm">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                IN
              </div>
              <div>
                <p className="font-semibold">India</p>
                <p className="text-sm text-muted-foreground">
                  Partner manufacturing network
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAP */}
        {/* MAP */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative w-full 
h-[240px] 
sm:h-[300px] 
md:h-[420px] 
lg:h-[520px] 
rounded-2xl overflow-hidden border bg-white"
        >
          {/* ===== MAP BG ===== */}
          <Image
            src="/images/world-map.svg"
            alt="Global map"
            fill
            className="object-contain opacity-60 p-2 sm:p-4 z-0"
          />

          {/* ===== OVERLAY (PHẢI NẰM DƯỚI) ===== */}
          <div className="absolute inset-0 bg-white/40 z-0" />

          {/* ===== US REGION CIRCLE ===== */}
          <div className="absolute top-[32%] left-[28%] w-[180px] h-[180px] rounded-full border border-blue-300 bg-blue-100/20 z-10" />

          {/* ===== GLOBAL CONNECTION LINES (QUAN TRỌNG) ===== */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
            {/* US → VN */}
            <path
              d="M 38% 46% C 55% 20%, 65% 40%, 72% 60%"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="6 6"
            />

            {/* INDIA → VN */}
            <path
              d="M 63% 62% C 68% 58%, 70% 58%, 72% 60%"
              stroke="#22c55e"
              strokeWidth="2"
              fill="transparent"
              strokeDasharray="6 6"
            />
          </svg>

          {/* ===== US DOT (ANCHOR) ===== */}
          <div className="absolute top-[46%] left-[38%] w-4 h-4 bg-blue-600 rounded-full z-30" />

          {/* ===== CALLOUTS (KHÔNG ĐÈ NHAU) ===== */}

          {/* St Paul */}
          <div className="absolute top-[26%] left-[42%] z-40">
            <div className="bg-white px-4 py-2 rounded-xl shadow text-xs">
              ⭐ <b>St. Paul</b>
              <br />
              Minnesota – R&D
            </div>
            <div className="absolute left-1/2 top-full w-[1px] h-10 bg-gray-300 -translate-x-1/2" />
          </div>

          {/* Austin */}
          <div className="absolute top-[42%] left-[22%] z-40">
            <div className="bg-white px-4 py-2 rounded-xl shadow text-xs">
              <b>Austin</b>
              <br />
              Minnesota – R&D
            </div>
            <div className="absolute right-0 top-1/2 w-10 h-[1px] bg-gray-300" />
          </div>

          {/* Dakota */}
          <div className="absolute top-[60%] left-[30%] z-40">
            <div className="bg-white px-4 py-2 rounded-xl shadow text-xs">
              <b>Dakota Dunes</b>
              <br />
              HQ
            </div>
            <div className="absolute left-1/2 -top-6 w-[1px] h-6 bg-gray-300 -translate-x-1/2" />
          </div>

          {/* Mooresville */}
          {/* ===== INDIA / MOORESVILLE GROUP ===== */}
          <div className="absolute top-[62%] left-[63%] z-40">
            {/* DOT */}
            <div className="w-3 h-3 bg-gray-400 rounded-full mb-2" />

            {/* LABEL */}
            <div className="bg-white px-3 py-2 text-xs rounded-md shadow space-y-1">
              <div>
                <b>Mooresville</b>
                <br />
                India
              </div>

              {/* <div className="text-gray-500 text-[11px]">India</div> */}
            </div>
          </div>

          {/* ===== VIETNAM ===== */}
          <div className="absolute top-[60%] left-[72%] z-40">
            {/* pulse */}
            <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500/20 animate-ping"></span>

            {/* dot */}
            <span className="relative inline-flex h-5 w-5 rounded-full bg-green-600"></span>

            {/* label */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white px-3 py-1 text-xs rounded-md shadow">
              <b>Dong Nai</b>
              <br />
              Manufacturing
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== STATS BAR ===== */}
      <div className="container mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl border bg-white shadow-sm text-center">
          <div className="flex flex-col items-center gap-2">
            <Globe className="text-primary" />
            <p className="text-xl font-bold">3</p>
            <p className="text-sm text-muted-foreground">Countries</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Building2 className="text-primary" />
            <p className="text-xl font-bold">4+</p>
            <p className="text-sm text-muted-foreground">Facilities</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Users className="text-green-600" />
            <p className="text-xl font-bold text-green-600">100+</p>
            <p className="text-sm text-muted-foreground">Employees</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ShieldCheck className="text-primary" />
            <p className="font-semibold text-primary">Global Standards</p>
            <p className="text-xs text-muted-foreground">
              Quality • Integrity • Innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
