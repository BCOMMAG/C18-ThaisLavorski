import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thaislavorski.pages.dev";

  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: OFFICE_INFO.shortName,
    description:
      "Advocacia especializada em Direito de Família, Sucessões, Divórcio, Inventário e Planejamento Patrimonial com sede em Curitiba/PR e atendimento presencial e online para todo o Brasil.",
    url: siteUrl,
    telephone: `+${OFFICE_INFO.whatsapp}`,
    priceRange: "$$",
    image: `${siteUrl}/og-image_optimized_300.jpg`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Mal. Floriano Peixoto, 5854 - Sl 04 - Hauer",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "81630-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4795,
      longitude: -49.2483,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.instagramUrl,
      OFFICE_INFO.linkedinUrl,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.experience}, ${LAWYER_PROFILE.graduation}`,
      },
    ],
  };
}