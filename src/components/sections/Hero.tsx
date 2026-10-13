"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { personal, heroTech } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProfilePhoto from "@/components/sections/ProfilePhoto";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      {/* Subtle ambient glow — no grid squares */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,120,120,0.25), rgba(60,60,60,0.12) 50%, transparent 75%)",
        }}
      />

      <Container className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item} className="font-mono text-sm text-accent">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground"
          >
            {personal.name}
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-gradient">
            {personal.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/50 px-4 py-2 font-mono text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse" />
            <span className="caret">{personal.availability}</span>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects">
              View My Work <ArrowRight size={16} />
            </Button>
            <Button href={personal.resumePath} variant="secondary" download>
              <Download size={16} /> Download Resume
            </Button>
            <Button href="#contact" variant="secondary">
              <Mail size={16} /> Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-14">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-2">Core Stack</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {heroTech.map((tech) => (
                <span key={tech} className="text-sm text-muted hover:text-foreground transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <ProfilePhoto />
      </Container>
    </section>
  );
}
