import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@i18n/routing";
import { createLocalBusinessJsonLd, serializeJsonLd } from "@shared/lib/json-ld";
import { SiteHeader } from "@widgets/site-header/ui/site-header";
import { Hero } from "@widgets/hero/ui/hero";
import { TrustStory } from "@widgets/trust-story/ui/trust-story";
import { Services } from "@widgets/services/ui/services";
import { TrustSignals } from "@widgets/trust-signals/ui/trust-signals";
import { Testimonials } from "@widgets/testimonials/ui/testimonials";
import { Contact } from "@widgets/contact/ui/contact";
import { RobotCompanion } from "@widgets/robot-companion/ui/robot-companion";
import { SiteFooter } from "@widgets/site-footer/ui/site-footer";
import { Container } from "@shared/ui/container";

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
        className="fixed start-5 top-3 z-100 -translate-y-[160%] rounded-[0.625rem] bg-ink px-4 py-2.5 text-white transition-transform duration-180 focus:translate-y-0"
        href="#main-content"
      >
        {t("skipToContent")}
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <Hero />
        <Container className="grid items-start min-[1081px]:grid-cols-[minmax(0,1fr)_11rem] min-[1081px]:gap-13">
          <div className="min-w-0">
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
