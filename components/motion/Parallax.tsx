"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

export function Parallax({
  children,
  className = "",
  range = 46,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
}) {
  const target = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const y = useSpring(raw, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <motion.div ref={target} className={className} style={reduced ? undefined : { y }}>
      {children}
    </motion.div>
  );
}
