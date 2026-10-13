"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const category = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies and practices I use to design, build, and ship full-stack applications."
        />

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`focus-ring relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 border ${
                active === cat.id
                  ? "text-background border-transparent"
                  : "text-muted border-border hover:text-foreground"
              }`}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="skills-active-tab"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent to-accent-2"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {category.items.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="glass group rounded-xl p-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
