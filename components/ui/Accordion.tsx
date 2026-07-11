"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/content/services";

export function Accordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{items.map((item,index) => <div className="faq-item" key={item.question}>
    <button className="faq-question" aria-expanded={open === index} aria-controls={`faq-${index}`} onClick={() => setOpen(open === index ? null : index)}>
      <span>{item.question}</span>{open === index ? <Minus size={20}/> : <Plus size={20}/>} 
    </button>
    {open === index && <div className="faq-answer" id={`faq-${index}`}>{item.answer}</div>}
  </div>)}</div>;
}
