"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useInView, useScrollPosition } from "@/hooks/useInteractions";

const techStack = [
  "Java",
  "Spring Boot",
  "Kafka",
  "AWS",
  "Docker",
  "Microservices",
  "Redis",
  "PostgreSQL",
];

export default function Hero() {
  const [ref, isInView] = useInView();
  const { scrollPosition } = useScrollPosition();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: easeCurve },
    },
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, delay: 0.45 + i * 0.05, ease: easeCurve },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950"
    >
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ y: scrollPosition * 0.35 }}
          className="absolute left-[12%] top-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]"
        />
        <motion.div
          animate={{ y: scrollPosition * -0.25 }}
          className="absolute right-[12%] top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.08),transparent_55%)]" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-14 pt-28 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-8 flex items-center justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
              Java Backend Engineer
            </p>
            <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.06em] text-slate-50 sm:text-6xl lg:text-7xl">
              Building
              <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                resilient systems
              </span>
              <span className="mt-2 block text-slate-100">that scale.</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base leading-8 text-slate-300 md:text-lg"
          >
            Senior backend engineer designing distributed architectures, event-driven platforms,
            and production-grade services for high-throughput business systems.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(53,211,153,0.25)] transition-all hover:brightness-110"
            >
              View projects
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="/NEHRU_USARE_4YOE_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
            >
              Download resume
              <Download size={18} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <div className="mb-3 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-slate-400">
              <Sparkles size={14} className="text-emerald-300" />
              Core stack
            </div>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={tech}
                  custom={idx}
                  variants={pillVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ y: -2, borderColor: "rgba(52,211,153,0.5)" }}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-3.5 py-2 text-xs font-medium text-slate-200"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="relative mx-auto hidden w-full max-w-xl lg:block"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.75)] backdrop-blur-sm">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">System status</div>
                  <div className="mt-1 text-lg font-semibold text-slate-100">Production-grade</div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Healthy
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <div className="mb-5 flex items-center justify-between text-slate-400">
                  <span className="text-[0.7rem] uppercase tracking-[0.2em]">Distributed flow</span>
                  <span className="text-xs">Realtime</span>
                </div>

                <div className="relative h-56">
                  <div className="absolute left-4 top-1/2 h-px w-[78%] -translate-y-1/2 bg-gradient-to-r from-cyan-400/60 via-emerald-400/60 to-slate-700" />
                  <div className="absolute left-1/2 top-5 h-[75%] w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400/60 via-cyan-400/60 to-slate-700" />

                  {["Client", "API", "Services", "Kafka", "DB"].map((label, index) => {
                    const x = index * 18 + 8;
                    const y = index % 2 === 0 ? 20 : 72;
                    return (
                      <div
                        key={label}
                        className="absolute flex flex-col items-center gap-2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-[0.55rem] font-semibold text-slate-200 shadow-[0_0_25px_rgba(14,165,233,0.15)]">
                          {label}
                        </div>
                        {index < 4 && (
                          <div className="h-5 w-px bg-gradient-to-b from-emerald-400/80 to-transparent" />
                        )}
                      </div>
                    );
                  })}

                  {[0, 1, 2, 3].map((dot) => (
                    <motion.div
                      key={dot}
                      animate={{ opacity: [0.3, 1, 0.3], x: [0, 12, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const, delay: dot * 0.2 }}
                      className="absolute h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.7)]"
                      style={{
                        left: `${10 + dot * 16}%`,
                        top: `${48 + (dot % 2) * 12}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Latency", value: "< 120ms" },
                  { label: "Uptime", value: "99.99%" },
                  { label: "Scale", value: "10M+" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-100">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
