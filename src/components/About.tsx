"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInteractions";
import { ArrowRight, Gauge, Layers3, ShieldCheck, Users } from "lucide-react";

export default function About() {
  const [ref] = useInView();

  const stats = [
    { icon: Users, label: "Experience", value: "4+ years", tone: "emerald" },
    { icon: Gauge, label: "Throughput gains", value: "50x", tone: "cyan" },
    { icon: ShieldCheck, label: "Production focus", value: "99.99%", tone: "violet" },
  ];

  const focusAreas = [
    "High-throughput distributed systems",
    "Microservice architecture & design patterns",
    "Event-driven systems using Kafka",
    "Database optimization and query tuning",
    "Security, scalability, and observability",
    "Cloud-native delivery and resilience",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeCurve },
    },
  };

  return (
    <section id="about" ref={ref} className="border-y border-slate-800/80 bg-slate-900/70 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">About</p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-slate-50 md:text-5xl lg:text-6xl">
                Engineer-focused,
                <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  system-minded.
                </span>
              </h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-slate-300 md:text-lg">
                <p>
                  I design backend systems that are resilient under load, clear in intent, and practical to operate in production.
                  My work centers on Java, Spring Boot, distributed systems, and the engineering trade-offs that make services reliable at scale.
                </p>
                <p>
                  From API design to Kafka-driven workflows, database optimization to cloud deployment, I build software with a strong bias toward performance, observability, and long-term maintainability.
                </p>
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-5 shadow-[0_20px_50px_rgba(2,6,23,0.55)]"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">Operating model</div>
                  <div className="mt-2 text-lg font-semibold text-slate-100">Production-first</div>
                </div>
                <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 p-2 text-cyan-300">
                  <Layers3 size={18} />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  "Requirements → constraints → architecture",
                  "Reliability before velocity",
                  "Scalable APIs and stable data flows",
                  "Observability and optimization as design inputs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                    <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 grid gap-4 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              const toneMap = {
                emerald: "text-emerald-300",
                cyan: "text-cyan-300",
                violet: "text-violet-300",
              } as const;

              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-3xl font-semibold tracking-[-0.05em] text-slate-50">{stat.value}</span>
                    <span className={`rounded-xl border border-slate-800 bg-slate-900 p-2 ${toneMap[stat.tone as keyof typeof toneMap]}`}>
                      <Icon size={18} />
                    </span>
                  </div>
                  <div className="text-sm uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14">
            <div className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              <ArrowRight size={16} className="text-emerald-300" />
              Core focus areas
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.045, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-base text-slate-300"
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
