import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getPathname } from "@i18n/navigation";
import { routing } from "@i18n/routing";
import { ServicesPage } from "@pages/services";
import { serviceIds } from "@entities/service/model/services";
import { siteConfig } from "@shared/config/site";
import { serializeJsonLd } from "@shared/lib/json-ld";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({
    locale,
    namespace: "ServicesPage.metadata",
  });
  const metadata = await getTranslations({ locale, namespace: "Metadata" });
  const pathname = getPathname({ locale, href: "/services" });
  const languages = Object.fromEntries(
    routing.locales.map((language) => [
      language,
      getPathname({ locale: language, href: "/services" }),
    ]),
  );

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: pathname,
      languages: { ...languages, "x-default": languages.fa },
    },
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: [locale === "fa" ? "en_US" : "fa_IR"],
      url: pathname,
      siteName: metadata("siteName"),
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/android-chrome-512x512.png",
          width: 512,
          height: 512,
          alt: metadata("imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
      images: ["/android-chrome-512x512.png"],
    },
  };
}

export default async function ServicesRoute({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("ServicesPage");
  const services = await getTranslations("Services.cards");
  const business = await getTranslations("StructuredData");
  const homeUrl = new URL(getPathname({ locale, href: "/" }), siteConfig.url)
    .href;
  const pageUrl = new URL(
    getPathname({ locale, href: "/services" }),
    siteConfig.url,
  ).href;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
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
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: serviceIds.length,
          itemListElement: serviceIds.map((id, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              "@id": `${pageUrl}#service-${id}`,
              url: `${pageUrl}#service-${id}`,
              name: services(`${id}.title`),
              description: services(`${id}.description`),
              provider: { "@id": `${siteConfig.url}/#store` },
            },
          })),
        },
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

  return (
    <>
      <ServicesPage locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
