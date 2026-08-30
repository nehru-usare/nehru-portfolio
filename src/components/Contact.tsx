"use client";

import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInteractions";

export default function Contact() {
  const [ref] = useInView();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
    setIsSubmitting(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nehruusare630@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "nehruusare630@gmail.com",
      href: "mailto:nehruusare630@gmail.com",
      accent: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/20",
    },
    {
      icon: Mail,
      label: "Phone",
      value: "+91 9922669643",
      href: "tel:+919922669643",
      accent: "from-violet-500/20 to-violet-500/5",
      border: "border-violet-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nehru-usare",
      href: "https://linkedin.com/in/nehru-usare",
      accent: "from-cyan-500/20 to-sky-500/5",
      border: "border-cyan-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nehru-usare",
      href: "https://github.com/nehru-usare",
      accent: "from-slate-500/20 to-slate-500/5",
      border: "border-slate-500/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      accent: "from-amber-500/20 to-orange-500/5",
      border: "border-amber-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  };

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeCurve } },
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden border-t border-slate-800 bg-slate-900/80 py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">Let&apos;s connect</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-50 md:text-5xl lg:text-6xl">
            Build something
            <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={itemVariants} className="rounded-[2rem] border border-slate-800 bg-slate-950/75 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Your name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nehru Usare"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="nehruusare630@gmail.com"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-emerald-400/50 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_36px_rgba(52,211,153,0.2)] transition-opacity disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && <Send size={18} />}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
                >
                  Thanks — I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const isEmail = link.label === "Email";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 rounded-[1.5rem] border bg-gradient-to-r ${link.accent} ${link.border} p-4 transition-transform hover:-translate-y-0.5`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/80 text-slate-100">
                    <Icon size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-slate-400">{link.label}</div>
                    <div className="mt-1 truncate text-base font-medium text-slate-100">{link.value}</div>
                  </div>

                  {isEmail && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopyEmail();
                      }}
                      className="rounded-xl border border-slate-700 bg-slate-950/80 p-2 text-slate-300 transition-colors hover:text-emerald-300"
                      aria-label="Copy email"
                    >
                      {copiedEmail ? <Check size={16} className="text-emerald-300" /> : <Copy size={16} />}
                    </button>
                  )}
                </a>
              );
            })}

            <div className="rounded-[1.5rem] border border-emerald-500/30 bg-emerald-500/10 p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200">Available</span>
              </div>
              <p className="text-sm leading-7 text-slate-300">
                Open to meaningful backend engineering, architecture, and platform discussions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center gap-3"
        >
          {[{ icon: Github, href: "https://github.com/nehru-usare", label: "GitHub" }, { icon: Linkedin, href: "https://linkedin.com/in/nehruusare", label: "LinkedIn" }, { icon: Mail, href: "mailto:nehruusare630@gmail.com", label: "Email" }].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
