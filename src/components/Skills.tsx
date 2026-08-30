"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInteractions";
import {
  Cloud,
  Code2,
  Database,
  Package,
  Shield,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend & frameworks",
    icon: Code2,
    skills: ["Java", "Spring Boot", "Spring Security", "Hibernate", "JPA", "REST APIs"],
    accent: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/20",
  },
  {
    title: "Distributed systems",
    icon: Zap,
    skills: ["Kafka", "Event-driven design", "Messaging", "Quartz", "Retry patterns", "Architecture"],
    accent: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
  },
  {
    title: "Data & caching",
    icon: Database,
    skills: ["SQL", "Oracle", "Redis", "Apache Ignite", "Query tuning", "Scalability"],
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Infrastructure"],
    accent: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20",
  },
  {
    title: "Security & auth",
    icon: Shield,
    skills: ["Spring Security", "OAuth 2.0", "JWT", "RBAC", "SSL/TLS", "API protection"],
    accent: "from-rose-500/20 to-red-500/10",
    border: "border-rose-500/20",
  },
  {
    title: "Engineering practices",
    icon: Package,
    skills: ["System design", "TDD", "SonarQube", "Git", "Microservices", "Agile"],
    accent: "from-fuchsia-500/20 to-pink-500/10",
    border: "border-fuchsia-500/20",
  },
];

export default function Skills() {
  const [ref] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  };

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeCurve } },
  };

  return (
    <section id="skills" ref={ref} className="bg-slate-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">Expertise</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-slate-50 md:text-5xl lg:text-6xl">
            Capability stack for
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              production systems.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`rounded-[1.75rem] border bg-gradient-to-br ${category.accent} p-[1px] ${category.border}`}
              >
                <div className="h-full rounded-[1.7rem] border border-slate-800/80 bg-slate-950/85 p-6">
                  <div className="mb-5 inline-flex rounded-2xl border border-slate-700 bg-slate-900 p-3 text-slate-100">
                    <Icon size={22} className="text-emerald-300" />
                  </div>
                  <h3 className="mb-5 text-xl font-semibold text-slate-50">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {[
            {
              title: "Methodologies",
              items: ["TDD", "Agile delivery", "Microservices design", "System optimization"],
            },
            {
              title: "Specializations",
              items: ["High-throughput systems", "Distributed architecture", "Performance tuning", "Reliability engineering"],
            },
          ].map((group) => (
            <div key={group.title} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-6">
              <h4 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{group.title}</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
