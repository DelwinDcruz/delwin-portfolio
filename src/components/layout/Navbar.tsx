"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "@/data/portfolio";

// Desktop nav links (subset matching reference design)
const desktopLinks = navLinks.filter((l) =>
  ["#about", "#experience", "#skills", "#projects", "#contact"].includes(l.href)
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className="pointer-events-auto flex w-full max-w-8xl items-center justify-between rounded-full px-6 py-4 gap-4"
          style={{
            background: "rgba(0, 0, 0, 0.07)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          }}
        >
          {/* ── Logo + Name ── */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="Home"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl font-bold text-sm text-white shadow-md transition-transform duration-200 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
            >
              {personal.initials}
            </span>
            <span className="hidden sm:block font-semibold text-white text-sm tracking-wide">
              {personal.name}
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary">
            {desktopLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                  active === link.href ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(255,255,255,0.09)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* ── CTA + Mobile hamburger ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* "Let's Talk" — bright green pill, always visible */}
            <a
              href="#contact"
              className="rounded-full px-5 py-1.5 text-sm font-semibold text-black transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_18px_rgba(34,197,94,0.45)] focus:outline-none hidden sm:block"
              style={{ background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)" }}
            >
              Let&apos;s Talk
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white transition-colors md:hidden focus:outline-none"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile dropdown (below the pill) ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 inset-x-4 z-40 rounded-2xl overflow-hidden md:hidden"
            style={{
              background: "rgba(8, 28, 16, 0.92)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
            aria-label="Mobile menu"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active === link.href
                      ? "text-white bg-white/10"
                      : "text-white/55 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full px-5 py-2.5 text-sm font-semibold text-black text-center transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #4ade80 0%, #22c55e 100%)" }}
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
