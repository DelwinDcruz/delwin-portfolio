"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personal, floatingBadges } from "@/data/portfolio";

const badgePositions = [
  "top-2 -left-4 sm:-left-8",
  "top-1/4 -right-4 sm:-right-10",
  "bottom-1/4 -left-6 sm:-left-12",
  "bottom-2 -right-2 sm:-right-6",
];

export default function ProfilePhoto() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-[3rem] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(109,129,150,0.25), transparent 60%), radial-gradient(circle at 70% 80%, rgba(74,74,74,0.25), transparent 60%)",
        }}
      />

      <div
        ref={frameRef}
        onMouseMove={handleMove}
        className="glow-border relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] motion-safe:[--angle:0deg]"
      >
        <div className="glass absolute inset-[3px] rounded-[1.6rem] overflow-hidden">
          {/* mouse-follow spotlight, desktop only via pointer:fine media handled globally */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 opacity-70 transition-opacity duration-300"
            style={{
              background: `radial-gradient(320px circle at ${spot.x}% ${spot.y}%, rgba(109,129,150,0.12), transparent 65%)`,
            }}
          />

          {/* decorative code lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-4 z-10 font-mono text-[10px] leading-5 text-accent/25 select-none"
          >
            <p>const developer = {"{"}</p>
            <p className="pl-3">stack: [&quot;java&quot;, &quot;react&quot;],</p>
            <p>{"}"};</p>
          </div>

          {!imgError ? (
            <Image
              src={personal.profileImage}
              alt={`${personal.name}, ${personal.role}`}
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              priority
              className="object-cover object-top"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-display text-7xl font-extrabold text-gradient">
                {personal.initials}
              </span>
            </div>
          )}

          {/* Full Stack Developer badge — solid white, clearly visible */}
          <div
            className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-black"
            style={{
              background: "rgba(255, 255, 255, 0.23)",
              border: "1px solid rgba(0,0,0,0.12)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.30)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
            Full Stack Developer
          </div>
        </div>
      </div>

      {/* Floating tech badges — solid white cards */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.6, delay: 0.6 + i * 0.12 }}
          className={`animate-float absolute z-30 hidden sm:flex items-center rounded-xl px-4 py-2 text-xs font-semibold text-black ${badgePositions[i]}`}
          style={{
            background: "rgba(255, 255, 255, 0.38)",
            border: "1px solid rgba(0,0,0,0.10)",
            boxShadow: "0 6px 24px rgba(0,0,0,0.28), 0 1px 4px rgba(0,0,0,0.12)",
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {badge}
        </motion.div>
      ))}
    </motion.div>
  );
}
