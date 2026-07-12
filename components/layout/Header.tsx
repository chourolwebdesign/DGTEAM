"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";

const menuEase = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [veiled,setVeiled] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const lastY = useRef(0);
  const reduced = useReducedMotion();
  useEffect(()=>{
    const onScroll=()=>{
      const y=window.scrollY;
      setScrolled(y>28);
      setVeiled(y>lastY.current&&y>180);
      lastY.current=y;
    };
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return()=>window.removeEventListener("scroll",onScroll);
  },[]);
  useEffect(()=>{ document.body.style.overflow=open?"hidden":""; const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape"){setOpen(false);trigger.current?.focus();}}; document.addEventListener("keydown",onKey); return()=>{document.removeEventListener("keydown",onKey);document.body.style.overflow=""};},[open]);
  return <header className={`site-header ${scrolled?"scrolled":""} ${veiled&&!open?"nav-veiled":""}`}>
    <div className="header-inner">
      <Link href="/" className="brand" aria-label="DG Team Startseite"><span>DG</span> TEAM</Link>
      <nav className="desktop-nav" aria-label="Hauptnavigation">
        <div className="nav-services"><Link href="/leistungen">Leistungen</Link><div className="mega-menu">{services.map(service=><Link key={service.slug} href={`/leistungen/${service.slug}`}><small>{service.number}</small>{service.shortTitle}<ArrowUpRight size={15}/></Link>)}</div></div>
        {site.nav.slice(1).map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className="header-actions"><a className="header-phone" href={site.phoneHref} aria-label={`DG Team anrufen: ${site.phone}`}><Phone size={18}/></a><Link className="button button-primary header-cta" href="/angebot">Angebot anfragen</Link><button ref={trigger} className="menu-trigger" onClick={()=>setOpen(!open)} aria-label={open?"Menü schließen":"Menü öffnen"} aria-expanded={open}><Menu/></button></div>
    </div>
    <AnimatePresence>
      {open && <motion.div
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobilnavigation"
        initial={reduced?false:{opacity:0,clipPath:"inset(0 0 100% 0)"}}
        animate={{opacity:1,clipPath:"inset(0 0 0% 0)"}}
        exit={reduced?undefined:{opacity:0,clipPath:"inset(0 0 100% 0)",transition:{duration:.32,ease:menuEase}}}
        transition={{duration:.48,ease:menuEase}}
      >
        <button className="mobile-close" onClick={()=>setOpen(false)} aria-label="Menü schließen"><X/></button>
        <motion.nav
          initial={reduced?false:"hidden"}
          animate="show"
          variants={{hidden:{},show:{transition:{staggerChildren:.055,delayChildren:.16}}}}
        >
          {[...site.nav.map((item,index)=>({...item,no:`0${index+1}`})),{href:"/angebot",label:"Angebot anfragen",no:"07"}].map((item)=>(
            <motion.div key={item.href} variants={{hidden:{opacity:0,y:34,rotate:1.2},show:{opacity:1,y:0,rotate:0,transition:{duration:.55,ease:menuEase}}}}>
              <Link href={item.href} onClick={()=>setOpen(false)}><small>{item.no}</small>{item.label}</Link>
            </motion.div>
          ))}
        </motion.nav>
        <motion.div
          className="mobile-contact"
          initial={reduced?false:{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{duration:.5,delay:.5,ease:menuEase}}
        ><a href={site.phoneHref}>{site.phone}</a><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp öffnen</a><span>{site.hours}</span></motion.div>
      </motion.div>}
    </AnimatePresence>
  </header>;
}
