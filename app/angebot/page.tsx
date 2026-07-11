import type { Metadata } from "next";
import { QuoteConfigurator } from "@/components/forms/QuoteConfigurator";

export const metadata:Metadata={title:"Unverbindliches Angebot anfragen",description:"Beschreiben Sie Ihr Entrümpelungs-, Entkernungs- oder Räumungsprojekt in fünf einfachen Schritten.",alternates:{canonical:"/angebot"}};
export default function QuotePage(){return <><section className="page-hero"><div className="container"><span className="eyebrow">Unverbindliche Projektanfrage</span><h1>In fünf Schritten zu klaren Verhältnissen.</h1><p className="lead">Teilen Sie uns die wichtigsten Eckdaten mit. DG Team prüft Ihr Projekt persönlich – ohne feste Fantasiepreise und ohne automatische Verpflichtung.</p></div></section><section className="section"><div className="container" style={{maxWidth:'1080px'}}><QuoteConfigurator/></div></section></>}
