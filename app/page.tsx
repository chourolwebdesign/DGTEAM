import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Users, Building2 } from "lucide-react";
import { CinematicHero } from "@/components/home/CinematicHero";
import { TrustRibbon } from "@/components/home/TrustRibbon";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { services } from "@/content/services";
import { federalStates } from "@/content/site";

const benefits=[
  ["01","Strukturiert","Strukturierte Planung und nachvollziehbare Abläufe."],
  ["02","Schnell","Flexible Terminplanung, auch bei kurzfristigen Projekten."],
  ["03","Flexibel","Einsatzteams passend zu Projektumfang und Einsatzort."],
  ["04","Persönlich","Direkte Ansprechpartner und klare Kommunikation."],
  ["05","Komplett","Von der Räumung bis zur vereinbarten Übergabe."]
];
const steps=[
  ["01","Anfrage stellen","Sie übermitteln uns die wichtigsten Informationen zu Ihrem Objekt."],
  ["02","Planung & Abstimmung","Wir prüfen den Umfang, klären offene Punkte und planen die Durchführung."],
  ["03","Umsetzung","Die vereinbarten Arbeiten werden strukturiert und effizient ausgeführt."],
  ["04","Übergabe","Die Immobilie wird im vereinbarten Zustand übergeben."]
];
const audiences=[
  ["Privatpersonen","Diskrete Räumung von Wohnungen, Häusern, Kellern oder Nachlassobjekten."],
  ["Eigentümer & Vermieter","Vorbereitung von Immobilien für Neuvermietung, Verkauf oder Sanierung."],
  ["Hausverwaltungen","Planbare Räumung und abgestimmte Übergabe von Wohn- und Gewerbeflächen."],
  ["Immobilien & Investoren","Klare Flächen als Grundlage für Umbau, Modernisierung oder neue Nutzung."],
  ["Gewerbe & Industrie","Flexible Räumung von Lager-, Produktions-, Gewerbe- und Baustellenflächen."],
  ["Bauunternehmen","Projektbezogene oder wiederkehrende Unterstützung nach vereinbartem Umfang."]
];
const homeFaq=[
  {question:"Was ist der Unterschied zwischen Entrümpelung, Entkernung und Baustellenräumung?",answer:"Entrümpelung betrifft überwiegend bewegliche Gegenstände. Entkernung bezeichnet die vereinbarte Entfernung fest verbauter, nicht tragender Elemente. Industrie- und Baustellenräumung richtet sich an gewerbliche Projekte mit vereinbarten Restmaterialien, Verpackungen oder losen Rückständen."},
  {question:"Wie werden die Kosten kalkuliert?",answer:"Kosten hängen von Objektgröße, Zugänglichkeit, Menge, Materialien und erforderlichem Arbeitsumfang ab. Deshalb erstellt DG Team ein individuelles Angebot statt pauschaler Fantasiepreise."},
  {question:"Ist DG Team deutschlandweit tätig?",answer:"Ja. Der Firmensitz ist in Krauchenwies, Baden-Württemberg; Einsätze werden in allen 16 Bundesländern geplant. Je nach Entfernung kann eine vorab kommunizierte Anfahrtspauschale entstehen."},
  {question:"Führt DG Team Arbeiten an tragenden Bauteilen durch?",answer:"Nein. DG Team entfernt nur vereinbarte nicht tragende, statisch nicht relevante Bauteile und greift nicht in die Gebäudestatik ein."},
  {question:"Ist die Angebotsanfrage verbindlich?",answer:"Nein. Die Anfrage ist kostenfrei und unverbindlich. Nach der Prüfung meldet sich DG Team persönlich."}
];

