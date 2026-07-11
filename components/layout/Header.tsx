"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";

export function Header() {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(()=>{ const onScroll=()=>setScrolled(window.scrollY>28); onScroll(); window.addEventListener("scroll",onScroll,{passive:true}); return()=>window.removeEventListener("scroll",onScroll); },[]);
  useEffect(()=>{ document.body.style.overflow=open?"hidden":""; const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape"){setOpen(false);trigger.current?.focus();}}; document.addEventListener("keydown",onKey); return()=>{document.removeEventListener("keydown",onKey);document.body.style.overflow=""};},[open]);
  return <header className={`site-header ${scrolled?"scrolled":""}`}>
    <div className="header-inner">
      <Link href="/" className="brand" aria-label="DG Team Startseite"><span>DG</span> TEAM</Link>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        <div className="nav-services"><Link href="/leistungen">Leistungen</Link><div className="mega-menu">{services.map(service=><Link key={service.slug} href={`/leistungen/${service.slug}`}><small>{service.number}</small>{service.shortTitle}<ArrowUpRight size={15}/></Link>)}</div></div>
        {site.nav.slice(1).map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className="header-actions"><a className="header-phone" href={site.phoneHref} aria-label={`DG Team anrufen: ${site.phone}`}><Phone size={18}/></a><Link className="button button-primary header-cta" href="/angebot">Angebot anfragen</Link><button ref={trigger} className="menu-trigger" onClick={()=>setOpen(!open)} aria-label={open?"Menü schließen":"Menü öffnen"} aria-expanded={open}><Menu/></button></div>
    </div>
    {open && <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobilnavigation"><button className="mobile-close" onClick={()=>setOpen(false)} aria-label="Menü schließen"><X/></button><nav>{site.nav.map((item,index)=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}><small>0{index+1}</small>{item.label}</Link>)}<Link href="/angebot" onClick={()=>setOpen(false)}><small>07</small>Angebot anfragen</Link></nav><div className="mobile-contact"><a href={site.phoneHref}>{site.phone}</a><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp öffnen</a><span>{site.hours}</span></div></div>}
  </header>;
}
