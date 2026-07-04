import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@i18n/routing";
import { createLocalBusinessJsonLd, serializeJsonLd } from "@shared/lib/json-ld";
import { SiteHeader } from "@widgets/site-header/ui";
import { Hero } from "@widgets/hero/ui";
import { TrustStory } from "@widgets/trust-story/ui";
import { Services } from "@widgets/services/ui";
import { TrustSignals } from "@widgets/trust-signals/ui";
import { Testimonials } from "@widgets/testimonials/ui";
import { Contact } from "@widgets/contact/ui";
import { RobotCompanion } from "@widgets/robot-companion/ui";
import { SiteFooter } from "@widgets/site-footer/ui";
import { Container } from "@shared/ui/container";
import { pageStyles } from "./page-styles";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("Common");
  const structuredData = await createLocalBusinessJsonLd(locale);

  return (
    <>
      <a
        className={pageStyles.skipLink}
        href="#main-content"
      >
        {t("skipToContent")}
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <Hero />
        <Container className={pageStyles.contentLayout}>
          <div className={pageStyles.content}>
            <TrustStory />
            <Services />
            <TrustSignals />
            <Testimonials />
            <Contact />
          </div>
          <RobotCompanion />
        </Container>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
