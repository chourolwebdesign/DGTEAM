"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { site } from "@/content/site";

const query = encodeURIComponent(`${site.address.street}, ${site.address.postalCode} ${site.address.city}`);

export function ConsentMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="consent-map is-loaded">
        <iframe
          src={`https://www.google.com/maps?q=${query}&output=embed&hl=de`}
          title={`Karte: ${site.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="consent-map">
      <div className="consent-map-grid" aria-hidden="true" />
      <MapPin className="red" size={32} aria-hidden="true" />
      <h3>{site.address.street}<br />{site.address.postalCode} {site.address.city}</h3>
      <p>Die Karte wird erst nach Ihrer Zustimmung geladen. Beim Laden werden Daten (z.&nbsp;B. Ihre IP-Adresse) an Google übertragen.</p>
      <div className="consent-map-actions">
        <button className="button button-primary" onClick={() => setLoaded(true)}>Karte laden</button>
        <a
          className="button button-secondary"
          href={`https://www.google.com/maps/search/?api=1&query=${query}`}
          target="_blank"
          rel="noreferrer"
        >
          Route extern planen
        </a>
      </div>
    </div>
  );
}
