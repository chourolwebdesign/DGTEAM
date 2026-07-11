import { site } from "@/content/site";

export const organizationJsonLd = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: site.name, url: site.url,
  telephone: site.phone, email: site.email,
  address: { "@type": "PostalAddress", streetAddress: site.address.street, postalCode: site.address.postalCode, addressLocality: site.address.city, addressCountry: "DE" },
  areaServed: { "@type": "Country", name: "Deutschland" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" }],
  contactPoint: { "@type": "ContactPoint", telephone: site.phone, contactType: "customer service", areaServed: "DE", availableLanguage: "de" }
};
