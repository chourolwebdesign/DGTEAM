import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqCategories, faqJsonLd } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen",
  description: "Antworten zu Entrümpelung, Entkernung, Baustellenräumung, Angebotsanfrage, Besichtigung und Anfahrt bei DG Team.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Häufige Fragen</span>
          <h1>Klare Antworten vor dem ersten Gespräch.</h1>
          <p className="lead">Die wichtigsten Fragen zu Leistungen, Ablauf, Angebot und Anfahrt — verständlich beantwortet. Ihre Frage ist nicht dabei? Rufen Sie uns einfach an.</p>
        </div>
      </section>
      {faqCategories.map((category, index) => (
        <section className="section" style={index % 2 ? { background: "#0d0d0d" } : undefined} key={category.title}>
          <div className="container split-grid">
            <div>
              <span className="eyebrow">0{index + 1} / 0{faqCategories.length}</span>
              <h2 className="display">{category.title}</h2>
            </div>
            <Accordion items={category.items} />
          </div>
        </section>
      ))}
      <section className="section">
        <div className="container panel" style={{ padding: "clamp(2rem,7vw,6rem)" }}>
          <h2 className="display">Noch offene Fragen?</h2>
          <p className="lead">Beschreiben Sie Ihr Projekt unverbindlich oder sprechen Sie direkt mit DG Team.</p>
          <div className="hero-actions">
            <Button href="/angebot">Jetzt Angebot anfragen</Button>
            <Button href="/kontakt" variant="secondary">Kontakt aufnehmen</Button>
          </div>
        </div>
      </section>
    </>
  );
}
