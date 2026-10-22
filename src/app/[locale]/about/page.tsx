import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getPathname } from "@i18n/navigation";
import { routing } from "@i18n/routing";
import { AboutPage } from "@pages/about";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const t = await getTranslations({ locale, namespace: "About.metadata" });
  const metadata = await getTranslations({ locale, namespace: "Metadata" });
  const pathname = getPathname({ locale, href: "/about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: pathname,
      languages: { fa: "/about", en: "/en/about", "x-default": "/about" },
    },
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? ["en_US"] : ["fa_IR"],
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

export default async function AboutRoute({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return <AboutPage locale={locale} />;
}
