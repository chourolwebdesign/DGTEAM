import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
export const metadata:Metadata={title:"Leistungen",description:"Entrümpelung, Entkernung, Industrie- und Baustellenräumung sowie abgestimmte Anschlussleistungen.",alternates:{canonical:"/leistungen"}};
export default function ServicesPage(){return <><section className="page-hero"><div className="container"><span className="eyebrow">Leistungssystem</span><h1>Klare Leistungen für nutzbare Flächen.</h1><p className="lead">Vom beweglichen Hausrat bis zum vereinbarten Rückbau nicht tragender Bauteile: Der Umfang wird vor Projektbeginn verständlich abgegrenzt.</p></div></section><section className="section"><div className="container"><div className="services-grid">{services.map(service=><Link className="service-card" key={service.slug} href={`/leistungen/${service.slug}`}><span className="service-no">{service.number} / 05</span><div><h2>{service.title}</h2><p>{service.description}</p></div><span className="service-link">Details ansehen <ArrowRight size={18}/></span></Link>)}</div></div></section></>}
