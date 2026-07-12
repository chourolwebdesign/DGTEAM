"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Pause, Phone, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { site } from "@/content/site";

const stages = [
  {
    no: "01",
    title: "Vorher / Bestand",
    short: "Bestand erfassen",
    image: "/images/hero-before.png",
    alt: "KI-generierte Demoansicht einer belegten Gewerbefläche vor der Räumung",
    note: "Ausgangslage verstehen",
  },
  {
    no: "02",
    title: "Räumung / Entkernung",
    short: "Strukturiert umsetzen",
    image: "/images/hero-industrial-demo.png",
    alt: "KI-generierte Demoansicht eines Teams beim Rückbau nicht tragender Bauteile",
    note: "Abläufe koordinieren",
  },
  {
    no: "03",
    title: "Übergabe / Besenrein",
    short: "Fläche freigeben",
    image: "/images/hero-after.png",
    alt: "KI-generierte Demoansicht einer geräumten, besenreinen Gewerbefläche",
    note: "Raum für Neues schaffen",
  },
];

export function CinematicHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduced = useReducedMotion();
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused || hidden || reduced) return;
    const timer = setTimeout(() => setActive((value) => (value + 1) % stages.length), 6200);
    return () => clearTimeout(timer);
  }, [active, paused, hidden, reduced]);

  function select(index: number) {
    setActive(index);
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 12000);
  }

  function move(direction: number) {
    select((active + direction + stages.length) % stages.length);
  }

  return (
    <section className="hero hero-cinematic" aria-label="DG Team Transformation">
      <div className="hero-media" onPointerDown={() => setPaused(true)}>
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            className="hero-frame"
            key={stages[active].image}
            initial={reduced ? false : { opacity: 0, scale: 1.08, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: reduced ? 1 : 1.025, filter: "blur(0px)" }}
            exit={reduced ? undefined : { opacity: 0, scale: 0.99, filter: "blur(3px)" }}
            transition={{ opacity: { duration: 0.95 }, scale: { duration: 6.8, ease: "linear" }, filter: { duration: 0.8 } }}
            drag={reduced ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 60) move(info.offset.x < 0 ? 1 : -1); }}
          >
            <Image
              priority={active === 0}
              fill
              sizes="100vw"
              src={stages[active].image}
              alt={stages[active].alt}
            />
          </motion.div>
        </AnimatePresence>
        <div className="hero-overlay" />
        <div className="hero-vignette" />
        <div className="hero-scan" aria-hidden="true" />
        <div className="hero-tech-grid" aria-hidden="true" />
      </div>

      <div className="hero-edge-label" aria-hidden="true"><span>PRECISION</span><i /> <span>IN MOTION</span></div>
      <div className="hero-location"><span className="live-dot" /> DEUTSCHLANDWEIT / KRAUCHENWIES</div>

      <div className="container hero-content">
        <motion.div
          className="hero-copy-stack"
          initial={reduced ? false : "hidden"}
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.22 } } }}
        >
          <motion.span className="eyebrow" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}>
            Entrümpelung · Entkernung · Baustellenräumung
          </motion.span>
          <h1 aria-label="Wir schaffen Platz für Ihre Vision.">
            {["Wir schaffen", "Platz", "für Ihre Vision."].map((line, index) => (
              <span className={`hero-line ${index === 1 ? "red" : ""}`} key={line}>
                <motion.span variants={{ hidden: { y: "115%", rotate: 2 }, show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}>{line}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p className="hero-copy" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}>
            Von der Räumung bis zur besenreinen Übergabe: DG Team bereitet Immobilien strukturiert, zuverlässig und deutschlandweit für die nächste Nutzung vor.
          </motion.p>
          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
            <Magnetic><Button href="/angebot">Jetzt Angebot anfragen <ArrowRight size={18} /></Button></Magnetic>
            <Button href="/leistungen" variant="secondary">Leistungen ansehen</Button>
            <a className="button hero-phone" href={site.phoneHref}><Phone size={16} /> Direkt anrufen</a>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            className="hero-stage-caption"
            key={active}
            initial={reduced ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, x: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <strong>{stages[active].no}</strong>
            <div><span>{stages[active].note}</span><p>{stages[active].short}</p></div>
          </motion.div>
        </AnimatePresence>

        <div className="stage-rail">
          {stages.map((stage, index) => (
            <button key={stage.no} className="stage-button" onClick={() => select(index)} aria-current={active === index} aria-label={`Hero-Stufe ${stage.no}: ${stage.title}`}>
              <span className="stage-meta"><small>{stage.no}</small><b>{stage.title}</b></span>
              <span className="stage-progress" aria-hidden="true">
                {active === index && <motion.i key={`${active}-${paused}`} initial={{ scaleX: 0 }} animate={{ scaleX: paused ? 0 : 1 }} transition={{ duration: paused ? 0 : 6.2, ease: "linear" }} />}
              </span>
            </button>
          ))}
          <button className="hero-pause" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Hero-Animation fortsetzen" : "Hero-Animation pausieren"}>
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </div>
      </div>

      <a className="hero-scroll" href="#intro"><span>Scrollen</span><ArrowDown size={16} /></a>
    </section>
  );
}
