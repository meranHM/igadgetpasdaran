import { getTranslations } from "next-intl/server";
import { createAboutPageJsonLd, serializeJsonLd } from "@shared/lib/json-ld";
import { skipLinkClassName } from "@shared/ui/styles";
import { SiteHeader } from "@widgets/site-header/ui";
import { SiteFooter } from "@widgets/site-footer/ui";
import { AboutHero } from "@widgets/about-hero/ui";
import { AboutStory } from "@widgets/about-story/ui";
import { AboutInvitation } from "@widgets/about-invitation/ui";

type AboutPageProps = {
  locale: string;
};

export async function AboutPage({ locale }: AboutPageProps) {
  const t = await getTranslations("Common");
  const structuredData = await createAboutPageJsonLd(locale);

  return (
    <>
      <a className={skipLinkClassName} href="#main-content">
        {t("skipToContent")}
      </a>
      <SiteHeader locale={locale} pathname="/about" />
      <main id="main-content">
        <AboutHero />
        <AboutStory />
        <AboutInvitation />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
    </>
  );
}
