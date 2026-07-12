"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";

function TiltCard({ children, className }: { children: ReactNode; className: string }) {
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 20, mass: 0.5 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20, mass: 0.5 });

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 5.5);
    rotateY.set((px - 0.5) * 7);
    event.currentTarget.style.setProperty("--mx", `${px * 100}%`);
    event.currentTarget.style.setProperty("--my", `${py * 100}%`);
  }

  function onPointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      className={className}
      variants={{ hidden: { opacity: 0, y: 70, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}
      whileHover={reduced ? undefined : { y: -8 }}
      style={reduced ? undefined : { rotateX: springX, rotateY: springY, transformPerspective: 1100 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </motion.div>
  );
}

export function MotionServices() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="services-grid"
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
    >
      {services.map((service, index) => (
        <TiltCard className="service-motion-wrap" key={service.slug}>
          <Link className="service-card" href={`/leistungen/${service.slug}`}>
            <div className="service-card-grid" aria-hidden="true" />
            <div className="service-card-glow" aria-hidden="true" />
            <div className="service-top"><span className="service-no">{service.number} / 05</span><ArrowUpRight /></div>
            <div><span className="service-index" aria-hidden="true">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p></div>
            <span className="service-link">Leistung entdecken <span>↗</span></span>
          </Link>
        </TiltCard>
      ))}
    </motion.div>
  );
}
