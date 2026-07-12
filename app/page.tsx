import { ArrowRight, CheckCircle2, MapPin, Users, Building2 } from "lucide-react";
import { CinematicHero } from "@/components/home/CinematicHero";
import { TrustRibbon } from "@/components/home/TrustRibbon";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { federalStates } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedProcess } from "@/components/home/AnimatedProcess";
import { MotionServices } from "@/components/home/MotionServices";

const benefits = [
  ["01", "Strukturiert", "Strukturierte Planung und nachvollziehbare Abläufe."],
  ["02", "Schnell", "Flexible Terminplanung, auch bei kurzfristigen Projekten."],
  ["03", "Flexibel", "Einsatzteams passend zu Projektumfang und Einsatzort."],
  ["04", "Persönlich", "Direkte Ansprechpartner und klare Kommunikation."],
  ["05", "Komplett", "Von der Räumung bis zur vereinbarten Übergabe."],
];

const audiences = [
  ["Privatpersonen", "Diskrete Räumung von Wohnungen, Häusern, Kellern oder Nachlassobjekten."],
  ["Eigentümer & Vermieter", "Vorbereitung von Immobilien für Neuvermietung, Verkauf oder Sanierung."],
  ["Hausverwaltungen", "Planbare Räumung und abgestimmte Übergabe von Wohn- und Gewerbeflächen."],
  ["Immobilien & Investoren", "Klare Flächen als Grundlage für Umbau, Modernisierung oder neue Nutzung."],
  ["Gewerbe & Industrie", "Flexible Räumung von Lager-, Produktions-, Gewerbe- und Baustellenflächen."],
  ["Bauunternehmen", "Projektbezogene oder wiederkehrende Unterstützung nach vereinbartem Umfang."],
];

const homeFaq = [
  { question: "Was ist der Unterschied zwischen Entrümpelung, Entkernung und Baustellenräumung?", answer: "Entrümpelung betrifft überwiegend bewegliche Gegenstände. Entkernung bezeichnet die vereinbarte Entfernung fest verbauter, nicht tragender Elemente. Industrie- und Baustellenräumung richtet sich an gewerbliche Projekte mit vereinbarten Restmaterialien, Verpackungen oder losen Rückständen." },
  { question: "Wie werden die Kosten kalkuliert?", answer: "Kosten hängen von Objektgröße, Zugänglichkeit, Menge, Materialien und erforderlichem Arbeitsumfang ab. Deshalb erstellt DG Team ein individuelles Angebot statt pauschaler Fantasiepreise." },
  { question: "Ist DG Team deutschlandweit tätig?", answer: "Ja. Der Firmensitz ist in Krauchenwies, Baden-Württemberg; Einsätze werden in allen 16 Bundesländern geplant. Je nach Entfernung kann eine vorab kommunizierte Anfahrtspauschale entstehen." },
  { question: "Führt DG Team Arbeiten an tragenden Bauteilen durch?", answer: "Nein. DG Team entfernt nur vereinbarte nicht tragende, statisch nicht relevante Bauteile und greift nicht in die Gebäudestatik ein." },
  { question: "Ist die Angebotsanfrage verbindlich?", answer: "Nein. Die Anfrage ist kostenfrei und unverbindlich. Nach der Prüfung meldet sich DG Team persönlich." },
];

