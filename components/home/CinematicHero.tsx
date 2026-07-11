"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

const stages=[{no:"01",title:"Vorher / Bestand"},{no:"02",title:"Räumung / Entkernung"},{no:"03",title:"Übergabe / Besenrein"}];
export function CinematicHero(){const [active,setActive]=useState(1);const [paused,setPaused]=useState(false);useEffect(()=>{if(paused||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const id=setInterval(()=>setActive(value=>(value+1)%3),5500);return()=>clearInterval(id)},[paused]);return <section className="hero" onPointerDown={()=>setPaused(true)}>
  <div className="hero-media"><Image priority fill sizes="100vw" src="/images/hero-industrial-demo.png" alt="Demoaufnahme eines DG-Team-Einsatzszenarios in einer Gewerbefläche" style={{filter:active===0?'grayscale(1) brightness(.62)':active===2?'brightness(1.08) saturate(.55)':'brightness(.88) saturate(.7)'}}/><div className="hero-overlay"/></div>
  <div className="container hero-content"><span className="eyebrow">Entrümpelung · Entkernung · Baustellenräumung</span><h1>Wir schaffen <span className="red">Platz</span> für Ihre Vision.</h1><p className="hero-copy">Von der Räumung bis zur besenreinen Übergabe: DG Team bereitet Immobilien strukturiert, zuverlässig und deutschlandweit für die nächste Nutzung vor.</p>
  <div className="hero-actions"><Button href="/angebot">Jetzt Angebot anfragen <ArrowRight size={18}/></Button><Button href="/leistungen" variant="secondary">Leistungen ansehen</Button><a className="button" href={site.phoneHref}><Phone size={16}/> Direkt anrufen</a></div>
  <div className="stage-rail">{stages.map((stage,index)=><button key={stage.no} className="stage-button" onClick={()=>setActive(index)} aria-current={active===index} aria-label={`Hero-Stufe ${stage.no}: ${stage.title}`}><small>{stage.no}</small><span>{stage.title}</span></button>)}</div></div>
  </section>}
