export const site = {
  name: "DG Team",
  statement: "Wir schaffen Platz für Ihre Vision.",
  description: "Entkernung, Entrümpelung und Baustellenräumung deutschlandweit.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgteam.de",
  phone: "+49 152 5260 9017",
  phoneHref: "tel:+4915252609017",
  whatsapp: "https://wa.me/4915252609017",
  email: "kontakt@dgteam.de",
  address: { street: "Öhmdwiese 18", postalCode: "72505", city: "Krauchenwies", country: "Deutschland" },
  hours: "Montag–Freitag, 08:30–17:00 Uhr",
  nav: [
    { label: "Leistungen", href: "/leistungen" },
    { label: "Ablauf", href: "/#ablauf" },
    { label: "Über uns", href: "/#ueber-uns" },
    { label: "Einsatzgebiete", href: "/einsatzgebiete" },
    { label: "Karriere", href: "/karriere" },
    { label: "Kontakt", href: "/kontakt" }
  ]
} as const;

export const federalStates = ["Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen"];
