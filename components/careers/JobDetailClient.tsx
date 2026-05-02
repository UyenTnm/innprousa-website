"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ApplyModal from "@/components/careers/ApplyModal";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Job } from "@/lib/types/job";

export default function JobDetailClient({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* HERO */}
      <section className="py-20 border-b border-border bg-gradient-to-b from-muted/40 to-background">
        <div className="container max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">
            {job.department}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{job.title}</h1>

          {/* INFO BAR */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>

            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {job.type}
            </span>

            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {job.department}
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="container max-w-3xl space-y-10">
          {/* ABOUT */}
          <div>
            <h2 className="text-xl font-semibold mb-3">About the role</h2>
            <p className="text-muted-foreground leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* RESPONSIBILITIES */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
            <ul className="space-y-2">
              {job.responsibilities.map((r: string, i: number) => (
                <li key={i} className="flex gap-2 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* REQUIREMENTS */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Requirements</h2>

            <ul className="space-y-2">
              {job.requirements.map((r: string, i: number) => (
                <li key={i} className="flex gap-2 text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          {/* CTA BLOCK */}
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold mb-3">Ready to apply?</h3>
            <p className="text-muted-foreground mb-6">
              Join us in building the future of plant protein.
            </p>

            <Button onClick={() => setOpen(true)}>Apply for this role</Button>
          </div>
        </div>
      </section>

      {/* STICKY APPLY */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white/80 backdrop-blur p-4 z-40">
        <div className="container max-w-3xl flex items-center justify-between">
          <div>
            <p className="font-medium">{job.title}</p>
            <p className="text-xs text-muted-foreground">{job.location}</p>
          </div>

          <Button onClick={() => setOpen(true)}>Apply Now</Button>
        </div>
      </div>

      {/* MODAL */}
      {open && <ApplyModal job={job} onClose={() => setOpen(false)} />}
    </div>
  );
}
