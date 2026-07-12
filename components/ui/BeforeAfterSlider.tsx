"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider() {
  const [position,setPosition] = useState(48);
  const shell = useRef<HTMLDivElement>(null);
  const interacted = useRef(false);
  const inView = useInView(shell,{once:true,amount:0.45});
  const reduced = useReducedMotion();

  useEffect(()=>{
    if(!inView||reduced||interacted.current) return;
    const sweep = animate(48,66,{duration:1.1,delay:.5,ease:[0.22,1,0.36,1],onUpdate:(value)=>{if(!interacted.current)setPosition(value);}});
    const settle = setTimeout(()=>{if(!interacted.current)animate(66,48,{duration:1,ease:[0.22,1,0.36,1],onUpdate:(value)=>{if(!interacted.current)setPosition(value);}});},1750);
    return()=>{sweep.stop();clearTimeout(settle);};
  },[inView,reduced]);

  function onInput(value:number){
    interacted.current=true;
    setPosition(value);
  }

  return <div className="transformation-shell" ref={shell}>
    <div className="comparison">
      <Image className="comparison-before" src="/images/hero-before.png" alt="KI-generierte Demoansicht einer belegten Gewerbefläche vor der Räumung" fill sizes="(max-width: 900px) 100vw, 1300px" />
      <div className="comparison-after-wrap" style={{clipPath:`inset(0 ${100-position}% 0 0)`}}><Image className="comparison-after" src="/images/hero-after.png" alt="KI-generierte Demoansicht einer geräumten, besenreinen Gewerbefläche" fill sizes="(max-width: 900px) 100vw, 1300px" /></div>
      <span className="comparison-label before">Vorher · Demo</span><span className="comparison-label after">Nachher · Demo</span>
      <span className="comparison-handle" style={{left:`${position}%`}} aria-hidden><MoveHorizontal size={19}/></span>
      <input className="comparison-range" type="range" min="10" max="90" value={position} onChange={(event)=>onInput(Number(event.target.value))} aria-label="Vergleich zwischen Vorher- und Nachheransicht" />
    </div>
    <p className="lead" style={{fontSize:'.82rem',margin:'1rem 0 0'}}>Design-Demonstration – wird vor Veröffentlichung durch verifizierte Projektaufnahmen ersetzt.</p>
  </div>;
}
