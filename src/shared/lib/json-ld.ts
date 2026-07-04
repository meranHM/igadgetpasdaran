import { getTranslations } from "next-intl/server";
import { siteConfig } from "@shared/config/site";

export async function createLocalBusinessJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: "StructuredData" });
  const localePath = locale === "fa" ? "" : `/${locale}`;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectronicsStore"],
    "@id": `${siteConfig.url}/#store`,
    name: t("name"),
    description: t("description"),
    url: `${siteConfig.url}${localePath}`,
    image: `${siteConfig.url}/android-chrome-512x512.png`,
    logo: `${siteConfig.url}/igadget-logo.svg`,
    telephone: t("telephone"),
    priceRange: t("priceRange"),
    address: {
      "@type": "PostalAddress",
      streetAddress: t("address.street"),
      addressLocality: t("address.locality"),
      addressRegion: t("address.region"),
      addressCountry: t("address.country"),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    sameAs: [siteConfig.whatsappHref, siteConfig.telegramHref],
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
