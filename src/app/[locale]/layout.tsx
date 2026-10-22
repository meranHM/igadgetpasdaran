import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@i18n/routing";
import "../globals.css";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig } from "@shared/config/site";
import { ThemeScript } from "@features/theme-toggle";
import { layoutStyles } from "./layout-styles";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const canonicalPath = locale === routing.defaultLocale ? "/" : `/${locale}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(","),
    alternates: {
      canonical: canonicalPath,
      languages: {
        fa: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? ["en_US"] : ["fa_IR"],
      url: canonicalPath,
      siteName: t("siteName"),
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      images: [
        {
          url: "/android-chrome-512x512.png",
          width: 512,
          height: 512,
          alt: t("imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      images: ["/android-chrome-512x512.png"],
    },
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={layoutStyles.document}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body
        className={
          locale === "fa" ? layoutStyles.bodyFa : layoutStyles.bodyEn
        }
      >
        {children}
      </body>
    </html>
  );
}
