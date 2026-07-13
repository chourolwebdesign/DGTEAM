"use client";
import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/content/services";

export function Accordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  return <div className="faq-list">{items.map((item,index) => <div className={`faq-item ${open === index ? "is-open" : ""}`} key={item.question}>
    <button className="faq-question" aria-expanded={open === index} aria-controls={`${baseId}-${index}`} onClick={() => setOpen(open === index ? null : index)}>
      <span>{item.question}</span><Plus size={20} aria-hidden="true" />
    </button>
    <div className="faq-answer-wrap" id={`${baseId}-${index}`} aria-hidden={open !== index}>
      <div className="faq-answer"><div className="faq-answer-inner">{item.answer}</div></div>
    </div>
  </div>)}</div>;
}
