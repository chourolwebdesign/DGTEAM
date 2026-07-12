"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";

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
        <motion.div
          className="service-motion-wrap"
          key={service.slug}
          variants={{ hidden: { opacity: 0, y: 70, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}
          whileHover={reduced ? undefined : { y: -8 }}
        >
          <Link className="service-card" href={`/leistungen/${service.slug}`}>
            <div className="service-card-grid" aria-hidden="true" />
            <div className="service-top"><span className="service-no">{service.number} / 05</span><ArrowUpRight /></div>
            <div><span className="service-index" aria-hidden="true">0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p></div>
            <span className="service-link">Leistung entdecken <span>↗</span></span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
