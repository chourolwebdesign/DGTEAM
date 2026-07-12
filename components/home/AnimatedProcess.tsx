"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  ["01", "Anfrage stellen", "Sie übermitteln uns die wichtigsten Informationen zu Ihrem Objekt."],
  ["02", "Planung & Abstimmung", "Wir prüfen den Umfang, klären offene Punkte und planen die Durchführung."],
  ["03", "Umsetzung", "Die vereinbarten Arbeiten werden strukturiert und effizient ausgeführt."],
  ["04", "Übergabe", "Die Immobilie wird im vereinbarten Zustand übergeben."],
];

export function AnimatedProcess() {
  const target = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target, offset: ["start 70%", "end 58%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28 });
  const numeralY = useTransform(progress, [0, 1], ["0%", "-10%"]);

  return (
    <div className="process-experience" ref={target}>
      <aside className="process-sticky" aria-hidden="true">
        <span>PROJEKT / 0{active + 1}</span>
        <motion.strong key={active} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} style={{ y: numeralY }}>
          {steps[active][0]}
        </motion.strong>
        <div className="process-signal"><i /><i /><i /></div>
      </aside>
      <div className="process-list">
        <div className="process-line"><motion.span style={{ scaleY: progress }} /></div>
        {steps.map(([no, title, text], index) => (
          <motion.article
            className={`process-step ${active === index ? "is-active" : ""}`}
            key={no}
            onViewportEnter={() => setActive(index)}
            viewport={{ amount: 0.58 }}
            initial={{ opacity: 0.45, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="process-dot" />
            <span className="service-no">{no}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
