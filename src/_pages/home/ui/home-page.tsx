import { getTranslations } from "next-intl/server";
import {
  createLocalBusinessJsonLd,
  serializeJsonLd,
} from "@shared/lib/json-ld";
import { Container } from "@shared/ui/container";
import { skipLinkClassName } from "@shared/ui/styles";
import { SiteHeader } from "@widgets/site-header/ui";
import { Hero } from "@widgets/hero/ui";
import { TrustStory } from "@widgets/trust-story/ui";
import { Services } from "@widgets/services/ui";
import { TrustSignals } from "@widgets/trust-signals/ui";
import { Testimonials } from "@widgets/testimonials/ui";
import { Contact } from "@widgets/contact/ui";
import { RobotCompanion } from "@widgets/robot-companion/ui";
import { SiteFooter } from "@widgets/site-footer/ui";
import { homePageStyles } from "./home-page-styles";

type HomePageProps = {
  locale: string;
};

export async function HomePage({ locale }: HomePageProps) {
  const t = await getTranslations("Common");
  const structuredData = await createLocalBusinessJsonLd(locale);

  return (
    <>
      <a className={skipLinkClassName} href="#main-content">
        {t("skipToContent")}
      </a>
      <SiteHeader locale={locale} />
      <main id="main-content">
        <Hero />
        <Container className={homePageStyles.contentLayout}>
          <div className={homePageStyles.content}>
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
