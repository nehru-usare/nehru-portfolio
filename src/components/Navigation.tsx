"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useInteractions";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollPosition } = useScrollPosition();

  const navItems = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    setIsScrolled(scrollPosition > 40);

    if (typeof window === "undefined") return;

    const totalScrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(
      totalScrollable > 0 ? scrollPosition / totalScrollable : 0,
    );
  }, [scrollPosition]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4 md:py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full border transition-all duration-300 ${
            isScrolled
              ? "border-white/10 bg-slate-950/70 px-4 py-2 shadow-[0_16px_40px_rgba(15,23,42,0.35)] backdrop-blur-xl"
              : "border-transparent bg-transparent px-2 py-2"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-slate-100 uppercase transition-opacity hover:opacity-80"
          >
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            Nehru Usare
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                whileHover={{ color: "#a7f3d0" }}
                whileTap={{ scale: 0.96 }}
                className="relative text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-emerald-300"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href="/NEHRU_USARE_4YOE_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
            >
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.25)] transition-all hover:brightness-110"
            >
              Let&apos;s Talk
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-slate-700 bg-slate-900/70 p-2.5 text-slate-200 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-emerald-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="/NEHRU_USARE_4YOE_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.04 }}
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: Math.min(Math.max(scrollProgress, 0), 1) }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.2 }}
      />
    </motion.nav>
  );
}
