export type FAQ = { question: string; answer: string };
export type Service = {
  slug: string; number: string; title: string; shortTitle: string; description: string;
  trust: string[]; scope: string[]; audiences: string[]; limitation?: string; faqs: FAQ[];
  metadata: { title: string; description: string };
};

export const serviceProcess: { no: string; title: string; text: string }[] = [
  { no: "01", title: "Anfrage stellen", text: "Sie übermitteln uns die wichtigsten Informationen zu Ihrem Objekt – gern mit Fotos und Grundriss." },
  { no: "02", title: "Planung & Abstimmung", text: "Wir prüfen den Umfang, klären offene Punkte und planen Termin, Team und Durchführung." },
  { no: "03", title: "Umsetzung", text: "Die vereinbarten Arbeiten werden strukturiert, effizient und im abgestimmten Umfang ausgeführt." },
  { no: "04", title: "Übergabe", text: "Die Immobilie wird im vereinbarten Zustand übergeben – auf Wunsch besenrein." },
];

const commonCost = "Die Kosten hängen unter anderem von Objektgröße, Zugänglichkeit, Menge, Materialien und dem vereinbarten Leistungsumfang ab. Nach Prüfung der Angaben erstellt DG Team ein individuelles Angebot.";

export const services: Service[] = [
  {
    slug: "entruempelung-haushaltsaufloesung", number: "01", title: "Entrümpelung & Haushaltsauflösung", shortTitle: "Entrümpelung",
    description: "Wir räumen Wohnungen, Häuser, Keller, Dachböden, Garagen und Gewerbeobjekte zuverlässig, diskret und termingerecht.",
    trust: ["Privat & Gewerbe", "Diskrete Abwicklung", "Deutschlandweit im Einsatz"],
    scope: ["Wohnungen & Häuser", "Keller & Dachböden", "Garagen & Lager", "Nachlass- und Haushaltsauflösungen", "Gewerbeobjekte"],
    audiences: ["Umzug", "Immobilienverkauf", "Neuvermietung", "Nachlassfall", "Geschäftsauflösung", "Sanierungsvorbereitung"],
    faqs: [
      { question: "Was kostet eine Entrümpelung?", answer: commonCost },
      { question: "Übernimmt DG Team auch Haushaltsauflösungen?", answer: "Ja. Der Umfang wird respektvoll, diskret und persönlich abgestimmt." },
      { question: "Ist eine Besichtigung möglich?", answer: "Ja. Die Besichtigung kann kostenfrei sein; abhängig von der Entfernung kann eine vorab transparent kommunizierte Anfahrtspauschale anfallen." }
    ], metadata: { title: "Entrümpelung & Haushaltsauflösung deutschlandweit | DG Team", description: "Entrümpelung von Wohnungen, Häusern, Kellern und Gewerbeobjekten – diskret, strukturiert und deutschlandweit." }
  },
  {
    slug: "entkernung-rueckbau", number: "02", title: "Entkernung / Rückbau", shortTitle: "Entkernung",
    description: "Wir entfernen vereinbarte nicht tragende Bauteile und bereiten Immobilien für Sanierung, Modernisierung oder Umbau vor.",
    trust: ["Ausschließlich nicht tragende Bauteile", "Klare Abstimmung", "Deutschlandweit im Einsatz"],
    scope: ["Bodenbeläge", "Deckenverkleidungen", "Trockenbauwände", "Türen & Zargen", "Sanitärgegenstände", "Einbauten & Küchen"],
    audiences: ["Wohnungen", "Häuser", "Büroflächen", "Gewerbeobjekte", "Industrieflächen", "Lagerhallen"],
    limitation: "DG Team führt keine Arbeiten an tragenden Bauteilen durch und nimmt keine Eingriffe in die Gebäudestatik vor. Der Leistungsumfang wird vor Projektbeginn individuell abgestimmt.",
    faqs: [
      { question: "Was versteht man unter einer Entkernung?", answer: "Die abgestimmte Entfernung fest verbauter, nicht tragender Elemente zur Vorbereitung einer weiteren Nutzung oder Sanierung." },
      { question: "Führt DG Team Arbeiten an tragenden Wänden durch?", answer: "Nein. Tragende oder statisch relevante Bauteile sind ausdrücklich ausgeschlossen." },
      { question: "Was beeinflusst die Kosten?", answer: commonCost }
    ], metadata: { title: "Entkernung & Rückbau nicht tragender Bauteile | DG Team", description: "Entkernung und Rückbau vereinbarter nicht tragender Bauteile – strukturiert geplant und deutschlandweit umgesetzt." }
  },
  {
    slug: "industrie-baustellenraeumung", number: "03", title: "Industrie- & Baustellenräumung", shortTitle: "Baustellenräumung",
    description: "Wir sortieren, verladen und transportieren vereinbarte Restmaterialien, Verpackungen und lose Rückstände von Industrie-, Lager- und Baustellenflächen ab.",
    trust: ["Flexible Einsatzplanung", "Einzelne Abschnitte oder komplette Flächen", "Deutschlandweit im Einsatz"],
    scope: ["Rest- & Verpackungsmaterialien", "Industriehallen", "Lagerflächen", "Gewerbliche Bereiche", "Bauabschnitte", "Wiederkehrende Einsätze"],
    audiences: ["Umbau & Sanierung", "Großbaustellen", "Infrastrukturprojekte", "Industrieprojekte", "Lager- und Gewerbeflächen"],
    limitation: "Der konkrete Material- und Leistungsumfang wird vorab abgestimmt. Gefährliche oder gesondert zu behandelnde Stoffe müssen vor Beginn angegeben werden.",
    faqs: [
      { question: "Welche Materialien können geräumt werden?", answer: "Vereinbarte Restmaterialien, Verpackungen und lose Rückstände. Besonderheiten werden vor Beginn geklärt." },
      { question: "Sind wiederkehrende Einsätze möglich?", answer: "Ja, einmalige und wiederkehrende Unterstützung kann projektbezogen geplant werden." },
      { question: "Wie werden Sicherheitsanforderungen abgestimmt?", answer: "Einweisungen, PSA, Arbeitszeiten sowie Tor- und Sicherheitsanmeldungen werden vor dem Einsatz geklärt." }
    ], metadata: { title: "Industrie- & Baustellenräumung deutschlandweit | DG Team", description: "Flexible Räumung von Baustellen, Industrie-, Lager- und Gewerbeflächen nach abgestimmtem Leistungsumfang." }
  },
  {
    slug: "saubere-uebergabe", number: "04", title: "Saubere und besenreine Übergabe", shortTitle: "Saubere Übergabe",
    description: "Nach einer Entrümpelung oder Entkernung sorgen wir im vereinbarten Umfang für eine ordentliche und besenreine Übergabe.",
    trust: ["Anschlussleistung nach Hauptleistung", "Vereinbarter Umfang", "Ordentliches Ergebnis"],
    scope: ["Grobes Zusammenkehren", "Einfache Schmutzbeseitigung", "Entfernung loser Rückstände", "Besenreine Übergabe nach Vereinbarung"],
    audiences: ["Eigentümer", "Vermieter", "Hausverwaltungen", "Immobilienunternehmen", "Investoren"],
    limitation: "Die saubere Übergabe ist ausschließlich als Anschlussleistung verfügbar und stellt keine eigenständige professionelle Gebäudereinigung dar.",
    faqs: [
      { question: "Was bedeutet besenrein?", answer: "Lose Rückstände werden entfernt und die vereinbarten Flächen grob zusammengekehrt." },
      { question: "Ist das eine Gebäudereinigung?", answer: "Nein. Es handelt sich um eine Anschlussleistung nach Entrümpelung oder Entkernung." }
    ], metadata: { title: "Besenreine Übergabe nach Entrümpelung oder Entkernung | DG Team", description: "Ordentliche, besenreine Übergabe als Anschlussleistung nach Entrümpelung oder Entkernung." }
  },
  {
    slug: "optische-aufbereitung", number: "05", title: "Einfache optische Aufbereitung", shortTitle: "Optische Aufbereitung",
    description: "Auf Wunsch übernehmen wir nach unseren Hauptleistungen einfache Maßnahmen zur optischen Verbesserung der Räume.",
    trust: ["Optionale Zusatzleistung", "Individuell vereinbart", "Einfache visuelle Verbesserung"],
    scope: ["Einfache visuelle Verbesserung", "Individuell abgestimmter Umfang", "Nur nach einer Hauptleistung", "Vorbereitung der weiteren Nutzung"],
    audiences: ["Eigentümer", "Vermieter", "Immobilienunternehmen", "Investoren"],
    limitation: "Die optische Aufbereitung ersetzt keine fachhandwerklichen Maler-, Renovierungs- oder Sanierungsarbeiten. Art und Umfang werden individuell vereinbart.",
    faqs: [
      { question: "Was umfasst die optische Aufbereitung?", answer: "Nur einfache, individuell vereinbarte Maßnahmen nach einer Hauptleistung." },
      { question: "Ersetzt sie eine Renovierung?", answer: "Nein. Sie ersetzt keine fachhandwerklichen Maler-, Renovierungs- oder Sanierungsarbeiten." }
    ], metadata: { title: "Einfache optische Aufbereitung | DG Team", description: "Individuell vereinbarte, einfache optische Aufbereitung nach Entrümpelung oder Entkernung." }
  }
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