export default function Home() {
  return (
    <>
      <CinematicHero />
      <TrustRibbon />

      <section className="section intro-section" id="intro">
        <Reveal className="container intro-grid" amount={0.25}>
          <div className="intro-index"><span className="eyebrow">Klare Flächen. Klare Abläufe.</span><div className="tech-number">01</div></div>
          <div><span className="section-coordinate">47°59&apos;N / 09°14&apos;E</span><h2 className="display">Vom ersten Gegenstand bis zur nutzbaren Immobilie.</h2><p className="lead">Ob einzelne Wohnung, vollständige Haushaltsauflösung, Gewerbefläche oder umfangreiche Baustelle: DG Team plant, koordiniert und realisiert Räumungs- und Entkernungsarbeiten mit klaren Abläufen und persönlicher Abstimmung.</p></div>
        </Reveal>
      </section>

      <section className="section transformation-section">
        <div className="container">
          <Reveal><span className="eyebrow">Transformation</span><h2 className="display">Der Unterschied ist sichtbar.</h2><p className="lead">Von belegter Fläche zu klarer, planbarer Nutzung. Ziehen Sie die Trennlinie mit Maus, Tastatur oder Touch.</p></Reveal>
          <Reveal delay={0.12} amount={0.1}><div className="transformation-stage"><BeforeAfterSlider /><span className="vertical-caption">CHAOS → STRUCTURE → CLEAR SPACE</span></div></Reveal>
        </div>
      </section>

      <section className="section reasons-section">
        <div className="container split-grid reasons-layout">
          <Reveal className="reasons-sticky" direction="left"><span className="eyebrow">Warum DG Team</span><h2 className="display">Präzision zeigt sich im Ablauf.</h2><p className="lead">Fünf Grundsätze, die aus komplexen Aufgaben planbare Projekte machen.</p><div style={{ marginTop: "2rem" }}><Button href="/angebot">Projekt beschreiben <ArrowRight size={17} /></Button></div></Reveal>
          <Stagger className="benefit-list">{benefits.map(([no, title, text]) => <StaggerItem className="benefit" key={no}><span className="service-no">{no}</span><strong>{title}</strong><p>{text}</p><span className="benefit-arrow">↗</span></StaggerItem>)}</Stagger>
        </div>
      </section>

      <section className="section services-section" id="leistungen">
        <div className="container">
          <Reveal><span className="eyebrow">Leistungssystem</span><h2 className="display">Unsere Leistungen für klare und nutzbare Flächen.</h2><p className="lead">Ein klar abgegrenztes Leistungssystem – vom beweglichen Inventar bis zum vereinbarten Rückbau nicht tragender Bauteile.</p></Reveal>
          <MotionServices />
        </div>
      </section>

      <section className="section process-section" id="ablauf">
        <div className="container">
          <Reveal><span className="eyebrow">Von Anfrage bis Übergabe</span><h2 className="display">In vier Schritten zur nutzbaren Immobilie.</h2></Reveal>
          <AnimatedProcess />
        </div>
      </section>

      <section className="section project-section">
        <Reveal className="container">
          <span className="eyebrow">Projektgalerie</span><h2 className="display">Arbeit, die Platz schafft.</h2>
          <div className="project-placeholder"><div className="project-placeholder-visual"><span>DG / CASE STUDY</span><strong>COMING<br />SOON</strong><i /></div><div><CheckCircle2 className="red" size={34} /><h3>Verifizierte Projektaufnahmen folgen.</h3><p className="lead">Vor Veröffentlichung werden ausschließlich freigegebene, echte Projektbilder und -angaben ergänzt. Die visuelle Bühne ist bereits vollständig vorbereitet.</p></div></div>
        </Reveal>
      </section>

      <section className="section audience-section">
        <div className="container">
          <Reveal><span className="eyebrow">Auftraggeber</span><h2 className="display">Für private, gewerbliche und institutionelle Auftraggeber.</h2></Reveal>
          <Stagger className="audience-list">{audiences.map(([title, text], index) => <StaggerItem className="audience" key={title}><span className="audience-no">0{index + 1}</span><strong>{title}</strong><p>{text}</p><ArrowRight size={18} /></StaggerItem>)}</Stagger>
        </div>
      </section>

      <section className="section coverage coverage-motion">
        <div className="container split-grid">
          <Reveal direction="left"><span className="eyebrow coverage-eyebrow">Einsatzgebiete</span><h2 className="display">Von Krauchenwies aus deutschlandweit im Einsatz.</h2><p className="lead">Der Firmensitz von DG Team befindet sich in Krauchenwies, Baden-Württemberg. Flexible Einsatzteams arbeiten projektbezogen in ganz Deutschland.</p><Stagger className="state-cloud">{federalStates.map((state) => <StaggerItem key={state}><span>{state}</span></StaggerItem>)}</Stagger><div style={{ marginTop: "2rem" }}><Button href="/einsatzgebiete">Projekt in Ihrer Region anfragen</Button></div></Reveal>
          <Reveal className="map-mark" direction="right"><span className="map-radar" aria-hidden="true" /><span className="map-dot"><MapPin size={16} /> Firmensitz Krauchenwies</span><span className="map-axis axis-x" /><span className="map-axis axis-y" /></Reveal>
        </div>
      </section>

      <section className="section about-motion" id="ueber-uns">
        <div className="container split-grid">
          <Reveal direction="left"><span className="eyebrow">DG Team</span><h2 className="display">Professionell vorbereitet. Persönlich begleitet.</h2></Reveal>
          <Reveal direction="right"><p className="lead">DG Team ist auf die Vorbereitung von Immobilien für Sanierung, Verkauf oder neue Nutzung spezialisiert. Von einzelnen Räumen bis zu umfangreichen Gewerbe- und Baustellenflächen übernehmen wir vereinbarte Räumungs- und Entkernungsarbeiten strukturiert und zuverlässig.</p><p className="lead">Persönliche Betreuung, transparente Kommunikation und eine saubere Durchführung stehen im Mittelpunkt.</p><blockquote>Klare Kommunikation.<br />Klare Abläufe. <span className="red">Klare Flächen.</span></blockquote></Reveal>
        </div>
      </section>

      <section className="section career-home">
        <div className="container split-grid">
          <Reveal direction="left"><span className="eyebrow">Karriere</span><h2 className="display">Werde Teil von DG Team.</h2><p className="lead">Zuverlässige Mitarbeitende für Entrümpelung, Entkernung und Rückbau – in Vollzeit, Teilzeit, als Minijob oder Ferienjob.</p><Button href="/karriere">Karriere entdecken <Users size={18} /></Button></Reveal>
          <Reveal className="career-panel" direction="right"><Building2 className="red" size={36} /><span className="service-no">PERSPEKTIVE / 01</span><h3>Mit Verantwortung wachsen.</h3><p className="lead">Wer zuverlässig arbeitet, kann perspektivisch mehr Verantwortung übernehmen – etwa in der Koordination eines Einsatzteams.</p><div className="career-orbit" aria-hidden="true"><i /><i /></div></Reveal>
        </div>
      </section>

      <section className="section inquiry-section">
        <div className="container">
          <Reveal><span className="eyebrow">Anfrage</span><h2 className="display">Ihr Projekt beginnt mit wenigen Angaben.</h2></Reveal>
          <div className="quote-shell"><Reveal className="quote-aside" direction="left"><span className="service-no">SCHNELLKONTAKT</span><h3>Noch nicht alle Details parat?</h3><p className="lead">Eine kurze Nachricht genügt. Für ein genaueres Angebot nutzen Sie den fünfstufigen Konfigurator.</p><Button href="/angebot">Zum Angebotskonfigurator</Button></Reveal><Reveal direction="right"><ContactForm /></Reveal></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container split-grid"><Reveal direction="left"><span className="eyebrow">FAQ</span><h2 className="display">Klare Antworten vor dem ersten Gespräch.</h2></Reveal><Reveal direction="right"><Accordion items={homeFaq} /></Reveal></div>
      </section>

      <section className="section final-section">
        <Reveal className="container final-cta" amount={0.3}><div className="final-cta-grid" aria-hidden="true" /><span className="eyebrow">Nächster Schritt</span><h2 className="display">Bereit für klare Verhältnisse?</h2><p className="lead">Beschreiben Sie Ihr Projekt in wenigen Schritten. DG Team prüft Ihre Angaben und meldet sich persönlich bei Ihnen.</p><div className="hero-actions"><Button href="/angebot">Jetzt Angebot anfragen</Button><Button href="/kontakt" variant="secondary">Kontakt aufnehmen</Button></div><span className="final-index" aria-hidden="true">DG</span></Reveal>
      </section>
    </>
  );
}
