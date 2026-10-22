import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getPathname } from "@i18n/navigation";
import { routing } from "@i18n/routing";
import { ContactUsPage } from "@pages/contact-us";
import { siteConfig } from "@shared/config/site";
import { serializeJsonLd } from "@shared/lib/json-ld";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "ContactUs.metadata" });
  const metadata = await getTranslations({ locale, namespace: "Metadata" });
  const pathname = getPathname({ locale, href: "/contact-us" });
  const languages = Object.fromEntries(
    routing.locales.map((language) => [
      language,
      getPathname({ locale: language, href: "/contact-us" }),
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

export default async function ContactUsRoute({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("ContactUs");
  const business = await getTranslations("StructuredData");
  const homeUrl = new URL(getPathname({ locale, href: "/" }), siteConfig.url)
    .href;
  const pageUrl = new URL(
    getPathname({ locale, href: "/contact-us" }),
    siteConfig.url,
  ).href;
  // Contact endpoints and visit details are unverified launch placeholders.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
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

  return (
    <>
      <ContactUsPage locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
