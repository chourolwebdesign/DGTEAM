"use client";

import { motion, useReducedMotion } from "framer-motion";

const motionTags = { h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p } as const;

export function TextReveal({
  text,
  as = "h2",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: keyof typeof motionTags;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motionTags[as];

  return (
    <MotionTag
      className={`text-reveal ${className}`}
      aria-label={text}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.6, margin: "0px 0px -6% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
    >
      {words.map((word, index) => (
        <span className="text-reveal-mask" aria-hidden="true" key={`${word}-${index}`}>
          <motion.span
            className="text-reveal-word"
            variants={{
              hidden: { y: "112%", rotate: 2.5 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
