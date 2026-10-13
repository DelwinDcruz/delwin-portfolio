"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Info, ImageOff } from "lucide-react";
import type { ProjectItem } from "@/types";
import Badge from "@/components/ui/Badge";
import ProjectModal from "@/components/sections/ProjectModal";

export default function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [imgError, setImgError] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setSpot({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          });
        }}
        className="glass group relative overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgba(109,129,150,0.08), transparent 60%)`,
          }}
        />

        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-surface-2">
          {!imgError ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-2">
              <ImageOff size={28} />
              <span className="font-mono text-xs">Add project preview image</span>
            </div>
          )}
        </div>

        <div className="p-6 sm:p-7">
          <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 5).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
            {project.tech.length > 5 && <Badge>+{project.tech.length - 5}</Badge>}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-medium text-muted hover:text-foreground hover:border-accent/40 transition-colors"
            >
              <Github size={14} /> Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-medium text-muted hover:text-foreground hover:border-accent/40 transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="focus-ring ml-auto inline-flex items-center gap-1.5 rounded-lg bg-surface-2 px-3.5 py-2 text-xs font-medium text-foreground hover:bg-white/10 transition-colors"
            >
              <Info size={14} /> Details
            </button>
          </div>
        </div>
      </motion.article>

      <ProjectModal project={project} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
