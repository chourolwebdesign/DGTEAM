# DG Team Website

Production-ready Next.js-Website im Designsystem **Precision in Motion**. Die Anwendung enthält eine dreistufige Cinematic-Hero-Sequenz, scroll-gekoppelte Motion-Erlebnisse, Startseite, fünf Leistungsseiten, Einsatzgebiete, Karriere, Kontakt, fünfstufigen Angebotskonfigurator, API-Routen, E-Mail-Versand, SEO, JSON-LD, Sitemap, robots.txt und `llms.txt`.

## Schnellstart

Voraussetzung: Node.js 20.9 oder neuer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Öffnen Sie `http://localhost:3000`.

## Qualitätsprüfung

```bash
npm run lint
npm run typecheck
npm run build
```

Mit `npm run check` laufen alle Prüfungen nacheinander.

## Umgebungsvariablen

Alle Variablen stehen in `.env.example`. Serversecrets besitzen bewusst kein `NEXT_PUBLIC_`-Präfix.

- `RESEND_API_KEY`: API-Schlüssel für den E-Mail-Versand.
- `CONTACT_NOTIFY_EMAIL`, `QUOTE_NOTIFY_EMAIL`, `CAREER_NOTIFY_EMAIL`: interne Empfänger.
- `EMAIL_FROM`: verifizierter Absender.
- `NEXT_PUBLIC_SITE_URL`: kanonische Produktions-URL.
- `BLOB_READ_WRITE_TOKEN`: für die noch zu aktivierende private Upload-Strecke.
- `TURNSTILE_SECRET_KEY` und `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: optionaler Bot-Schutz.

Ohne `RESEND_API_KEY` werden E-Mails nur in lokaler Entwicklung als No-op behandelt. In Produktion liefern die API-Routen bewusst einen Fehler.

## Resend und Domain

1. `dgteam.de` in Resend als Domain hinzufügen.
2. Die angezeigten DNS-Einträge beim Domainanbieter setzen.
3. Auf Verifizierung warten.
4. `EMAIL_FROM` auf eine freigegebene Adresse wie `DG Team <anfrage@dgteam.de>` setzen.
5. Jede Formularart in einer Vercel-Preview testen.

## Uploads

Der Konfigurator dokumentiert die Upload-Stelle, veröffentlicht aber absichtlich keine ungeschützten Datei-URLs. Vor Aktivierung:

1. Vercel Blob oder eine gleichwertige private Lösung konfigurieren.
2. JPG, PNG, HEIC und PDF serverseitig prüfen.
3. Maximal 15 Dateien und die gewünschte Größenbegrenzung erzwingen.
4. Dateinamen bereinigen, ausführbare Formate ablehnen und kurzlebige/sichere Zugriffe verwenden.
5. Datenschutzerklärung und Löschfristen an die echte Implementierung anpassen.

## Inhalte bearbeiten

- Unternehmensdaten und Navigation: `content/site.ts`
- Leistungen, Metadaten und FAQ: `content/services.ts`
- Startseiteninhalte: `app/page.tsx`
- Farben, Layout und Responsive Design: `app/globals.css`

Kontaktangaben kommen zentral aus `content/site.ts` und sollten nicht in mehreren Komponenten dupliziert werden.

## Bilder ersetzen

Die drei Hero-Bilder sind KI-generierte Design-Demonstrationen und keine realen Kundenprojekte:

- `public/images/hero-before.png`
- `public/images/hero-industrial-demo.png`
- `public/images/hero-after.png`

Ersetzen Sie die Sequenz idealerweise durch drei zusammengehörige, freigegebene Originalaufnahmen im gleichen Seitenverhältnis. Danach `object-position` für Mobilgeräte in `app/globals.css` prüfen.

## Projekte, Bewertungen und Jobs

- Projekte erst nach Freigabe mit echten Angaben und Bildern ergänzen.
- Bewertungen bleiben verborgen, bis verifizierte Quellen vorliegen.
- Die Karriereseite nutzt eine Initiativbewerbung und behauptet keine offene Stelle.
- Vor jeder Veröffentlichung `CONTENT_CHECKLIST.md` abarbeiten.

## Rechtliches

Impressum, Datenschutz und AGB sind klar als zu prüfende Platzhalter markiert. Sie sind keine Rechtsberatung und müssen vor Veröffentlichung auf die tatsächliche Rechtsform, Dienste und Verträge abgestimmt werden.

## Vercel Deployment

1. Repository in Vercel importieren.
2. Framework Preset `Next.js` verwenden.
3. Umgebungsvariablen für Production und Preview setzen.
4. Build Command `npm run build` nutzen.
5. Domain `www.dgteam.de` anbinden und HTTPS/DNS prüfen.
6. Formulare, kanonische URLs, Sitemap, `robots.txt`, strukturierte Daten und mobile Darstellung testen.

## Architekturhinweise

- Server Components sind Standard; nur Navigation, Akkordeon, Slider und Formulare hydratisieren.
- Alle API-Eingaben werden mit Zod validiert und pro IP begrenzt.
- Honeypot ist im Kontaktformular aktiv.
- Animationen respektieren `prefers-reduced-motion`.
- Hero-Crossfades, Ken-Burns-Bewegung, Swipe-Steuerung, Scroll-Reveals, gestaffelte Karten und die scroll-gekoppelte Prozesslinie werden mit Framer Motion umgesetzt.
- Die mobile Kontaktleiste berücksichtigt iPhone Safe Areas.
- Es gibt keine erfundenen Bewertungen, Statistiken, Zertifikate oder Preise.
