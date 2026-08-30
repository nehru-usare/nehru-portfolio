"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInteractions";
import { Award, Briefcase, CalendarRange } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer – Backend (Java)",
    company: "Proounce Solutions Private Limited",
    location: "Hyderabad, India",
    period: "Jul 2024 - Current",
    description: [
      "Architected high-throughput backend systems designed for concurrency, throughput, and resilient real-world operation.",
      "Built Kafka-driven event flows and service boundaries to support scalable, decoupled integration patterns.",
      "Optimized Oracle-heavy workloads through query tuning, caching strategies, and connection management to reduce latency materially.",
      "Led API and security reviews covering Spring Security, OAuth 2.0, and JWT-based access flows.",
      "Mentored engineers while driving best practices around maintainability, observability, and production readiness.",
    ],
    highlights: [
      "50x throughput gain",
      "99.99% uptime",
      "40x query optimization",
      "Team leadership",
    ],
  },
  {
    title: "Backend Software Engineer (Java)",
    company: "Proounce Solutions Private Limited",
    location: "Hyderabad, India",
    period: "Jul 2022 - Jul 2024",
    description: [
      "Developed Spring Boot services and REST APIs for business-critical workflows across distributed systems.",
      "Implemented microservice communication patterns, retry logic, and workflow orchestration for stable operation under load.",
      "Worked on data-layer optimization and schema design to improve reliability and scale for growing workloads.",
      "Contributed to authentication, integration, and release workflows while maintaining a test-driven engineering mindset.",
    ],
    highlights: [
      "100+ APIs",
      "60% faster deployments",
      "Mentored juniors",
      "Production stability",
    ],
  },
];

export default function Experience() {
  const [ref] = useInView();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -24,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: easeCurve,
      },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="bg-slate-950 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut" as const,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
            Career
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-50 md:text-5xl lg:text-6xl">
            Experience shaped by
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              real system constraints.
            </span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-120px",
          }}
        >
          {experiences.map((exp, idx) => (
            <div key={`${exp.company}-${idx}`}>
              {/* Experience Card */}
              <motion.div
                variants={itemVariants}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Dot */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-1.5
                    z-20
                    h-4
                    w-4
                    rounded-full
                    border-4
                    border-slate-950
                    bg-emerald-400
                    shadow-[0_0_26px_rgba(52,211,153,0.6)]
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                />

                {/* Card */}
                <div
                  className="
                    relative
                    z-10
                    ml-4
                    rounded-[1.75rem]
                    border
                    border-slate-800
                    bg-slate-900
                    p-6
                    md:ml-0
                    md:px-8
                    md:py-8
                  "
                >
                  {/* Header */}
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      {/* Company */}
                      <div className="mb-3 flex items-center gap-2 text-emerald-300">
                        <Briefcase size={16} />

                        <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">
                          {exp.company}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-50">
                        {exp.title}
                      </h3>

                      {/* Location */}
                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Period */}
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        self-start
                        rounded-full
                        border
                        border-slate-700
                        bg-slate-950/70
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-slate-300
                      "
                    >
                      <CalendarRange size={14} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 text-sm leading-7 text-slate-300">
                    {exp.description.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="
                            mt-2
                            inline-block
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-emerald-400
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlights */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.highlights.map((item) => (
                      <span
                        key={item}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-emerald-500/30
                          bg-emerald-500/10
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-emerald-200
                        "
                      >
                        <Award size={12} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connector ONLY between cards */}
              {idx < experiences.length - 1 && (
                <div
                  aria-hidden="true"
                  className="
                    relative
                    h-12
                    w-full
                  "
                >
                  {/* Connector Line */}
                  <div
                    className="
                      absolute
                      left-[7px]
                      top-0
                      h-full
                      w-px
                      bg-emerald-400/50
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}