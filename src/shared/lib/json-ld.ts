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

export async function createAboutPageJsonLd(locale: string) {
  const t = await getTranslations({ locale, namespace: "About" });
  const business = await getTranslations({
    locale,
    namespace: "StructuredData",
  });
  const homeUrl = new URL(locale === "fa" ? "/" : `/${locale}`, siteConfig.url)
    .href;
  const pageUrl = `${homeUrl.replace(/\/$/, "")}/about`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: t("metadata.title"),
        description: t("metadata.description"),
        inLanguage: locale,
        about: {
          "@type": "ElectronicsStore",
          "@id": `${siteConfig.url}/#store`,
          name: business("name"),
          url: homeUrl,
        },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("breadcrumb.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("breadcrumb.current"),
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
