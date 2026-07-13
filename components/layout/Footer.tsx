import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";

export function Footer(){return <>
  <footer className="footer"><div className="container"><div className="footer-grid">
    <div><Link className="footer-brand" href="/">DG TEAM<span className="red">.</span></Link><p>Entrümpelung, Entkernung und Baustellenräumung für private und gewerbliche Auftraggeber – deutschlandweit im Einsatz, mit Firmensitz in Krauchenwies.</p></div>
    <div><h3>Leistungen</h3>{services.map(service=><Link key={service.slug} href={`/leistungen/${service.slug}`}>{service.shortTitle}</Link>)}</div>
    <div><h3>Unternehmen</h3><Link href="/#ueber-uns">Über uns</Link><Link href="/#ablauf">Ablauf</Link><Link href="/einsatzgebiete">Einsatzgebiete</Link><Link href="/karriere">Karriere</Link><Link href="/kontakt">Kontakt</Link><Link href="/faq">FAQ</Link></div>
    <div><h3>Kontakt</h3><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>{site.address.street}<br/>{site.address.postalCode} {site.address.city}<br/>{site.hours}</p></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} DG Team</span><span><Link href="/impressum">Impressum</Link> · <Link href="/datenschutz">Datenschutz</Link> · <Link href="/agb">AGB</Link></span></div></div></footer>
  <a className="floating-whatsapp" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="DG Team per WhatsApp schreiben"><MessageCircle/></a>
  <nav className="mobile-bar" aria-label="Schnellkontakt"><a href={site.phoneHref}>Anrufen</a><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><Link href="/angebot">Angebot</Link></nav>
  </>}
