"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { ProjectItem } from "@/types";
import Badge from "@/components/ui/Badge";

export default function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: ProjectItem;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl p-7 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="focus-ring absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted hover:text-foreground"
            >
              <X size={16} />
            </button>

            <h3 id="project-modal-title" className="font-display text-2xl font-bold text-foreground pr-10">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-2 mb-2.5">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-2 mb-2.5">Key Features</p>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted">
                    <span className="text-accent">›</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-accent/40 transition-colors"
              >
                <Github size={15} /> View Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 text-sm font-semibold text-background hover:brightness-110 transition-all"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
