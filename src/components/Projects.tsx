"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInteractions";

const projects = [
  {
    id: 1,
    title: "High-throughput event processing platform",
    summary: "Real-time processing built around Kafka-driven orchestration, caching, and resilient service boundaries.",
    problem: "Legacy backend bottlenecked event flow and struggled under spikes in concurrent traffic.",
    solution: "Restructured into microservices with topic-based partitioning, caching, load balancing, and observability hooks.",
    impact: "Increased throughput by 50x while reducing latency by 85% and lowering operational cost by 40%.",
    tech: ["Apache Kafka", "Spring Boot", "Redis", "Docker", "AWS"],
    metrics: [
      { label: "Throughput", value: "50x" },
      { label: "Latency", value: "−85%" },
      { label: "Cost", value: "−40%" },
    ],
    accent: "from-emerald-500/12 via-cyan-500/5 to-slate-950",
    border: "border-emerald-500/20",
  },
  {
    id: 2,
    title: "Distributed microservices orchestration",
    summary: "Service resilience and recovery design built to survive bursts, dependency failures, and degraded downstream systems.",
    problem: "Cascading failures during peak demand caused elevated error rates and slow remediation.",
    solution: "Introduced circuit breaking, retry policies, distributed tracing, and guarded service boundaries across the platform.",
    impact: "Error rates dropped to 0.01%, recovery was faster, and service availability improved materially.",
    tech: ["Spring Boot", "Hystrix", "Sleuth", "Kubernetes", "Jenkins"],
    metrics: [
      { label: "Error rate", value: "0.01%" },
      { label: "MTTR", value: "−75%" },
      { label: "Availability", value: "99.99%" },
    ],
    accent: "from-cyan-500/12 via-blue-500/5 to-slate-950",
    border: "border-cyan-500/20",
  },
  {
    id: 3,
    title: "Database performance optimization",
    summary: "High-concurrency query and indexing improvements designed to unlock latency and throughput improvements for reporting workloads.",
    problem: "Critical reports took minutes to execute and created operational drag under real usage conditions.",
    solution: "Tuned schema, indexing, connection pooling, and report execution paths while refining cache strategy and query patterns.",
    impact: "Report generation dropped from 30 minutes to 45 seconds, with greater concurrent user support and lower DB cost.",
    tech: ["Oracle", "SQL", "Redis", "Apache Ignite", "SonarQube"],
    metrics: [
      { label: "Report time", value: "−40x" },
      { label: "Concurrent users", value: "10x" },
      { label: "DB cost", value: "−30%" },
    ],
    accent: "from-violet-500/12 via-fuchsia-500/5 to-slate-950",
    border: "border-violet-500/20",
  },
];

export default function Projects() {
  const [ref] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
  };

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeCurve } },
  };

  return (
    <section id="projects" ref={ref} className="bg-slate-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">Selected work</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-slate-50 md:text-5xl lg:text-6xl">
            Solving system-level
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              engineering problems.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`overflow-hidden rounded-[2rem] border bg-gradient-to-br ${project.accent} ${project.border} p-[1px]`}
            >
              <div className="rounded-[1.9rem] border border-slate-800/80 bg-slate-950/85 p-6 md:p-8">
                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-slate-500">
                      Case study 0{index + 1}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-50 md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base text-slate-300">{project.summary}</p>
                  </div>
                  <div className="inline-flex rounded-full border border-slate-700 bg-slate-900 p-3 text-emerald-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="grid gap-5 border-y border-slate-800 py-6 md:grid-cols-3">
                  <div>
                    <div className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-500">Challenge</div>
                    <p className="text-sm leading-7 text-slate-300">{project.problem}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-500">Approach</div>
                    <p className="text-sm leading-7 text-slate-300">{project.solution}</p>
                  </div>
                  <div>
                    <div className="mb-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-500">Outcome</div>
                    <p className="text-sm leading-7 text-slate-300">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                      <div className="text-2xl font-semibold tracking-[-0.05em] text-slate-50">{metric.value}</div>
                      <div className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_32px_rgba(52,211,153,0.2)]">
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