export default function Home(){return <>
  <CinematicHero/><TrustRibbon/>
  <section className="section"><div className="container intro-grid"><div><span className="eyebrow">Klare Flächen. Klare Abläufe.</span><div className="tech-number">01</div></div><div><h2 className="display">Vom ersten Gegenstand bis zur nutzbaren Immobilie.</h2><p className="lead">Ob einzelne Wohnung, vollständige Haushaltsauflösung, Gewerbefläche oder umfangreiche Baustelle: DG Team plant, koordiniert und realisiert Räumungs- und Entkernungsarbeiten mit klaren Abläufen und persönlicher Abstimmung.</p></div></div></section>
  <section className="section" style={{paddingTop:0}}><div className="container"><span className="eyebrow">Transformation</span><h2 className="display">Der Unterschied ist sichtbar.</h2><p className="lead">Von belegter oder unfertiger Fläche zu klarer, planbarer Nutzung. Bedienen Sie den Regler per Maus, Tastatur oder Touch.</p><div style={{marginTop:'3rem'}}><BeforeAfterSlider/></div></div></section>
  <section className="section" style={{background:'#0d0d0d'}}><div className="container split-grid"><div><span className="eyebrow">Warum DG Team</span><h2 className="display">Präzision zeigt sich im Ablauf.</h2><p className="lead">Fünf Grundsätze, die aus komplexen Aufgaben planbare Projekte machen.</p><div style={{marginTop:'2rem'}}><Button href="/angebot">Projekt beschreiben <ArrowRight size={17}/></Button></div></div><div className="benefit-list">{benefits.map(([no,title,text])=><div className="benefit" key={no}><span className="service-no">{no}</span><strong>{title}</strong><p>{text}</p></div>)}</div></div></section>
  <section className="section" id="leistungen"><div className="container"><span className="eyebrow">Leistungssystem</span><h2 className="display">Unsere Leistungen für klare und nutzbare Flächen.</h2><div className="services-grid">{services.map(service=><Link className="service-card" key={service.slug} href={`/leistungen/${service.slug}`}><span className="service-no">{service.number} / 05</span><div><h3>{service.title}</h3><p>{service.description}</p></div><span className="service-link">Leistung ansehen <ArrowRight size={18}/></span></Link>)}</div></div></section>
  <section className="section" id="ablauf" style={{background:'#0d0d0d'}}><div className="container"><span className="eyebrow">Von Anfrage bis Übergabe</span><h2 className="display">In vier Schritten zur nutzbaren Immobilie.</h2><div className="timeline">{steps.map(([no,title,text])=><div className="step" key={no}><span className="service-no">{no}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
  <section className="section"><div className="container"><span className="eyebrow">Projektgalerie</span><h2 className="display">Arbeit, die Platz schafft.</h2><div className="panel" style={{marginTop:'3rem',padding:'clamp(2rem,6vw,5rem)',textAlign:'center'}}><CheckCircle2 className="red" size={34}/><h3 style={{fontSize:'clamp(1.5rem,3vw,2.5rem)'}}>Verifizierte Projektaufnahmen folgen.</h3><p className="lead" style={{marginInline:'auto'}}>Dieser Bereich ist technisch vorbereitet. Vor der Veröffentlichung werden ausschließlich freigegebene, echte Projektbilder und -angaben ergänzt.</p></div></div></section>
  <section className="section"><div className="container"><span className="eyebrow">Auftraggeber</span><h2 className="display">Für private, gewerbliche und institutionelle Auftraggeber.</h2><div className="audience-list">{audiences.map(([title,text])=><div className="audience" key={title}><strong>{title}</strong><p>{text}</p></div>)}</div></div></section>
  <section className="section coverage"><div className="container split-grid"><div><span className="eyebrow" style={{color:'#555'}}>Einsatzgebiete</span><h2 className="display">Von Krauchenwies aus deutschlandweit im Einsatz.</h2><p className="lead">Der Firmensitz von DG Team befindet sich in Krauchenwies, Baden-Württemberg. Flexible Einsatzteams arbeiten projektbezogen in ganz Deutschland – ohne fälschlich lokale Niederlassungen zu behaupten.</p><div className="state-cloud">{federalStates.map(state=><span key={state}>{state}</span>)}</div><div style={{marginTop:'2rem'}}><Button href="/einsatzgebiete">Projekt in Ihrer Region anfragen</Button></div></div><div className="map-mark" role="img" aria-label="Stilisierte Deutschlandkarte mit markiertem Firmensitz Krauchenwies"><span className="map-dot"><MapPin size={16}/> Firmensitz Krauchenwies</span></div></div></section>
  <section className="section" id="ueber-uns"><div className="container split-grid"><div><span className="eyebrow">DG Team</span><h2 className="display">Professionell vorbereitet. Persönlich begleitet.</h2></div><div><p className="lead">DG Team ist auf die Vorbereitung von Immobilien für Sanierung, Verkauf oder neue Nutzung spezialisiert. Von einzelnen Räumen bis zu umfangreichen Gewerbe- und Baustellenflächen übernehmen wir vereinbarte Räumungs- und Entkernungsarbeiten strukturiert und zuverlässig.</p><p className="lead">Persönliche Betreuung, transparente Kommunikation und eine saubere Durchführung stehen im Mittelpunkt.</p><blockquote style={{margin:'3rem 0 0',padding:'2rem 0',borderBlock:'1px solid var(--border)',fontSize:'clamp(1.6rem,3vw,3rem)',fontWeight:700,letterSpacing:'-.04em'}}>Klare Kommunikation.<br/>Klare Abläufe. <span className="red">Klare Flächen.</span></blockquote></div></div></section>
  <section className="section" style={{background:'#111'}}><div className="container split-grid"><div><span className="eyebrow">Karriere</span><h2 className="display">Werde Teil von DG Team.</h2><p className="lead">Zuverlässige Mitarbeitende für Entrümpelung, Entkernung und Rückbau – in Vollzeit, Teilzeit, als Minijob oder Ferienjob.</p><Button href="/karriere">Karriere entdecken <Users size={18}/></Button></div><div className="panel" style={{padding:'clamp(2rem,5vw,4rem)'}}><Building2 className="red" size={36}/><h3 style={{fontSize:'2rem'}}>Mit Verantwortung wachsen.</h3><p className="lead">Wer zuverlässig arbeitet, kann perspektivisch mehr Verantwortung übernehmen – etwa in der Koordination eines Einsatzteams. Konkrete Entwicklungsschritte werden individuell besprochen.</p></div></div></section>
  <section className="section"><div className="container"><span className="eyebrow">Anfrage</span><h2 className="display">Ihr Projekt beginnt mit wenigen Angaben.</h2><div className="quote-shell"><aside className="quote-aside"><span className="service-no">SCHNELLKONTAKT</span><h3 style={{fontSize:'2rem'}}>Noch nicht alle Details parat?</h3><p className="lead">Eine kurze Nachricht genügt. Für ein genaueres Angebot nutzen Sie den fünfstufigen Konfigurator.</p><Button href="/angebot">Zum Angebotskonfigurator</Button></aside><ContactForm/></div></div></section>
  <section className="section" style={{background:'#0d0d0d'}}><div className="container split-grid"><div><span className="eyebrow">FAQ</span><h2 className="display">Klare Antworten vor dem ersten Gespräch.</h2></div><Accordion items={homeFaq}/></div></section>
  <section className="section"><div className="container panel" style={{padding:'clamp(2rem,7vw,7rem)',background:'radial-gradient(circle at 80% 50%,rgba(212,0,0,.22),transparent 28%),#111'}}><span className="eyebrow">Nächster Schritt</span><h2 className="display">Bereit für klare Verhältnisse?</h2><p className="lead">Beschreiben Sie Ihr Projekt in wenigen Schritten und laden Sie auf Wunsch später Fotos hoch. DG Team prüft Ihre Angaben und meldet sich persönlich bei Ihnen.</p><div className="hero-actions"><Button href="/angebot">Jetzt Angebot anfragen</Button><Button href="/kontakt" variant="secondary">Kontakt aufnehmen</Button></div></div></section>
  </>}
