import type { FAQ } from "@/content/services";

export type FAQCategory = { title: string; items: FAQ[] };

export const faqCategories: FAQCategory[] = [
  {
    title: "Allgemein",
    items: [
      { question: "Was ist der Unterschied zwischen Entrümpelung, Entkernung und Baustellenräumung?", answer: "Entrümpelung betrifft überwiegend bewegliche Gegenstände wie Möbel, Hausrat, Elektrogeräte und Sperrmüll. Entkernung beziehungsweise Rückbau bezeichnet die vereinbarte Entfernung fest verbauter, nicht tragender Elemente. Industrie- und Baustellenräumung richtet sich an gewerbliche Projekte, bei denen vereinbarte Restmaterialien, Verpackungen oder lose Rückstände geräumt werden." },
      { question: "Ist DG Team deutschlandweit tätig?", answer: "Ja. Der Firmensitz ist in Krauchenwies, Baden-Württemberg; Einsätze werden in allen 16 Bundesländern geplant. Je nach Entfernung kann eine vorab kommunizierte Anfahrtspauschale entstehen." },
      { question: "Für welche Kundengruppen arbeitet DG Team?", answer: "Für Privatpersonen, Eigentümer, Vermieter, Hausverwaltungen, Immobilienunternehmen, Investoren, Bauherren sowie Gewerbe-, Industrie- und Bauunternehmen." },
      { question: "Was bedeutet besenreine Übergabe?", answer: "Lose Rückstände werden entfernt und die vereinbarten Flächen grob zusammengekehrt. Die saubere Übergabe ist eine Anschlussleistung nach Entrümpelung oder Entkernung und keine eigenständige professionelle Gebäudereinigung." },
    ],
  },
  {
    title: "Entrümpelung",
    items: [
      { question: "Was bedeutet Hausrat-Menge: wenig, mittel oder viel?", answer: "Wenig: einzelne Möbelstücke oder Kartons, zum Beispiel ein fast leerer Keller. Mittel: normale Einrichtung einer Wohnung mit Möbeln, Geräten und persönlichen Gegenständen. Viel: vollständig eingerichtetes oder stark gefülltes Objekt." },
      { question: "Was bedeutet einfache, leichte oder erschwerte Zugänglichkeit?", answer: "Einfach: ebenerdiger Zugang oder Aufzug mit guter Parkmöglichkeit. Leicht: wenige Stockwerke oder kürzere Wege. Erschwert: enge Treppenhäuser, lange Tragewege oder eingeschränkte Park- und Zufahrtssituationen." },
      { question: "Können Keller und Dachböden geräumt werden?", answer: "Ja. Neben Wohnungen und Häusern räumt DG Team auch Keller, Dachböden, Garagen, Lager- und Gewerbeflächen." },
      { question: "Was zählt als Sondermüll oder gefährlicher Stoff?", answer: "Zum Beispiel Farben, Lacke, Chemikalien, Öle, Batterien oder asbestverdächtige Materialien. Solche Stoffe müssen vor Projektbeginn angegeben werden, damit der Umgang vorab geklärt werden kann." },
    ],
  },
  {
    title: "Entkernung",
    items: [
      { question: "Was bedeutet komplette oder teilweise Entkernung?", answer: "Bei einer kompletten Entkernung werden alle vereinbarten nicht tragenden Elemente eines Bereichs entfernt. Bei einer teilweisen Entkernung nur ausgewählte Bauteile, etwa Bodenbeläge oder Trockenbauwände." },
      { question: "Führt DG Team Arbeiten an tragenden Bauteilen durch?", answer: "Nein. DG Team entfernt ausschließlich vereinbarte nicht tragende, statisch nicht relevante Bauteile und greift nicht in die Gebäudestatik ein." },
      { question: "Welche Bauteile können entfernt werden?", answer: "Zum Beispiel Bodenbeläge, Deckenverkleidungen, Trockenbauwände, Türen und Zargen, Sanitärgegenstände sowie Einbauten und Küchen — immer nach vorheriger Abstimmung." },
      { question: "Was muss vor Projektbeginn geklärt werden?", answer: "Der genaue Leistungsumfang, betroffene Räume, vorhandene Materialien, ein möglicher Gefahrstoffverdacht sowie Termine und Zugänglichkeit." },
    ],
  },
  {
    title: "Baustellenräumung",
    items: [
      { question: "Wann sollte Industrie- und Baustellenräumung gewählt werden?", answer: "Bei gewerblichen Projekten wie Umbauten, Sanierungen, Großbaustellen, Industriehallen oder Lagerflächen, bei denen vereinbarte Restmaterialien, Verpackungen oder lose Rückstände geräumt werden sollen." },
      { question: "Sind wiederkehrende Baustelleneinsätze möglich?", answer: "Ja. Neben einmaligen Räumungen kann wiederkehrende Unterstützung geplant werden — täglich, wöchentlich oder nach Bedarf auf Abruf." },
      { question: "Was bedeutet überwiegendes Material?", answer: "Die Materialart, die den größten Anteil des zu räumenden Volumens ausmacht — etwa Holz, Metall, Verpackungen oder gemischte Materialien. Diese Angabe hilft bei Planung und Kalkulation." },
      { question: "Wie werden besondere Sicherheitsanforderungen abgestimmt?", answer: "Einweisungen, PSA-Anforderungen, Arbeitszeiten sowie Tor- oder Sicherheitsanmeldungen werden vor dem Einsatz gemeinsam geklärt." },
    ],
  },
  {
    title: "Angebotsanfrage",
    items: [
      { question: "Ist die Angebotsanfrage verbindlich?", answer: "Nein. Die Anfrage ist kostenfrei und unverbindlich. Nach der Prüfung meldet sich DG Team persönlich." },
      { question: "Wie werden die Kosten kalkuliert?", answer: "Kosten hängen von Objektgröße, Zugänglichkeit, Menge, Materialien und erforderlichem Arbeitsumfang ab. Deshalb erstellt DG Team ein individuelles Angebot statt pauschaler Fantasiepreise." },
      { question: "Welche Fotos sollten hochgeladen werden?", answer: "Nach Möglichkeit Fotos aller relevanten Räume aus mehreren Blickwinkeln, große oder besondere Gegenstände, Treppenhäuser, Aufzüge und Eingänge sowie die Park- und Zufahrtssituation. Grundrisse helfen zusätzlich." },
      { question: "Was passiert nach dem Absenden?", answer: "DG Team prüft die Angaben und meldet sich persönlich — je nach gewünschtem Kontaktweg telefonisch, per WhatsApp oder per E-Mail." },
    ],
  },
  {
    title: "Besichtigung & Anfahrt",
    items: [
      { question: "Ist eine Besichtigung möglich?", answer: "Ja. Die Besichtigung selbst kann kostenfrei sein; abhängig von der Entfernung kann eine vorab transparent kommunizierte Anfahrtspauschale anfallen." },
      { question: "Können Anfahrtskosten entstehen?", answer: "Je nach Projektentfernung kann eine kleine Anfahrtspauschale anfallen. Falls das der Fall ist, wird sie vorab transparent kommuniziert." },
    ],
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }))
  ),
};
