"use client";
import Image from "next/image";
import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider() {
  const [position,setPosition] = useState(48);
  return <div className="transformation-shell">
    <div className="comparison">
      <Image className="comparison-before" src="/images/hero-industrial-demo.png" alt="Demoansicht einer Gewerbefläche vor der visuellen Aufbereitung" fill sizes="(max-width: 900px) 100vw, 1300px" />
      <div className="comparison-after-wrap" style={{width:`${position}%`}}><Image className="comparison-after" src="/images/hero-industrial-demo.png" alt="Demoansicht einer klaren, nutzbaren Gewerbefläche" fill sizes="(max-width: 900px) 100vw, 1300px" /></div>
      <span className="comparison-label before">Vorher · Demo</span><span className="comparison-label after">Nachher · Demo</span>
      <span className="comparison-handle" style={{left:`${position}%`}} aria-hidden><MoveHorizontal size={19}/></span>
      <input className="comparison-range" type="range" min="10" max="90" value={position} onChange={(event)=>setPosition(Number(event.target.value))} aria-label="Vergleich zwischen Vorher- und Nachheransicht" />
    </div>
    <p className="lead" style={{fontSize:'.82rem',margin:'1rem 0 0'}}>Design-Demonstration – wird vor Veröffentlichung durch verifizierte Projektaufnahmen ersetzt.</p>
  </div>;
}
