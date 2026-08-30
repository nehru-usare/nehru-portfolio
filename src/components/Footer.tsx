"use client";

import { motion } from "framer-motion";
import { ArrowUp, ExternalLink, Github, Heart, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/nehru-usare", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/nehru-usare", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nehruusare630@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 py-14 md:grid-cols-3 md:py-16">
          <div>
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">Nehru Usare</div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Senior backend engineer crafting resilient digital systems across Java, distributed architectures, and production-grade cloud delivery.
            </p>
          </div>

          <div>
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">Navigation</div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-emerald-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-400">Connect</div>
            <div className="mb-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="rounded-full border border-slate-700 bg-slate-900/70 p-3 text-slate-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
                    aria-label={social.label}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
            <a
              href="/NEHRU_USARE_4YOE_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200"
            >
              Download Resume
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 text-sm text-slate-400 md:flex-row">
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart size={14} className="text-emerald-400" />
            <span>by Nehru Usare © {currentYear}</span>
          </div>
          <div className="text-slate-500">Hyderabad, India</div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        animate={showBackToTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 p-3 text-slate-950 shadow-[0_20px_36px_rgba(16,185,129,0.35)]"
        title="Back to top"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
